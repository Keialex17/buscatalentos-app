import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/categories.css"
import { Context } from "../store/appContext"
import music from "../../img/music.png"
import deporte from "../../img/deporte.png"
import tecnologia from "../../img/tecnologia.png"
import arte from "../../img/arte.png"
import fotografia from "../../img/fotografia.png"
import gastronomia from "../../img/gastronomia.png"
import diseno from "../../img/diseno.png"
import danza from "../../img/danza.png"
import idiomas from "../../img/idiomas.png"
import escritura from "../../img/escritura.png"
import oratoria from "../../img/oratoria.png"
import desarrollo from "../../img/desarrollo.png"

export const CategoriesSelect = () =>{

    const{
        store, actions
    } = useContext(Context)

    const [selectedImages, setSelectedImages]= useState([]);

    const toggleSelection = (imageId) =>{
        if (selectedImages.includes(imageId)) {
            setSelectedImages(selectedImages.filter((id) => id !== imageId));
          } else {
            setSelectedImages([...selectedImages, imageId]);
          }
        };

    const isImageSelected = (imageId) => {
        return selectedImages.includes(imageId);
      };
    
    return(
        <>
            <div className="row d-flex justify-content-around mt-5">
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Deporte</h3>
                        <img 
                        src={deporte}
                        id="categories" 
                        className={`rounded-circle ${isImageSelected(1) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                        alt="..." 
                        onClick={() => {
                            toggleSelection(1)
                            actions.selectCategoria("Deporte")
                        }}/>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Tecnologia </h3>
                    <img 
                    src={tecnologia} 
                    id="categories" 
                    className={`rounded-circle ${isImageSelected(2) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                    alt="..." 
                    onClick={() => {
                        toggleSelection(2)
                        actions.selectCategoria("Tecnologia")
                    }}/>
                </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Música </h3>
                        <img 
                        src={music} 
                        id="categories" 
                        className={`rounded-circle ${isImageSelected(3) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                        alt="..." 
                        onClick={() => {
                            toggleSelection(3)
                            actions.selectCategoria("Música")
                        }}/>
                    </div>
                </div>  
            </div>
            <div className="row d-flex justify-content-around mt-5">
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Arte</h3>
                        <img 
                        src={arte} 
                        id="categories" 
                        className={`rounded-circle ${isImageSelected(4) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                        alt="..." 
                        onClick={() => {
                            toggleSelection(4)
                            actions.selectCategoria("Arte")
                        }}/>

                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Fotografia </h3>
                    <img 
                    src={fotografia} 
                    id="categories" 
                    className={`rounded-circle ${isImageSelected(5) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                    alt="..." 
                    onClick={() => {
                        toggleSelection(5)
                        actions.selectCategoria("Fotografia")
                    }}/>
                </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Gastronomia </h3>
                        <img 
                        src={gastronomia} 
                        id="categories" 
                        className={`rounded-circle ${isImageSelected(6) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                        alt="..." 
                        onClick={() => {
                            toggleSelection(6)
                            actions.selectCategoria("Gastronomia")
                        }}/>
                    </div>
                </div>  
            </div>
            <div className="row d-flex justify-content-around mt-5">
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Diseño</h3>
                        <img 
                        src={diseno} 
                        id="categories" 
                        className={`rounded-circle ${isImageSelected(7) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                        alt="..." 
                        onClick={() => {
                            toggleSelection(7)
                            actions.selectCategoria("Diseño")
                        }}/>

                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Danza </h3>
                    <img 
                    src={danza}
                    id="categories" 
                    className={`rounded-circle ${isImageSelected(8) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                    alt="..." 
                    onClick={() => {
                        toggleSelection(8)
                        actions.selectCategoria("Danza")
                    }}/>
                </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Idiomas </h3>
                        <img 
                        src={idiomas} 
                        id="categories" 
                        className={`rounded-circle ${isImageSelected(9) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                        alt="..." 
                        onClick={() => {
                            toggleSelection(9)
                            actions.selectCategoria("Idiomas")
                        }}/>
                    </div>
                </div>  
            </div>
            <div className="row d-flex justify-content-around mt-5">
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Escritura</h3>
                        <img 
                        src={escritura} 
                        id="categories" 
                        className={`rounded-circle ${isImageSelected(10) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                        alt="..." 
                        onClick={() => {
                            toggleSelection(10)
                            actions.selectCategoria("Escritura")
                        }}/>

                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Oratoria </h3>
                    <img 
                    src={oratoria} 
                    id="categories" 
                    className={`rounded-circle ${isImageSelected(11) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                    alt="..." 
                    onClick={() => {
                        toggleSelection(11)
                        actions.selectCategoria("Oratoria")
                    }}/>
                </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Desarrollo personal </h3>
                        <img 
                        src={desarrollo}
                        id="categories" 
                        className={`rounded-circle ${isImageSelected(12) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                        alt="..." 
                        onClick={() => {
                            toggleSelection(12)
                            actions.selectCategoria("DesarrolloPersonal")
                        }}/>
                    </div>
                </div>  
            </div>
        </>
    )
}