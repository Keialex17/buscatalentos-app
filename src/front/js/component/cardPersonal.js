import React, {useState, useEffect, useContext} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../styles/resultados.css";
import { Context } from "../store/appContext";
import iconperfil from "../../img/iconperfil.png"
import deporte from "../../img/deporte.png"


//ESTE COMP. SE RENDERIZA EN /RESULTADOS

const users = [{
    nombre: "Jose Rosas",
    edad: "24",
    categoria: "Oratoria",
    talento: "Orador profesional",
    direccion: "Caracas, Venezuela",
    id: 1,
    practica: "2 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Jose Rosales",
    edad: "22",
    categoria: "Arte",
    talento: "Pintor novato",
    direccion: "Caracas, Venezuela",
    id: 2,
    practica: "2 meses de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Joan Suarez",
    edad: "21",
    categoria: "Deporte",
    talento: "Futbolista Amateur",
    direccion: "Caracas, Venezuela",
    id: 3,
    practica: "4 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Micaela Rodriguez",
    edad: "21",
    categoria: "Deporte",
    talento: "Karateca Profesional",
    direccion: "Ciudad de Buenos Aires, Argentina",
    id: 4,
    practica: "4 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Hector Caraballo",
    edad: "21",
    categoria: "Tecnologia",
    talento: "Programador Full-Stack Novato",
    direccion: "Ciudad de Buenos Aires, Argentina",
    id: 5,
    practica: "8 meses de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Flor Fernandez",
    edad: "27",
    categoria: "Danza",
    talento: "Bailarina Profesional",
    direccion: "Valencia, Venezuela",
    id: 6,
    practica: "4 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Sarahy Rivas",
    edad: "25",
    categoria: "Fotografia",
    talento: "Fotografa amateur",
    direccion: "Merida, Venezuela", 
    id: 7,
    practica: "2 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Samuel Carmona",
    edad: "27",
    categoria: "Deporte",
    talento: "Nadador amateur",
    direccion: "Caracas, Venezuela",
    id: 8,
    practica: "1 año de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Luis Ramos",
    edad: "30",
    categoria: "Tecnologia",
    talento: "Experto tecnico en celulares",
    direccion: "Caracas, Venezuela",
    id: 9,
    practica: "4 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Ariel Rivas",
    edad: "18",
    categoria: "Música",
    talento: "Guitarrista Profesional",
    direccion: "Caracas, Venezuela",
    id: 10,
    practica: "4 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Agustina Soler",
    edad: "23",
    categoria: "Gastronomia",
    talento: "Chef Profesional",
    direccion: "Caracas, Venezuela",
    id: 11,
    practica: "5 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Marco Dionisio",
    edad: "25",
    categoria: "Diseño",
    talento: "Diseñador Amateur",
    direccion: "Caracas, Venezuela",
    id: 12,
    practica: "4 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Nohelia Lopez",
    edad: "35",
    categoria: "Idiomas",
    talento: "Experta en idiomas",
    direccion: "Caracas, Venezuela",
    id: 13,
    practica: "12 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Ramiro Rojas",
    edad: "35",
    categoria: "Escritura",
    talento: "Experto Redactor",
    direccion: "Madrid, España",
    id: 14,
    practica: "10 años de practica",
    correo: "test.test@gmail.com"
},
{
    nombre: "Gabriela Files",
    edad: "34",
    categoria: "DesarrolloPersonal",
    talento: "Experto en Desarrollo Personal",
    direccion: "Madrid, España",
    id: 15,
    practica: "4 años de practica",
    correo: "test.test@gmail.com"
}
]

export const CardPersonal = (props) => {

    const navigate = useNavigate()

    const params = useParams()
    console.log(params)

    const {
        store, actions
    }= useContext(Context)

    useEffect(()=>{
        actions.retornarcategoria()
    }, [])



    return (
        <div id="container-resultados" className="container">
            {users.filter(user=> user.categoria == params.categoria).map(user=> {
                return(
                    <div id="card-box-resultados" className="row">
                    <div id="profile-photo-cardbox-resultados" className="col-4">
                    <img
                    src={iconperfil}
                    className="rounded-circle rounded-2"
                    id="iconperfil"
                    alt="..."
                  />
                    </div>
                <div id="text-cardbox-resultados" className="col">
                    <h3> {user.nombre} </h3>
                    <p>{user.edad} años</p>
                    <p>{user.talento}</p>
                    <p>{user.categoria}</p>
                    <p>{user.direccion}</p>
                    <div className="d-flex justify-content-between">
                    <div>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                        {/* <Link to={`/cardpersonal/${store.cards}`}> */}
                            <button
                                type="button"
                                id="vermas-btn-cardbox-resultados"
                                className="btn btn-primary"
                                onClick={()=>{
                                    actions.verInfo(user)
                                    navigate(`/cardpersonal/${user.id}`)
                                }}
                            >
                                Ver mas
                            </button>
                        {/* </ Link> */}
                    </div>
                </div>
            </div>
                )
            })}
</div>
    )

}