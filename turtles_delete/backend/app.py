from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin
import json
import os

import enum_classes
from enum_classes import Country, Material

# init app

app = Flask(__name__)
CORS(app, support_credentials=True)
basedir = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)


# Product class/Model

class Turtle(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    name = db.Column(db.String(100))
    description = db.Column(db.String(100))
    speed = db.Column(db.Integer)
    weight = db.Column(db.Integer)
    age = db.Column(db.Integer)

    def __init__(self, name, description, speed, weight, age):
        self.name = name
        self.description = description
        self.speed = speed
        self.weight = weight
        self.age = age


# committing changes to db initialization
db.create_all()
db.session.commit()


# Product Schema
class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description', 'speed', 'weight', 'age')


# Init Schema
product_schema = ProductSchema()
products_schema = ProductSchema(many=True)


# create a product


@app.route('/turtle', methods=['POST'])
@cross_origin(supports_credentials=True)
def add_turtle():
    name = request.json['name']
    description = request.json['description']
    speed = request.json['speed']
    weight = request.json['weight']
    age = request.json['age']
    print(name)
    new_turtle = Turtle(name, description, speed, weight, age)
    print(new_turtle)
    db.session.add(new_turtle)
    db.session.commit()

    return product_schema.jsonify(new_turtle)


# get all products


@app.route('/turtle', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_turtles():
    all_turtles = Turtle.query.all()
    result = products_schema.dump(all_turtles)
    return jsonify(result)


# get single product


@app.route('/turtle/<id>', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_turtle(id):
    turtle = Turtle.query.get(id)
    return product_schema.jsonify(turtle)


# update a product

@cross_origin(allow_headers=['Content-Type'])
@app.route('/turtle/<id>', methods=['PUT'])
@cross_origin(supports_credentials=True)
def update_turtle(id):
    turtle = Turtle.query.get(id)

    name = request.json['name']
    description = request.json['description']
    speed = request.json['speed']
    weight = request.json['weight']
    age = request.json['age']

    turtle.name = name
    turtle.description = description
    turtle.speed = speed
    turtle.weight = weight
    turtle.age = age

    db.session.commit()

    return product_schema.jsonify(turtle)


# delete product
@app.route('/turtle/<id>', methods=['DELETE'])
@cross_origin(supports_credentials=True)
def delete_turtle(id):
    turtle = Turtle.query.get(id)
    db.session.delete(turtle)
    db.session.commit()
    return product_schema.jsonify(turtle)


# Run server


if __name__ == '__main__':
    app.run(debug=True)
