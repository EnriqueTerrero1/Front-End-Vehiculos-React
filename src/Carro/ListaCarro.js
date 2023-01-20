

import { Link } from "react-router-dom"
export default function ListaCarro({Carros}){

    return (<>

    <h1>Vehiculos</h1>

    <div className=" container shadow-4 rounded-5 overflow-hidden">
     <table className="  table table-striped table-hover">
  <thead className="table bg-light">
    <tr  >
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Modelo</th>
      <th scope="col">Marca</th>
      <th scope="col">Color</th>
      <th scope="col">Año</th>
      <th scope="col">Costo</th>
      <th  scope="col">Acciones</th>
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
    <td > <Link to={`/Carro/Editar/${Carro.id}`}><button className="btn btn-primary"  ><i className="bi bi-pencil-fill"></i></button></Link>
   <Link to={`/Carro/eliminar/${Carro.id}`}> <button className="btn btn-danger"    ><i className="bi bi-x-circle-fill"></i></button> </Link> </td>
    </tr>
   ))}
    
  </tbody>
</table>
</div>
</>)
}