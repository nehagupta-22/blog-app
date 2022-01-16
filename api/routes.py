from flask import jsonify, request, json, send_from_directory
from . import db
from .models import BlogPosts

def register_routes(main):
    def serve_react_homepage():
        return send_from_directory(main.static_folder, 'index.html')

    @main.route('/')
    def serve():
        return serve_react_homepage()

    @main.errorhandler(404)
    def on_404(e):
        return serve_react_homepage()

    @main.route('/blog-posts')
    def get_all_posts():
        post_list = BlogPosts.query.all()
        posts = []

        for post in post_list:
            posts.append({
            'id': post.id,
            'mood': post.mood,
            'title': post.title,
            'content':post.content,
            'date-time':post.created_at,
            'feature_image':post.feature_image})
            # serialised_posts is a list of dictionaries

        return jsonify({'posts': posts})

    @main.route('/blog-post/<int:id>')
    def get_post(id):
        post = BlogPosts.query.filter_by(id=id).first()
        serialised_post = {
        'id': post.id,
        'mood': post.mood,
        'title': post.title,
        'content':post.content,
        'date-time':post.created_at,
        'feature_image': post.feature_image}
        #serialised_post is a dictionary

        return jsonify({'post': serialised_post})

    @main.route('/add_post', methods=['POST'])
    def add_post():
        post_data = request.get_json()

        new_post = BlogPosts(
        mood = post_data['mood'],
        title=post_data['title'],
        content=post_data['content'],
        feature_image = post_data['feature_image']
        )

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

        post.mood = post_data['mood'],
        post.title = post_data['title']
        post.content = post_data['content']
        post.feature_image = post_data['feature_image']

        db.session.commit()
        return jsonify("Post was updated"),200
