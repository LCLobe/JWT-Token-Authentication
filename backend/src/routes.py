from flask import Blueprint, render_template, abort

api = Blueprint('api', __name__)

@api.route('/user')
def user():
    return 'user says hello.'