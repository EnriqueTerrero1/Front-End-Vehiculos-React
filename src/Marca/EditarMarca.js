import { useParams } from "react-router-dom"
import { urlMarcas } from "../endpoints";
import { useEffect, useState } from "react";
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


export default function EditarMarca(){


    const [marca, setMarca] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        getMarca();
      },[]);

      const getMarca = async () => {
        const respuesta = await axios.get(`${urlMarcas}/${id}`);
        setMarca(respuesta.data);
        setMarcaName(respuesta.data.name);
        console.log(respuesta.data);
    
      }

      const [marcaName, setMarcaName] = useState('');
    
     


      async function editarMarca() {
        try {
          const marcaDTO = {
            id: id,
            name: marcaName
          };
          console.log(marcaDTO);
          await axios.put(`${urlMarcas}/${marcaDTO.id}/`, marcaDTO).then(navigate('/Marca'));
          
        } catch (error) {
          console.log(error);
    
        }
    
      }

    const {id}=useParams()


    return(
        <>
        <h1>Editar Marca</h1>
            <div className="container" style={{justifyContent:"center", margin:"0 auto",alignItems:"center"}}>

        <form  >
       < div className="container-hijo">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                  <input type="text" value={marcaName} onChange={(e) => setMarcaName(e.target.value)} className="form-control" ></input>
                  {/* <input type="text" value={marca.name} className="form-control" id="exampleFormControlInput1" onChange={(e) => setMarcaName(e.target.value)}></input> */}
                <div className="botones">
                  <button className="btn btn-primary" onClick={editarMarca}>Guardar Cambios</button>
              <button className="btn btn-secondary" onClick={()=>navigate('/Marca')}>Cancelar</button>
              </div>
              </div>
              </form>


             
              </div>
        </>
    )
}