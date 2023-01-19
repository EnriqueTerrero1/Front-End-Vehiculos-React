import { useEffect, useState } from "react";
import {urlMarcas} from "../endpoints";
import axios from 'axios';


export default function ShowMarcas(){

    const [marcas,setMarcas]=useState([]);

useEffect(()=>{
    getMarcas();
},[]);
const getMarcas = async ()=>{
    const respuesta = await axios.get(urlMarcas);
    setMarcas(respuesta.data);
}

const [marcaName, setMarcaName] = useState('');
const [id, setId] = useState('');

const SetData =(id,name)=>{
    setId(id);
    setMarcaName(name);
}

async function editarMarca() {
    try {
        const marcaDTO = {
            id: id,
            name: marcaName
        };
        console.log(marcaDTO);
        await axios.put(`${urlMarcas}/${marcaDTO.id}/`,marcaDTO);
    } catch (error) {
        console.log(error);

    }

}



async function eliminarMarca() {
    try {
        const marcaDTO = {
            id: id
            
        };

        
                console.log(marcaDTO);
                 axios.delete(`${urlMarcas}/${marcaDTO.id}`);
            
            
            
        
       
    } catch (error) {
        console.log(error);

    }

}

    return(<>
    <table className="  table table-success">
  <thead className=" table-success">
    <tr className="table-success" >
      <th className="table-success"scope="col">#</th>
      <th className="table-success"scope="col">Id</th>
      <th className="table-success"scope="col">Nombre</th>
      <th className="table-success"scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody >
   {marcas.map((marca,i)=>(
    <tr  key={marca.id}>
    <td >{i+1}</td>
    <td >{marca.id}</td>
    <td >{marca.name}</td>
    <td > <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>SetData(marca.id,marca.name)} ><i className="bi bi-pencil-fill"></i></button>
     <button className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#examplemodalEliminar" onClick={()=>SetData(marca.id,marca.name)} ><i className="bi bi-x-circle-fill"></i></button></td>
    </tr>
   ))}
    
  </tbody>
</table>




<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Marca</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form  >
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                <input type="text" value={marcaName} className="form-control" id="exampleFormControlInput1" onChange={(e) => setMarcaName(e.target.value)}></input>
            </div>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={editarMarca}>Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* onClick={()=>eliminarMarca(marca.id)} */}

<div className="modal fade" id="examplemodalEliminar" tabIndex="-1" aria-labelledby="examplemodalEliminar" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Eliminar Marca</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form  >
            <div className="mb-3">
               <h2>Seguro que desea eliminar {marcaName}</h2>
            </div>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" className="btn btn-danger" onClick={eliminarMarca}>Eliminar</button>
      </div>
    </div>
  </div>
</div>








    </>)
}