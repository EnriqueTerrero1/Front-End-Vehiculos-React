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

        // const redirect()=>{
        //     navigate('./Marca')
        // }
    }


    return (<>
    <h1>Crear Marca</h1>

    <div className="container" style={{justifyContent:"center", margin:"0 auto",alignItems:"center"}}>
        <form onSubmit={CrearMarca} >
            <div className="container-hijo">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                <input  type="text" value={marcaName} className="form-control" id="exampleFormControlInput1" onChange={(e) => setMarcaName(e.target.value)} ></input>
            <div className="botones">
            <button onClick={CrearMarca} className=" btn btn-primary">Crear marca</button>
            <button onClick={()=>navigate('/Marca')} className="btn btn-danger">Cancelar</button>
            </div>
            </div>
        </form>

        </div>
        


    </>)

}

