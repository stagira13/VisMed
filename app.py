from flask import *
import pandas as pd
import numpy as np
import datetime
import sqlite3
import glob
import os
from sqlalchemy import create_engine
import folium
from geojson import Point, Feature, FeatureCollection
import geojson

def create_feature(geo_dict,prop_key):
    lat = geo_dict['Y']
    lon = geo_dict['X']
    point_elm = Point((lon,lat))
    prop=geo_dict[prop_key]
    feature_elm = Feature(geometry=point_elm,properties=prop)
    return feature_elm
    
def create_feature_collection(geo_dicts,prop_key):
    data = []
    for geo_dict in geo_dicts:
        data.append(create_feature(geo_dict,prop_key))
    f_collect = FeatureCollection(data)
    return f_collect
    

app = Flask(__name__)

cwd = os.getcwd()
file = os.path.join(cwd,'hosp.db')
url = 'sqlite:///' + file

engine = create_engine(url, echo=True)

states = pd.read_sql('select distinct 都道府県 from hosp',engine)

@app.route("/")
def index():
    test_table = pd.read_sql('select * from hosp limit 10',engine)
    return render_template('index.html',
    test_table=test_table.to_html(),
    states = list(states['都道府県']))



@app.route("/states",methods = ['GET'])
def return_json():
    state_name = request.args.get('states')
    query = f"select * from hosp Where 都道府県 = '{state_name}' LIMIT 10"
    df = pd.read_sql(query,engine)
    geo_dicts = df.to_dict(orient='records')
    geo_json_data = create_feature_collection(geo_dicts,'医療機関名')
    return geojson.dumps(geo_json_data)

@app.route("/",methods = ['POST'])
def map():
    print(request.form)
    print(request.form.get('state'))
    state_name = request.form.get('state')
    query = f"select * from hosp Where 都道府県 = '{state_name}' LIMIT 10"
    test_table = pd.read_sql(query,engine)
    return render_template('index.html',
    test_table = test_table.to_html(),
    states = list(states['都道府県']))



if __name__ == "__main__":
	app.run(debug=True)