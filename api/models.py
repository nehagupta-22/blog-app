from . import db
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

class TodoList(db.Model):
    # Initialize the Column
    __tablename__ = "TodoList"
    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String)
