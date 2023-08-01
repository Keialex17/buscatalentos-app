import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import iniciosesion from "../../img/inicio-sesion-bg.jpg";
import buscatalento_logo_original from "../../img/buscatalento_logo_original.png";
import "../../styles/inicio_sesion.css";

import { Context } from "../store/appContext";

export const InicioSesion = () => {
  const { store, actions } = useContext(Context);

  const[shown, setShown] = useState(false)
  const [email, setEmail] = useState("") //useState Login
  const[password, setPassword]= useState("") //useState Login

  const handleClick = () => { //fetching login here
    actions.login(email, password)
    }

    //
    
  const switchShown = () => setShown(!shown);

  return (
    <>
      <div className="container-iniciosesion">
        <img src={iniciosesion} className="img-fluid" id="iniciosesion-bg" />
        <div className="row login-box">
          <div className="col"></div>
          <div className="col-5" id="loginbox">
            <div id="logobox-logologin">
              <img id="logo-login" src={buscatalento_logo_original} />
            </div>
            <div className="" id="input-login-iniciosesion">
              <p>Correo</p>
              <input
                id="email-field-iniciosesion"
                type="text"
                className="form-control"
                placeholder="Correo electronico"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)  //login controlledComponents email
                }}
              />
              <p>Clave</p>
              <div id="is-relative">
              <input
                id="password-field-iniciosesion"
                type={shown ? 'text': 'password'}
                className="form-control"
                placeholder="Contraseña"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)  //login controlledComponents pass
                }}
              />
              <span id="icon">
                <i className="fas fa-eye"
                    onClick={switchShown}></i>
              </span>
              </div>
              <Link to="/">
              <button
                id="iniciosesion-button"
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Iniciar Sesion
              </button>
              </Link>
              <p 
              id="below-inputs-iniciosesion"
              >
                ¿Aún no tienes cuenta?</p>
              <Link to="/registro-1">
              <a>¡Regístrate aquí!</a>
              </ Link>
              <p 
              id="below-inputs-iniciosesion"
              >
                ¿Olvidaste tu contraseña?</p>
              <Link to="/olvidecontraseña">
              <a>¡Haz click aquí!</a>
              </ Link>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
