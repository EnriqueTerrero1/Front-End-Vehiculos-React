import { useEffect, useState } from "react";
import {urlCarros,urlMarcas} from "../endpoints";
import axios from 'axios';


export default function ShowMarcas(){

    const [Carros,setCarros]=useState([]);

useEffect(()=>{
    getCarros();
},[]);
const getCarros = async ()=>{
    const respuesta = await axios.get(urlCarros);
    setCarros(respuesta.data);
}


const [marcas,setMarcas]=useState([]);

useEffect(()=>{
    getMarcas();
},[]);
const getMarcas = async ()=>{
    const respuesta = await axios.get(urlMarcas);
    setMarcas(respuesta.data);
}

const [CarroModel, setCarroModel] = useState('');
const [CarroColor, setCarroColor] = useState('');
const [CarroYear, setCarroYear] = useState('');
const [CarroMarca, setCarroMarca] = useState('');
const [CarroCosto, setCarroCosto] = useState('');
const [CarroId, setCarroId] = useState('');

const SetData =(id,model,color,año,marca,costo)=>{
    setCarroId(id);
    setCarroModel(model);
    setCarroColor(color);
    setCarroYear(año);
    setCarroMarca(marca);
    setCarroCosto(costo);

}


  async function editarCarro() {
    
    try{
        const carroCreacionDTO = {
          "model": CarroModel,
          "color":CarroColor,
          "año":CarroYear,
          "marcaid":CarroMarca,
          "costo":CarroCosto,
            "id": CarroId,
           
        };
        console.log(carroCreacionDTO)
       await  axios.put(`${urlCarros}/${carroCreacionDTO.id}/`,carroCreacionDTO);
      } catch(error){
        console.log(error);
      }
    

}



async function eliminarCarro() {
    try {
        const carroDTO = {
            id: CarroId
            
            
        };

        
                console.log(carroDTO.id);
                 axios.delete(`${urlCarros}/${carroDTO.id}`);
            
            
            
        
       
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
      <th className="table-success"scope="col">Modelo</th>
      <th className="table-success"scope="col">Marca</th>
      <th className="table-success"scope="col">Color</th>
      <th className="table-success"scope="col">Año</th>
      <th className="table-success"scope="col">Costo</th>
      <th className="table-success" scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody >
   {Carros.map((Carro,i)=>(
    <tr  key={Carro.id}>
    <td>{i+1}</td>
    <td>{Carro.id}</td>
    <td>{Carro.model}</td>
    <td>{Carro.marca.name}</td>
    <td>{Carro.color}</td>
    <td>{Carro.año}</td>
    <td>{Carro.costo}</td>                                                                                                          
    <td > <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>SetData(Carro.id,Carro.model,Carro.color,Carro.año,Carro.marca.name,Carro.costo)} ><i className="bi bi-pencil-fill"></i></button>
     <button className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#examplemodalEliminar" onClick={()=>{setCarroId(Carro.id),setCarroModel(Carro.model)}} ><i className="bi bi-x-circle-fill"></i></button></td>
    </tr>
   ))}
    
  </tbody>
</table>




<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Carro</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form  >
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Modelo</label>
                <input type="text" value={CarroModel} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroModel(e.target.value)} ></input>
                <label htmlFor="exampleFormControlInput1" className="form-label">Color</label>
                <input type="text" value={CarroColor} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroColor(e.target.value)} ></input>
                <label htmlFor="exampleFormControlInput1" className="form-label">Costo</label>
                <input type="text" value={CarroCosto} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroCosto(e.target.value)} ></input>
                <label htmlFor="exampleFormControlInput1" className="form-label">Fecha</label>
                <input type="date" value={CarroYear} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroYear(e.target.value)} ></input>
              
                <label htmlFor="exampleFormControlInput1" className="form-label">Marca</label>

                <select className="form-control"  onChange={(e) => setCarroMarca(e.target.value)}>
                {/* <option key={marca.id} value={marca.id}>{marca.name}</option> */}
                <option defaultValue>{CarroMarca}</option>

                  {marcas.map((marca)=>(
                     <option key={marca.id} value={marca.id}>{marca.name}</option>
                  ))} 
                </select>
            
            </div>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={editarCarro}>Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* onClick={()=>eliminarMarca(marca.id)} */}

<div className="modal fade" id="examplemodalEliminar" tabIndex="-1" aria-labelledby="examplemodalEliminar" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Eliminar Carro</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form  >
            <div className="mb-3">
               <h2>Seguro que desea eliminar {CarroModel}</h2>
            </div>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" className="btn btn-danger" onClick={eliminarCarro}>Eliminar</button>
      </div>
    </div>
  </div>
</div>








    </>)
}