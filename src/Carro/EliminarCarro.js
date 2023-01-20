import { useParams } from "react-router-dom"
import { urlMarcas } from "../endpoints";
import { useEffect, useState } from "react";
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

import { urlCarros } from "../endpoints";

export default function EliminarCarro() {
  const navigate = useNavigate()


    const [carro, setCarro] = useState('');

    useEffect(() => {
        getCarro();
      },[]);

      const getCarro = async () => {
        const respuesta = await axios.get(`${urlCarros}/${id}`);
        setCarro(respuesta.data);
        console.log(respuesta.data);
    
      }

      async function eliminarCarro() {
        try {
            const carroDTO = {
                id: id       
            };
              console.log(carroDTO.id);
             axios.delete(`${urlCarros}/${carroDTO.id}`).then( navigate('/Carro'));
        } catch (error) {
            console.log(error);
        }
    
    }

    const {id}=useParams()

    return(<>

          <h1>Seguro que desea eliminar este vehiculo?</h1>
          <label>Vehiculo modelo:{carro.model}</label> 
          <label>Vehiculo año:{carro.año}</label> 
          
            <button className="btn btn-primary" onClick={eliminarCarro}>Eliminar</button>
            <button className="btn btn-secondary" onClick={()=>( navigate('/Carro'))} >Cancelar</button>


    </>)
}
