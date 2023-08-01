"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Perfil, Talent, Categories, Talent_request
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)

# login route


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email is None or password is None:
        return jsonify({"msg": "Necesitas un email o password X"}), 401
    user = User.query.filter_by(email = email, password = password).first()
    if user is None:
        return jsonify({"msg": "Credenciales invalidas"}), 404
    access_token = create_access_token(identity=user.id) #here token is created
    return jsonify({"access_token": access_token, "user": user.serialize()})
 

#app routes
@api.route('/user', methods=['POST', 'GET'])
def new_user():
    if request.method== 'GET':
        response_body = {
            "message": "Hola, este es el metodo GET"
        }
        return jsonify(response_body), 200
    else:
        body = request.json

        if 'email' not in body:
            return jsonify({"message": 'Debe ingresar un correo electronico'}), 400
        if 'password' not in body:
            return jsonify({"message": 'Debe ingresar una contraseña'}), 400
        if 'user_name' not in body:
            return jsonify({"message": 'Debe ingresar un nombre de usuario'}), 400
        
        nuevo_usuario = User(body['email'], body['password'], body['user_name'])
        print(nuevo_usuario)

        try:
            db.session.add(nuevo_usuario)
            db.session.commit()
            return jsonify({"user": nuevo_usuario.serialize(), "token": create_access_token(identity=nuevo_usuario.id)})
        except Exception as err:
            return jsonify({"message": "Ha ocurrido un error! 💥"}), 500
    
        # else: 
        #     return jsonify({"message": "Ya existe un usuario con ese email!" }), 400
        
    return  jsonify({"message":"Method not implemented yet!" }), 500

@api.route('/perfil', methods=['POST'])
@jwt_required()
def new_perfil():
    body = request.json        # lo que viene del request como un diccionario de python
    user = User.query.filter_by(id = get_jwt_identity()).one_or_none()
    print(user.id)
    if user != None: 
        nuevo_perfil = Perfil( body['name'], body['last_name'], body['phone'], body['age'], body['country'], body['state'], user.id, body['image_url'])
        # print(nuevo_perfil) Convertido a objeto de python
        db.session.add(nuevo_perfil) #Memoria ram de sql
        db.session.commit() #inserta en la base de datos de postgre

        return jsonify(nuevo_perfil.serialize()), 200 
    return jsonify({"message": "no existe ese perfil"})



#GET PERFIL 
@api.route('/perfil/<int:id>', methods=['GET'])
def get_perfil(id):
    perfil =  Perfil.query.filter_by(user_id=id).one_or_none()

    if perfil is not None:
        talent  = Talent.query.filter_by(perfil_id=perfil.id)
        return jsonify({ "perfil": perfil.serialize() , "talents": [ talento.serialize()  for talento in talent ] }), 200
    else:
        return jsonify({"message": "user not found"}), 404   



@api.route('/talent', methods=['POST'])
@jwt_required()
def new_talent():
    body = request.json
    perfil = Perfil.query.filter_by(user_id = get_jwt_identity()).first()

    if perfil != None: 
        nuevo_talent = Talent( body['talent_name'], body['practice_time'], body['about_you'], body['categories_talent'], body['range_talent'], perfil.id, body['imagetalent_url'])
        print(nuevo_talent)
        db.session.add(nuevo_talent)
        db.session.commit()

        return jsonify(nuevo_talent.serialize()), 200
        
    return jsonify({"message": "no existe ese talento"})

    # return jsonify({ "probando, si se ejecuto": "si se ejecutoo!"}), 200    

@api.route('/categories', methods=['GET'])
def obtener_categorias():
    categorias = Categories.query.all()

    db.session.add(categorias)
    db.session.commit()

    return jsonify([categoria.serialize() for categoria in categorias])


@api.route('/categories/seleccionar', methods=['POST'])
def select_categories():
    body = request.json
    # perfil = User.query.get(body['perfil_id'])

    categoria_seleccionada = Categories(body['categorie_name'])
    print(categoria_seleccionada)
    db.session.add(categoria_seleccionada)
    db.session.commit()

    return jsonify(categoria_seleccionada.serialize()), 200

@api.route('/talentrequest', methods=['POST'])
def enviar_peticion():
    body = request.json

    peticion = Talent_request(body['request'], body['perfil_solicitante_id'], body['perfil_receptor_id'])
    print(peticion)
    db.session.add(peticion)
    db.session.commit()

    return jsonify(peticion.serialize()), 200