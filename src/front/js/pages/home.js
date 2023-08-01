import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import carrusel1 from "../../img/carrusel1.jpg";
import carrusel2 from "../../img/carrusel2.jpg";
import carrusel3 from "../../img/carrusel3.jpg";
import karateteacher from "../../img/karateteacher.jpg";
import testimonio1 from "../../img/testimonio1.jpg"
import testimonio2 from "../../img/testimonio2.jpg"
import testimonio3 from "../../img/testimonio3.jpg"
import sabiasqueimage from "../../img/sabiasqueimage.jpg"
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    //Carrusel
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carrusel1}
              id="carrusel1"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 id="texto-carrusel-home">¡Comparte tu talento!</h1>
              <h6 id="descripcion-carrusel-home">
              ¿Tienes un talento especial que te encantaría compartir con el mundo? ¡No busques más!
              </h6>
              <Link to="/categories" id="linkvermas">
                <button
                  type="button"
                  className="btn btn d-flex justify-content-start"
                  id="vermasbutton"
                >
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carrusel2}
              id="carrusel2"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h2 id="texto-carrusel-home">Second slide label</h2> */}
              <h5 id="descripcion-carrusel-home2">
              ¡Da el primer paso hoy!
              </h5>
              <h1 id="descripcion-carrusel-home-slice2">
              No solo es un lugar seguro para compartir tu talento, ¡sino también para aprender de otros!
              </h1>
              <Link to="/categories" id="linkvermas">
                <button
                  type="button"
                  className="btn btn d-flex justify-content-start"
                  id="vermasbutton"
                >
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carrusel3}
              id="carrusel3"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 id="texto-carrusel-home3">¿Qué esperas para comenzar?</h2>
              <h5 id="descripcion-carrusel-home">
                ¡Regístrate con nosotros!
              </h5>
              <Link to="/categories" id="linkvermas">
                <button
                  type="button"
                  className="btn btn d-flex justify-content-start"
                  id="vermasbutton"
                >
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Heading 1 */}
      <div className="container-fluid bg-white m-0">
        <div className="container py-4">
          <div className="d-flex justify-content-start ">
            <div>
              <span className="fw-bold fs-1 d-flex justify-content-center">
                Los talentos mas buscados
              </span>
              <div className="row d-flex justify-content-between m-5">
                <div className="col-md-4 d-flex justify-content-center">
                  <i className="fa-solid fa-guitar fa-5x"></i>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <i className="fa-solid fa-camera fa-5x"></i>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <i className="fa-brands fa-js fa-5x"></i>
                </div>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-2 p-1">
                  <p id="talentomasbuscado">
                  La música puede manifestarse de diferentes maneras. Algunas personas tienen una habilidad innata para tocar instrumentos musicales, como el piano, la guitarra, la batería o el violín. Otros destacan en el canto, utilizando su voz como instrumento principal. Además, hay quienes poseen destreza para componer melodías y escribir letras, creando canciones originales.
                  </p>
                </div>
                <div className="col-md-4 mt-2 p-1">
                  <p id="talentomasbuscado">
                  La fotografía requiere habilidades técnicas y creativas para lograr composiciones visualmente atractivas y significativas. Los talentosos fotógrafos tienen la capacidad de seleccionar y enmarcar sujetos interesantes, manejar la iluminación de manera efectiva, elegir la configuración adecuada de la cámara y capturar instantes precisos.
                  </p>
                </div>
                <div className="col-md-4 mt-2 p-1">
                  <p id="talentomasbuscado">
                  La programación como talento implica la capacidad de desarrollar software y solucionar problemas a través del código. Requiere habilidades técnicas, pensamiento lógico y creatividad. Los talentosos programadores tienen numerosas oportunidades profesionales y la capacidad de influir en el mundo a través de la creación de aplicaciones y tecnologías innovadoras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Heading 2 */}
      <div className="container-fluid bg-opacity-25 m-0" id="backgroundcomment">
        <div className="container py-4" id="prueba">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <i className="fas fa-comment fa-5x" id="iconcoment"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-3">
              <h1>"El momento de aprender es ahora"</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-5">
              <img
                src={karateteacher}
                className="rounded-circle rounded-2"
                id="karateteacher"
                alt="..."
              />
            </div>
            <div className="col-md-12 d-flex justify-content-center mt-3">
              <i className="fas fa-star fa-2x" id="starteacher"></i>
              <i className="fas fa-star fa-2x" id="starteacher"></i>
              <i className="fas fa-star fa-2x" id="starteacher"></i>
              <i className="fas fa-star fa-2x" id="starteacher"></i>
              <i className="fas fa-star fa-2x" id="starteacher"></i>
            </div>
            <div className="col-md-12 d-flex flex-column mt-3">
              <div className="d-flex justify-content-center">
                <h2> Maria Morales</h2>
              </div>
              <div className="d-flex justify-content-center">
                <h5> Caracas, Venezuela</h5>
              </div>
              <div className="d-flex justify-content-center">
                <h3> Karate Teacher</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Heading3 */}
      <div className="container-fluid bg-white m-0">
        <div className="container py-4">
          <div className="d-flex justify-content-start ">
            <div>
              <span className="fw-bold fs-1 d-flex justify-content-center">
                Testimonios
              </span>
              <div className="row d-flex justify-content-between mt-5">
                <div className="col-md-4 d-flex justify-content-center">
                <img
                src={testimonio1}
                className="rounded-circle rounded-2"
                id="karateteacher"
                alt="..."
              />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                <img
                src={testimonio2}
                className="rounded-circle rounded-2"
                id="karateteacher"
                alt="..."
              />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                <img
                src={testimonio3}
                className="rounded-circle rounded-2"
                id="karateteacher"
                alt="..."
              />
                </div>
              </div>
              <div className="row d-flex justify-content-between mt-2">
                <div className="col-md-4 mt-2 p-1">
                  <div className="d-flex justify-content-center">
                    <h2>Gabriela Canales</h2>
                  </div>
                  <p id="talentomasbuscado">
                  "Buscatalento cautiva con su interfaz moderna y elegante. Presenta una galería visualmente deslumbrante de talentos destacados, mostrando una variedad de disciplinas artísticas, como música, danza, pintura, fotografía y más."
                  </p>
                </div>
                <div className="col-md-4 mt-2 p-1">
                  <div className="d-flex justify-content-center">
                    <h2>Lucas Palacios</h2>
                  </div>
                  <p id="talentomasbuscado">
                    " La navegación intuitiva y amigable del sitio web permite explorar fácilmente las categorías y descubrir nuevos talentos emergentes."
                  </p>
                </div>
                <div className="col-md-4 mt-2 p-1">
                  <div className="d-flex justify-content-center">
                    <h2>Deborah Silles</h2>
                  </div>
                  <p id="talentomasbuscado">
                  "Buscatalento es una aplicación web extraordinaria que pone al alcance de todos la posibilidad de descubrir y conectarse con talentos únicos de todo el mundo."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Heading4 */}
      <div className="container-fluid bg-opacity-25 m-0" id="sabiasque">
        <div className="">
          <div className="row d-flex">
            <div className="col-md-6 d-flex justify-content-start m-0 p-0">
              <img
                src={sabiasqueimage}
                id="knowthat"
                className="float-start"
                alt="..."
              />
            </div>
            <div className="col-md-6 p-2 d-flex flex-column justify-content-center">
              <div className="p-2 justify-content-center">
                <h1> <i className="fas fa-info-circle"></i>  ¿Sabias que...? </h1>
                
              </div>
              <div className="p-2 justify-content-center">
                <p>
                Todos tenemos el potencial de desarrollar nuevos talentos: Aunque puedas pensar que no tienes habilidad en ciertas áreas, la verdad es que todos tienen el potencial de aprender y desarrollar nuevos talentos. La práctica constante, la dedicación y la pasión pueden llevar a grandes logros.
                </p>
                <p>
                Los talentos pueden ser compartidos: No guardes tus talentos solo para ti. Compartir tus habilidades con los demás puede ser gratificante y enriquecedor tanto para ti como para quienes te rodean. Puedes enseñar, inspirar y colaborar con otras personas, lo que puede llevar a experiencias únicas y conexiones significativas.
                </p>
                <div>
                  <p>
                  Recuerda que cada persona es única y tiene algo especial que ofrecer al mundo. ¡Explora tus talentos, abraza tus habilidades y aprovecha al máximo tus dones!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Heading5 */}
      <div className="container-fluid bg-white m-0">
        <div className="container py-4 d-flex flex-column">
          <div className="d-flex justify-content-center">
            <h1>¿Estas listo/a para registrarte?</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/registro-1">
              <span className="btn btn btn-lg" href="#" role="button" id="registerbutton">
                Vamos!
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <div id="footer-home" className="alert alert-info">
          <h5 id="h5-f-h" >Derechos reservados 2023 ©</h5>
        </div>
      </div>
    </div>
  );
};
