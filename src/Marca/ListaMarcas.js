import { Link } from "react-router-dom";
export default function ListaMarcas({ marcas }) {


  return (<>
    <h1>Marcas</h1>

    <div className=" container shadow-4 rounded-5 overflow-hidden">

      <table className="table table-striped table-hover">
        <thead className=" table bg-light">
          <tr className="table" >
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody >
          {marcas.map((marca, i) => (
            <tr key={marca.id}>
              <td >{i + 1}</td>
              <td >{marca.id}</td>
              <td >{marca.name}</td>
              <td ><Link to={`/Marca/editar/${marca.id}`}>  <button className="btn btn-primary" ><i className="bi bi-pencil-fill"></i></button></Link>
                <Link to={`/Marca/eliminar/${marca.id}`}> <button className="btn btn-danger"   ><i className="bi bi-x-circle-fill"></i></button> </Link></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  </>)
}