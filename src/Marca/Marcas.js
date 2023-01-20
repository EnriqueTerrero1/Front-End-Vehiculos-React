import { useEffect, useState } from "react";
import { urlMarcas } from "../endpoints";
import axios from 'axios';
import ListaMarcas from "./ListaMarcas";
import { Link } from "react-router-dom";


export default function Marcas() {

  const [marcas, setMarcas] = useState([]);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() => {
    getMarcas();
  }, [marcas]);

  const getMarcas = async () => {
    const respuesta = await axios.get(urlMarcas);
    setMarcas(respuesta.data);
    setIsLoading(false);
  }

 
  

  

  return (
    <>

   <Link to="Crear"> <button  className=" btn btn-primary">Crear Marca</button></Link>

    {isLoading && <div>Cargando...</div>}
     { marcas && <ListaMarcas marcas={marcas}  />}

    </>)
}