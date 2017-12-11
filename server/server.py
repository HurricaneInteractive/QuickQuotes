import os
from flask import Flask, render_template
from flask.ext.sqlalchemy import SQLAlchemy
from flask_restful import Api

from endpoints.quotes import Quotes


app = Flask(__name__, template_folder="../public", static_folder="../public/dist")
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import Result

api = Api(app)
api.add_resource(Quotes, '/api/quotes')

@app.route("/", defaults={'path': ''})
@app.route("/<path:path>")
def index(path):
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)