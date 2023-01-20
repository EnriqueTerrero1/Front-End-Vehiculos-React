import { useState, useEffect } from "react";
import { urlCarros, urlMarcas } from "../endpoints";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function CrearMarca() {
    const navigate = useNavigate()


    useEffect(() => {
        getMarcas();
        getYears();

    }, []);

    const [marcas, setMarcas] = useState([]);


    const getMarcas = async () => {
        const respuesta = await axios.get(urlMarcas);
        setMarcas(respuesta.data);
    }

    const [CarroModel, setCarroModel] = useState('');
    const [CarroColor, setCarroColor] = useState('');
    const [CarroYear, setCarroYear] = useState('');
    const [CarroMarca, setCarroMarca] = useState('');
    const [CarroCost, setCarroCost] = useState('');

    const [year, setYear] = useState(new Date().getFullYear());

    const [years, setYears] = useState([]);

    const getYears = () => {
        for (var index = 0; index < 25; index++) {
            years.push(year - index);

        }
    }





    async function CrearCarro() {
        try {
            const CarroCreacionDTO = {
                model: CarroModel.trim(),
                color: CarroColor.trim(),
                año: CarroYear.trim(),
                marcaId: CarroMarca.trim(),
                costo: CarroCost.trim(),

            };
            console.log(CarroCreacionDTO);
            await axios.post(urlCarros, CarroCreacionDTO).then(navigate('/Carro'));
        } catch (error) {
            console.log(error);

        }

    }


    return (<>
        <h1>Crear Vehiculo</h1>
        <div className="container w-25 p-3" style={{ justifyContent: "center", margin: "0 auto", alignItems: "center" }}>

            <form onSubmit={CrearCarro} >
                <div className="container-hijo">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Modelo:</label>
                    <input type="text" value={CarroModel} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroModel(e.target.value)} ></input>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Color:</label>
                    <input type="text" value={CarroColor} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroColor(e.target.value)} ></input>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Costo:</label>
                    <input type="text" value={CarroCost} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroCost(e.target.value)} ></input>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Fecha:</label>


                    <select className="form-control" onChange={(e) => { setCarroYear(e.target.value) }}>
                        <option defaultValue>Seleccionar año</option>
                        {years.map((year, i) => (
                            <option key={i + 1} value={year}>{year}</option>
                        ))}
                    </select>



                    <label htmlFor="exampleFormControlInput1" className="form-label">Marca:</label>

                    <select className="form-control" onChange={(e) => setCarroMarca(e.target.value)}>
                        {/* <option key={marca.id} value={marca.id}>{marca.name}</option> */}
                        <option defaultValue>Seleccionar marca</option>
                        {marcas.map((marca) => (
                            <option key={marca.id} value={marca.id}>{marca.name}</option>
                        ))}
                    </select>

                    <div className="botones">

                        <button className=" btn btn-primary" onClick={CrearCarro}>Crear Carro</button>
                        <button className="btn btn-danger" onClick={() => (navigate('/Carro'))}>Cancelar</button>
                    </div>
                </div>
            </form>
        </div>


    </>)

}

