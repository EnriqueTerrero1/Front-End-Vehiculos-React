import { useState } from "react";
import { urlMarcas } from "../endpoints";
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Marcas from "./Marcas";


export default function CrearMarca() {

    const [marcaName, setMarcaName] = useState('');
    const navigate = useNavigate()

    async function CrearMarca() {
        try {
            const marcaCreacionDTO = {
                name: marcaName.trim()
            };{
            console.log(marcaCreacionDTO);
            await axios.post(urlMarcas, marcaCreacionDTO).then( navigate('/Marca'));
            }
             
        } catch (error) {
            console.log(error);

        }
    }


    return (<>
    <h1>Crear Marca</h1>

    <div className="container w-25 p-3" style={{justifyContent:"center", margin:"0 auto",alignItems:"center"}}>
        <form onSubmit={CrearMarca} className="form-group needs-validation " >
            <div className="container-hijo">
                <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                <input  type="text" value={marcaName} className="form-control" id="validationCustom01"   onChange={(e) => setMarcaName(e.target.value)} required ></input>
                <div className="invalid-feedback">Este campo es requerido</div>
           
                

            <div className="botones">
            <button onClick={CrearMarca} className=" btn btn-primary">Crear marca</button>
            <button onClick={()=>navigate('/Marca')} className="btn btn-danger">Cancelar</button>
            </div>
            </div>
        </form>

        </div>
        


    </>)

}

