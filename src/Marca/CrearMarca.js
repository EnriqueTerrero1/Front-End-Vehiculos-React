import { useState } from "react";
import { urlMarcas } from "../endpoints";
import axios from 'axios';


export default function CrearMarca() {

    const [marcaName, setMarcaName] = useState('');


    async function CrearMarca() {
        try {
            const marcaCreacionDTO = {
                name: marcaName.trim()
            };
            console.log(marcaCreacionDTO);
            await axios.post(urlMarcas, marcaCreacionDTO);
        } catch (error) {
            console.log(error);

        }

    }


    return (<>
        <form onSubmit={CrearMarca} >
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                <input type="text" value={marcaName} className="form-control" id="exampleFormControlInput1" onChange={(e) => setMarcaName(e.target.value)} ></input>
            </div>
            <button className=" btn btn-primary">Crear marca</button>
            <button className="btn btn-danger">Cancelar</button>

        </form>


    </>)

}

