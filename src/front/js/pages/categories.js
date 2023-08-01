import React, { useContext } from "react";
import "../../styles/categories.css"
import { Link } from "react-router-dom";
import { CategoriesSelect } from "../component/threecategories";
import { Context } from "../store/appContext";

export const Categories = () => {

    const { store }= useContext(Context)

    return(
        <div>
            <div className="container-fluid bg-white bg-opacity-25 m-0">
    		    <div className="container py-4">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-around">
                            <h1>Selecciona la categoria por la que te gustaria empezar hoy:</h1>
                        </div>
                    </div>
                    <CategoriesSelect/>
			    </div>
                <div className="d-flex justify-content-center">
                    <Link to={`/resultados/${store.categoria}`}>
                    <button
                    id="confirmation-button-registro"
                    type="button"
                    className="btn btn"
                     >
                    Continuar
                    </button>
                    </Link>
                </div>
		    </div>
        </div>
    )
}