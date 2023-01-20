import { useEffect, useState } from "react";
import { urlMarcas,urlCarros } from "../endpoints";
import axios from 'axios';
import { Link } from "react-router-dom";
import ListaCarro from "./ListaCarro";


export default function Carros(){

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





    return(<>
   

   <Link to="/Carro/Crear"> <button className=" btn btn-primary">Crear Carro</button></Link>

    {/* {isLoading && <div>Cargando...</div>} */}
     { Carros && <ListaCarro Carros={Carros}  />}














    </>)
}