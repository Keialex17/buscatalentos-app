import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/registro_2.css";
import { Context } from "../store/appContext";
import toast, { Toaster } from 'react-hot-toast';

const Registro3 = () => {
    const {actions, store} = useContext(Context)
    const navigate = useNavigate();
      //creacion variables tabla TALENTO
  const [categoryTalent, setCategoryTalent] = useState("") //Categoria del talento
  const [talentName, setTalentName] = useState("") //Describe tu talento
  const [dateSinceTalent, setDateSinceTalent] = useState("") // DESDE CUANDO LO PRACTICAS
  const [experienceTalent, setExperienceTalent] = useState("") //QUE TAN EXPERIMENTADO TE IDENTIFICAS
  const [imagenTalent, setImagenTalent] = useState("") //IMAGEN TALENTO
  const [moreAboutTalent, setMoreAboutTalent] = useState("") //Cuentanos mas sobre tu talento

      //LOGICA PREVIEW
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
      if (!selectedFile) {
          setPreview(undefined)
          return
      }

      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
  }



    //LISTENERS CREADOS  TALENTO TABLA
    const handlerCategoryTalent = (event) => {
        setCategoryTalent(event.target.value);
      };
      const handlerTalentName = (event) => {
        setTalentName(event.target.value);
      };
      const handlerDateSinceTalent = (event) => {
        setDateSinceTalent(event.target.value);
      };
      const handlerImagenTalent = (event) => {
        setImagenTalent(event.target.files[0]);
      };
      const handlerExperienceTalent = (event) => {
        setExperienceTalent(event.target.value);
      };
      const handlerMoreAboutTalent = (event) => {
        setMoreAboutTalent(event.target.value);
      };

      const handleClick = () => {
        if (categoryTalent.trim() != "" && talentName.trim() != "" && dateSinceTalent.trim() != ""  && experienceTalent.trim() != "" && moreAboutTalent.trim() != "") {
            actions.newimageTalent({
                talent_name: talentName,
                practice_time: dateSinceTalent,
                about_you: moreAboutTalent,
                categories_talent: categoryTalent,
                range_talent: experienceTalent,
                imagetalent_url: imagenTalent
            })
              navigate("/categories")
        }
        else {
          toast.error("Faltan datos por rellenar", {
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

    return (
        <>
        <div id="talento" className="h1-box-registro2">
        <div><Toaster position="bottom-center" reverseOrder={false}/></div>
            <h1 className="h1-registro-below">Sobre tu talento</h1>{" "}
          </div>
        <div id="input-box-2" className="row">
          
          <div
            id="input2-box-1"
            className="col-4 d-flex justify-content-center"
          >
            <div
              id="img-talent"
              className="d-flex justify-content-center align-items-center "
            >
              {selectedFile &&  <img src={preview} id="img-preview-reg2" className="img-fluid"/> }
            </div>
          </div>
          <div id="input2-box-2" className="col">
            <p>Selecciona una categoria para tu talento:</p>
            <select
              className="form-select mb-3"
              id="select-input"
              aria-label="Default select example"
              value={categoryTalent}
              onChange={handlerCategoryTalent}
            >
              <option selected>Selecciona una categoría</option>
              <option value="Deportes">Deportes</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Música">Música</option>
              <option value="Arte">Arte</option>
              <option value="Fotografia">Fotografia</option>
              <option value="Gastronomia">Gastronomia</option>
              <option value="Diseño">Diseño</option>
              <option value="Danza">Danza</option>
              <option value="Idiomas">Idiomas</option>
              <option value="Oratoria">Oratoria</option>
              <option value="Desarrollo Personal">Desarrollo Personal</option>
            </select>
            <p>¿Desde hace cuanto lo practicas?</p>
            <input
              id="lastname-field"
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Default select example"
              value={dateSinceTalent}
              onChange={handlerDateSinceTalent}
              aria-describedby="basic-addon1"               
            >
            </input>
            <form>
              <div className="form-group" id="input-img-box">
                <p>Sube alguna foto alusiva a tu talento: </p>                 
                  <input type="file" className="form-control" id="inputGroupFile02" onChange={onSelectFile} onInput={handlerImagenTalent}/>
              </div>
            </form>
          </div>
          <div id="input2-box-3" className="col">
            <p>Descríbenos tu talento:</p>
            <input
              id="lastname-field"
              type="text"
              className="form-control"
              placeholder=""
              value={talentName}
              onChange={handlerTalentName}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <p>¿Qué tan experimentado te identificas?</p>
            <select
              id="select-input"
              className="form-select mb-3"
              placeholder=""
              aria-label="Username"
              value={experienceTalent}
              onChange={handlerExperienceTalent}
              aria-describedby="basic-addon1"          
            >
             <option selected>Selecciona un rango</option>
              <option value="Novato">Novato</option>
              <option value="Experto">Experto</option>
              <option value="Profesional">Profesional</option>
              <option value="Amateur">Amateur</option>
            </select>
            <p>Cuéntanos mas sobre tu talento:</p>
            <div className="form-floating">
              <textarea
                className="form-control"
                value={moreAboutTalent}
                onChange={handlerMoreAboutTalent}
                placeholder="Dejanos un comentari"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea"></label>
            </div>
          </div>
         </div>  
         <div id="end-section-modal" className="text-center">
        <h3>¿Listo para empezar?</h3>

        <div>
          <button
            id="confirmation-button-registro"
            type="button"
            className="btn btn"
            onClick={handleClick}
          >
           Continuar 
          </button>
        </div>


          {/* {
            modalShown != false ? (<div class="modal" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>) : "" 
          }  */}
      </div>
        </>
    )
}

export default Registro3