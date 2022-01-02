from flask import Blueprint, jsonify, request, json
from . import db
from .models import BlogPosts

main = Blueprint('main', __name__)

@main.route('/blog-posts')
def get_all_posts():
    post_list = BlogPosts.query.all()
    posts = []

    for post in post_list:
        posts.append({'title': post.title, 'content':post.content, 'date-time':post.created_at})
        # serialised_posts is a list of dictionaries

    return jsonify({'posts': posts})

@main.route('/blog-post/<int:id>')
def get_posts(id):
    post = BlogPosts.query.filter_by(id=id).first()
    serialised_post = {'title': post.title, 'content':post.content, 'date-time':post.created_at}
    #serialised_post is a dictionary

    return jsonify({'post': serialised_post})

@main.route('/add_post', methods=['POST'])
def add_post():
    post_data = request.get_json()

    new_post = BlogPosts(title=post_data['title'], content=post_data['content'])

    db.session.add(new_post)
    db.session.commit()

    return 'Done', 201

@main.route('/delete_post/<int:id>',methods=["DELETE"])
def delete_post(id):
    post = BlogPosts.query.filter_by(id=id).first()
    db.session.delete(post)
    db.session.commit()
    return jsonify("Post was deleted"),200

@main.route('/update_post/<int:id>',methods=["PUT"])
def update_post(id):
    post_data = request.get_json()

    post = BlogPosts.query.filter_by(id=id).first()

    post.title = post_data['title']
    post.content = post_data['content']

    db.session.commit()
    return jsonify("Post was updated"),200
