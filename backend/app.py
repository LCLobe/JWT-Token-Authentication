import os
from flask import Flask
from flask_migrate import Migrate
from src.models import db
from src.admin import setup_admin
from src.routes import api
from src.utils import generate_sitemap

# create the app
app = Flask(__name__)
# configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
# initialize the app with the extension
db.init_app(app)
# initiate Admin in Flask app
setup_admin(app)
# initiate blueprints
app.register_blueprint(api, url_prefix='/') # API prefix can be added here

# migrade database to save work
migrate = Migrate(app, db)

@app.route('/')
def  index():
    return generate_sitemap(app)