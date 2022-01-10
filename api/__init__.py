from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__,static_folder='src/build',static_url_path='')
    cors = CORS(app)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog-database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    from .routes import main
    app.register_blueprint(main)

    return app
