import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Registro2 } from "./pages/registro_2";
import Registro3 from "./pages/registro_3";
import { Categories } from "./pages/categories";
import { Perfil } from "./pages/perfil";
import { InicioSesion } from "./pages/inicio_sesion";
import { Registro1 } from "./pages/registro_1";
import injectContext from "./store/appContext";
import { Resultados } from "./pages/resultados";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardPersonal } from "./pages/card_personales";
import { AboutUs } from "./pages/aboutUs";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Categories />} path="/categories" />
            <Route element={<CardPersonal />} path="/cardpersonal/:id" />
            <Route element={<InicioSesion />} path="/iniciosesion" />
            <Route element={<Perfil />} path="/perfil/:userId"/>
            <Route element={<AboutUs />} path="/aboutus" />
            <Route element={<Resultados />} path="/resultados/:categoria" />
            <Route element={<Registro1 />} path="/registro-1" />
            <Route element={<Registro2 />} path="/registro-2" />
            <Route element={<Registro3 />} path="/registro-3" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
