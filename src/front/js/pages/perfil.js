import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/perfil.css"
import { Context } from "../store/appContext";
import iconperfil from "../../img/iconperfil.png"

export const Perfil = () => {
	const { store, actions } = useContext(Context);
    let { userId } = useParams();


    console.log(store.perfil)
    useEffect (() => {
        actions.getProfileById(userId)
    }, [])

	return (
		<div className="container">
            <div id="profile-box-perfil" className="">
            <div>
                {/* <i id="svgtitulo-perfil" className="fa-solid fa-greater-than"></i> */}
                <h1 id="perfiltitulo-perfil">Tu perfil</h1>
            </div>
                <div id="section-1-card-perfil" className="row">
                    <div id="description-profile-box-perfil" className="col">
                        <input id="inputperfil-1" type="text" value={store.perfil && store.perfil.perfil.name + " " + store.perfil.perfil.last_name || ""}/>
                        <input id="inputperfil-2" type="text" value={store.perfil && store.perfil.perfil.age + " años"|| " "}/>
                        <input id="inputperfil-2" type="text" value={store.perfil && store.perfil.perfil.state + ", " + store.perfil.perfil.country || ""} />
                        <input id="inputperfil-2"  type="text" value={store.user && store.user.email || ""}/>
                        <div id="circulo-perfil-boton-div" className="">
                        <button id="circulo-boton-perfil" ><i className="fa-solid fa-pen-to-square"></i></button>
                        </div>
                    </div>
					<div id="photo-profile-box-perfil" className="col-4">
                        <div id="circle-profile-card-img-perfil" className="m-4">
                               {store.perfil && store.perfil.perfil.image_url != "" ? <img
                            src={store.perfil.perfil.image_url}
                            className="rounded-circle rounded-2 img-fluid"
                            id="iconperfil-perfil"
                            alt="..."
                        /> : <img
                            src={iconperfil}
                            className="rounded-circle img-fluid"
                            id="iconperfil-perfil"
                            alt="..."
                        />}
                        </div>
                    </div>
                </div>
                <h1 id="talentotitulo-perfil">Tu talento</h1>
                { store.perfil && store.perfil.talents.map( talento =>   <div id="section-photos-card-perfil" className="row">
                    <div className="col-5" id="add-photos-container-card-perfil">
                        <div id="section3-box-talent-card-perfil">
                            { talento.imagetalent_url.trim() != "" ? <img id="img-photo-perfil-css" src={talento.imagetalent_url} /> :
                                <img id="img-photo-perfil-css" src="https://wellaggio.com/wp-content/uploads/2015/09/la-importancia-de-las-imagenes-en-el-dise%C3%B1o-web1.jpg" />}
                        </div>
                    </div>
                    <div className="col" id="description-photos-container-card-perfil">
                        <input id="inputtalento-1" type="text" value={talento.talent_name}  className="mb-2" />
                        <input id="inputtalento-2" type="text" value={talento.categories_talent}  className="" />
                        <input id="inputtalento-2" type="text" value={talento.practice_time}  className="" />
                        <input id="inputtalento-2" type="text" value={talento.range_talent}  className="" />
                        <textarea id="inputtalento-3" type="text" value={talento.about_you}  className="" />
                    </div>
                </div>)}
                {/* posible footer */}
                {/* <div className="text-center mt-5">
                    <div id="footer-home" className="alert alert-info">
                    <h5 id="h5-f-h" >Derechos reservados 2023 ©</h5>
                    </div>
                </div> */}
            </div>
        </div>  
		
	);
};
