from flask import Blueprint, jsonify, request, json
from . import db
from .models import TodoList

main = Blueprint('main', __name__)

@main.route('/todos')
def get_todo_list():
    todo_list = TodoList.query.all()
    todos = []

    for todo in todo_list:
        todos.append({'id': todo.id, 'item': todo.item})
    return jsonify({'todos': todos})

@main.route('/add_todo', methods=['POST'])
def add_todo():
    todo_data = request.get_json()

    new_todo = TodoList(item=todo_data['item'])

    db.session.add(new_todo)
    db.session.commit()

    return 'Done', 201

@main.route('/delete_todo/<id>',methods=["DELETE"])
def delete_todo(id):
    todo = TodoList.query.filter_by(id=id).first()
    db.session.delete(todo)
    db.session.commit()
    return jsonify("Todo was deleted"),200
