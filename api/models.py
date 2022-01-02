from . import db
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

class BlogPosts(db.Model):
    # Initialize the Columns
    __tablename__ = "BlogPosts"
    id = db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String(50))
    content=db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
