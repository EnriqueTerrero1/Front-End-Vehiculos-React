import { useState,useEffect } from "react";
import { urlCarros, urlMarcas } from "../endpoints";
import axios from 'axios';


export default function CrearMarca() {


    useEffect(()=>{
        getMarcas();
    },[]);

    const [marcas,setMarcas]=useState([]);


    const getMarcas = async ()=>{
        const respuesta = await axios.get(urlMarcas);
        setMarcas(respuesta.data);
    }

    const [CarroModel, setCarroModel] = useState('');
    const [CarroColor, setCarroColor] = useState('');
    const [CarroYear, setCarroYear] = useState('');
    const [CarroMarca, setCarroMarca] = useState('');
    const [CarroCost, setCarroCost] = useState('');


    async function CrearCarro() {
        try {
            const CarroCreacionDTO = {
                model: CarroModel.trim(),
                color: CarroColor.trim(),
                año: CarroYear.trim(),
                marcaId: CarroMarca.trim(),
                costo: CarroCost.trim(),

            };
            await axios.post(urlCarros, CarroCreacionDTO);
        } catch (error) {
            console.log(error);

        }

    }


    return (<>
        <form onSubmit={CrearCarro} >
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Modelo</label>
                <input type="text" value={CarroModel} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroModel(e.target.value)} ></input>
                <label htmlFor="exampleFormControlInput1" className="form-label">Color</label>
                <input type="text" value={CarroColor} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroColor(e.target.value)} ></input>
                <label htmlFor="exampleFormControlInput1" className="form-label">Costo</label>
                <input type="text" value={CarroCost} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroCost(e.target.value)} ></input>
                <label htmlFor="exampleFormControlInput1" className="form-label">Fecha</label>
                <input type="date" value={CarroYear} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroYear(e.target.value)} ></input>
              
                <label htmlFor="exampleFormControlInput1" className="form-label">Marca</label>

                <select className="form-control"  onChange={(e) => setCarroMarca(e.target.value)}>
                {/* <option key={marca.id} value={marca.id}>{marca.name}</option> */}
                <option defaultValue>Seleccionar marca</option>
                  {marcas.map((marca)=>(
                     <option key={marca.id} value={marca.id}>{marca.name}</option>
                  ))} 
                </select>
            </div>
            <button className=" btn btn-primary">Crear Carro</button>
            <button className="btn btn-danger">Cancelar</button>

        </form>


    </>)

}

