from flask import *
import pandas as pd
import numpy as np
import datetime
import sqlite3
import glob
import os
from sqlalchemy import create_engine
import folium

app = Flask(__name__)

cwd = os.getcwd()
file = os.path.join(cwd,'hosp.db')
url = 'sqlite:///' + file

engine = create_engine(url, echo=True)

states = pd.read_sql('select distinct 都道府県 from hosp',engine)

@app.route("/")
def index():
    test_table = pd.read_sql('select * from hosp limit 10',engine)
    m = folium.Map(location=[41, 140], tiles="Mapbox Bright", zoom_start=7)
    m.save('templates/map.html')
    return render_template('index.html',
    test_table=test_table.to_html(classes="mdl-data-table mdl-js-data-table"),
    states = list(states['都道府県']))


@app.route("/",methods = ['POST'])
def map():
    print(request.form)
    print(request.form.get('state'))
    state_name = request.form.get('state')
    query = f"select * from hosp Where 都道府県 = '{state_name}' LIMIT 10"
    test_table = pd.read_sql(query,engine)
    return render_template('index.html',
    test_table = test_table.to_html(classes="mdl-data-table mdl-js-data-table"),
    states = list(states['都道府県']))

if __name__ == "__main__":
	app.run(debug=True)