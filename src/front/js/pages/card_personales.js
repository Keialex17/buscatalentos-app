import React, { useState, useEffect, useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import "../../styles/card_personales.css"
import { Context } from "../store/appContext";
import iconperfil from "../../img/iconperfil.png"
import karateteacher from "../../img/karateteacher.jpg"
import buscatalento from "../../img/buscatalento_logo.png"

export const CardPersonal = () => {
	const { store, actions } = useContext(Context);

    const enviarcorreo = ()=>{
        const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(store.cards.correo)}`;
        window.open(url, '_blank');
    }

    const intercambioHecho = () => {
        return toast.success('¡Tu solicitud ha sido enviada! ⭐', {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#8924a3',
            },
            iconTheme: {
              primary: '#8924a3',
              secondary: '#ffffff',
            },
          })
    }

	return (
		<div className="container">
            <div><Toaster/></div>
            <div id="profile-box" className="card">
                <div className="card-body">

                
                <div id="section-1-card" className="row">
                    <div id="photo-profile-box" className="col-4">
                    <img
                    src={karateteacher}
                    className="rounded-circle rounded-2"
                    id="iconperfil2"
                    alt="..."
                  />
                        <div id="review-card">
                        <i className="fa-solid fa-star fa-2x"></i>
                        <i className="fa-solid fa-star fa-2x"></i>
                        <i className="fa-solid fa-star fa-2x"></i>
                        <i className="fa-solid fa-star fa-2x"></i>
                        <i className="fa-solid fa-star fa-2x"></i>
                        </div>
                    </div>
                    <div id="description-profile-box" className="col">
                        <h1>{store.cards.nombre}</h1>
                        <br/>
                        <h4>{store.cards.edad} años</h4>
                        <h4>{store.cards.direccion}</h4>
                        <h4>{store.cards.talento}</h4>
                        <h4>{store.cards.practica}</h4>
                        <h4>Persona entusiasta con ganas de aprender y de enseñar</h4>
                    </div>
                </div>
                <div className="row d-flex justify-content-around" id="section-photos-card">
                    <div className="col-md-2" id="add-photos-container-card">
                    <div id="imagetalent" className="col-4">
                    <img
                    src={buscatalento}
                    className="img-thumbnail border border-0"
                    id="iconperfil3"
                    alt="..."
                  />
                  </div>
                    </div>
                    <div id="buttons-final-card" className="col-md-6 text-center">
                    <button id="intercambio-button-card" onClick={()=>{intercambioHecho; enviarcorreo()}} type="button" className="btn btn">Intercambiar<i className="fas fa-chalkboard-teacher"></i></button>
                    <Link to="/categories">
                    <button id="seguirviendo-button-card" type="button" className="btn btn">Seguir viendo <i className="fas fa-sync-alt"></i></button>
                    </ Link>
                </div>
                </div>
                </div>
                </div>
            </div>  
		
	);
};
