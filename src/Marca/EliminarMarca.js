import { useParams } from "react-router-dom"
import { urlMarcas } from "../endpoints";
import { useEffect, useState } from "react";
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


export default function eliminarMarca(){

    const [marca, setMarca] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        getMarca();
      },[]);

      const getMarca = async () => {
        const respuesta = await axios.get(`${urlMarcas}/${id}`);
        setMarca(respuesta.data);
        console.log(respuesta.data);
    
      }

      const eliminarMarca= async()=>{
        await axios.delete(`${urlMarcas}/${id}`).then(navigate('/Marca'));
      }

    const {id}=useParams()

    return(<>

          <h1>Seguro que desea eliminar <label>{marca.name}</label>?</h1> 


            <button className="btn btn-primary" onClick={eliminarMarca}>Eliminar</button>
            <button onClick={()=>navigate('/Marca')} className="btn btn-secondary" >Cancelar</button>


    </>)
}