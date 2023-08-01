import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/registro_1.css";
import PeopleSharing from "../../img/people-sharing.jpg";
import ScrollToTop from "../component/scrollToTop.js";
import { Context } from "../store/appContext";
import toast, { Toaster } from 'react-hot-toast';


export const Registro1 = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate(); //Linkeo

  //useEffect 
  // useEffect ( () => {
  //   actions.loadUsers(); 
  // }, [])

  //useStates de los INPUTS
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true)
  const[shown, setShown] = useState(false)

  const handlerUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlerEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlerPassword = (event) => {
    setPassword(event.target.value)
  }

  const handlerConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handlerKeyPress = async (event) => { //ACA HACE LA LOGICA DE QUE LAS CONTRASEÑAS SEAN IGUALES
    event.preventDefault()
    // console.log(`username: ${username}, password: ${password}, email: ${email}, confirmPassword: ${confirmPassword}`)
    if (password === confirmPassword && username.trim() != "" && email.trim() != "" && password.trim() != "") {
      let resp = await actions.newUsers({
        "user_name": username,
        "email": email,
        "password": password
      })
        navigate("/registro-2")
        window.location.reload(false);
    }
    else {
        setPasswordMatch(false)
         console.log("Contraseña inválida")
         toast.error("Contraseña y confirmar contraseña no son iguales.", {
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
  }

  const switchShown = () => setShown(!shown); //mostrar contrasena

  return (
    <div className="text-center mt-5">
      <div><Toaster position="bottom-center" reverseOrder={false}/></div>
      <h1 id="h1-profile">¡Regístrate con nosotros!</h1>
      <h2 id="h2-profile">Por favor llena los siguientes datos:</h2>
      <div className="container-fluid">
        <div id="section-one" className="row">
          <div className="col-5">
            <img id="img-profile" src={PeopleSharing} />
          </div>
          <div className="col-7">
            <p id="p-profile">Nombre de usuario:</p>
            <input
              type="text"
              value={username}
              onChange={handlerUsername}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <p id="p-profile">Correo electrónico:</p>
            <input
              type="text"
              value={email}
              onChange={handlerEmail}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <p id="p-profile">Contraseña:</p>
            <div id="is-relative">
            <input
              type={shown ? 'text': 'password'}
              value={password}
              onChange={handlerPassword}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <span id="iconregistro">
              <i className="fas fa-eye"
                onClick={switchShown}>
              </i>
            </span>
            </div>
            <p id="p-profile">Confirma tu contraseña:</p>
            <input
              value={confirmPassword}
              onChange={handlerConfirmPassword}
              type={shown ? 'text': 'password'}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                He leído los términos y condiciones.
              </label>
            </div>
              <button
                type="button"
                id="btn-create"
                className="btn btn-primary"
                onClick={handlerKeyPress}
              >
                CREAR PERFIL
              </button>
          </div>
        </div>
      </div>
      <p id="p-profile" className="finaltext">
        in metus tempus hendrerit non et ex. In fermentum dictum mauris, nec
        rutrum augue gravida id. Nam massa nisi, aliquet elementum vulputate eu,
        tempor id diam. Suspendisse vitae pellentesque ante, at rutrum urna.
        Aliquam a neque elit. Suspendisse placerat a nulla ut tincidunt. Nam
        vitae nunc nec purus elementum consectetur. Vivamus eget dapibus risus.
      </p>
      <br></br>
      <br></br>
      {/* <Link to= "/">
                <span className="btn btn-primary btn-lg m-3" href="#" role="button">
                    Go to Home
                </span>
            </Link> */}
    </div>
  );
};
