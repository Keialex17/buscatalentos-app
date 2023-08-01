from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_name = db.Column(db.String(30), unique=True, nullable=False)

    def __init__(self, email, password, user_name):
        self.email = email
        self.password = password
        self.user_name = user_name

    def serialize(self):
        return {
            "email": self.email,
            "user_name": self.user_name,
            "user_id": self.id 
        }

class Perfil(db.Model):
    __tablename__ = 'perfil'
    id = db.Column(db.Integer, primary_key=True)  
    name = db.Column(db.String(30), nullable= False)
    last_name = db.Column(db.String(30), nullable= False)
    phone = db.Column(db.String(30), nullable= False)
    age = db.Column(db.String(30), nullable= False)
    country = db.Column(db.String(30), nullable= False)
    state = db.Column(db.String(30), nullable= False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User',  backref='perfil')
    image_url = db.Column(db.String(400), nullable=False)

    talent = db.relationship('Talent',  back_populates='perfil')

    def __init__(self, name, last_name, phone, age, country, state,  user_id, image_url):
        self.name = name
        self.last_name = last_name
        self.phone = phone
        self.age = age
        self.country = country
        self.state = state
        self.user_id = user_id
        self.image_url = image_url

    def serialize(self):
        return{
            "user_id": self.user_id,

            "name": self.name,
            "last_name": self.last_name,
            "image_url": self.image_url,
            "phone": self.phone,
            "age": self.age,
            "country": self.country,
            "state": self.state,
            #"talent": self.talent.serialize()
        }

class Talent(db.Model):
    __tablename__='talent'
    id = db.Column(db.Integer, primary_key=True)
    talent_name = db.Column(db.String(100), nullable=False)
    practice_time = db.Column(db.String(20), nullable=False)
    about_you = db.Column(db.String(100), nullable=False)
    categories_talent = db.Column(db.String(100), nullable=False)
    range_talent = db.Column(db.String(100), nullable=False)

    perfil_id = db.Column(db.Integer, db.ForeignKey('perfil.id'), nullable=False)
    perfil = db.relationship('Perfil', back_populates='talent')

    imagetalent_url = db.Column(db.String(400), nullable=False)

    def __init__(self, talent_name, practice_time, about_you, categories_talent, range_talent, perfil_id, imagetalent_url):
        self.talent_name = talent_name
        self.practice_time = practice_time
        self.about_you = about_you
        self.categories_talent = categories_talent
        self.range_talent = range_talent
        self.perfil_id = perfil_id
        self.imagetalent_url = imagetalent_url

    def serialize(self):
        return{
            "talent_name" : self.talent_name,
            "about_you": self.about_you,
            "perfil_id": self.perfil_id,
            "imagetalent_url": self.imagetalent_url,
            "categories_talent": self.categories_talent,
            "range_talent": self.range_talent,
            "practice_time": self.practice_time,
            
        }

class Categories(db.Model):
    __tablename__='categories'
    id = db.Column(db.Integer, primary_key=True)
    categorie_name = db.Column(db.String(100), nullable= False)
    # user_categorias_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    # user_categorias = db.relationship('User', foreign_keys=[user_categorias_id])

    def __init__(self, categorie_name):
        self.categorie_name = categorie_name
        # self.user_categorias_id = user_categorias_id

    def serialize(self):
        return{
            "categorie_name": self.categorie_name,
            # 'user_categorias_id': self.user_categorias_id
        }


class Talent_request(db.Model):
    __tablename__='talent_request'
    id = db.Column(db.Integer, primary_key=True)
    request = db.Column(db.Boolean, default=False)

    perfil_solicitante_id = db.Column(db.Integer, db.ForeignKey('perfil.id'), nullable=False)
    perfil_solicitante = db.relationship('Perfil', foreign_keys=[perfil_solicitante_id])

    perfil_receptor_id = db.Column(db.Integer, db.ForeignKey('perfil.id'), nullable=False)
    perfil_receptor = db.relationship('Perfil', foreign_keys=[perfil_receptor_id])

    def __init__(self, request, perfil_solicitante, perfil_receptor):
        self.request = request
        self.perfil_solicitante = perfil_solicitante
        self.perfil_receptor = perfil_receptor

    def serialize(self):
        return{
        "request": self.request,
        "perfil_solicitante_id": self.perfil_solicitante_id,
        "perfil_receptor_id": self.perfil_receptor_id
         }







    # def __repr__(self):
    #     return f'<User {self.email}>'

    # def serialize(self):
    #     return {
    #         "id": self.id,
    #         "email": self.email,
    #         # do not serialize the password, its a security breach
    #     }