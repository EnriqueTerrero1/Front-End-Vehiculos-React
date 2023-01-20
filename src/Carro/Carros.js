import { useEffect, useState } from "react";
import { urlMarcas, urlCarros } from "../endpoints";
import axios from 'axios';
import { Link } from "react-router-dom";
import ListaCarro from "./ListaCarro";


export default function Carros() {

    const [Carros, setCarros] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCarros();
    }, [Carros]);
    const getCarros = async () => {
        const respuesta = await axios.get(urlCarros);
        setCarros(respuesta.data);
        setIsLoading(false);


    }





    return (<>


        <Link to="/Carro/Crear"> <button className=" btn btn-primary">Crear Carro</button></Link>

        {isLoading && <div>Cargando...</div>}
        {Carros && <ListaCarro Carros={Carros} />}

    </>)
}