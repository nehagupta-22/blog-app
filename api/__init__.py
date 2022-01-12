from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__, static_folder='../src/build', static_url_path='')
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog-database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    from .routes import register_routes
    register_routes(app)

    return app
