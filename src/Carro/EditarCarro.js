
import { useParams } from "react-router-dom"
import { urlMarcas, urlCarros } from "../endpoints";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function EditarCarro() {
  const navigate = useNavigate()


  const [carro, setCarro] = useState('');
  const [Marcas, setMarcas] = useState([]);

  useEffect(() => {
    getMarcas();
    getCarro();
    getYears();


  }, []);

  const getCarro = async () => {
    const respuesta = await axios.get(`${urlCarros}/${id}`);
    setCarro(respuesta.data);
    setCarroModel(respuesta.data.model);
    setCarroId(respuesta.data.id);
    setCarroColor(respuesta.data.color);
    setCarroYear(respuesta.data.año);
    setCarroMarca(respuesta.data.marca);
    setCarroCosto(respuesta.data.costo);
    setMarcaId(respuesta.data.marca.id);



  }
  const getMarcas = async () => {
    const respuesta = await axios.get(urlMarcas);
    setMarcas(respuesta.data);
  }

  const [CarroModel, setCarroModel] = useState('');
  const [CarroColor, setCarroColor] = useState('');
  const [CarroYear, setCarroYear] = useState('');
  const [CarroMarca, setCarroMarca] = useState('');
  const [CarroCosto, setCarroCosto] = useState('');
  const [CarroId, setCarroId] = useState('');

  const [MarcaId, setMarcaId] = useState('');

  async function editarCarro() {

    try {
      const carroCreacionDTO = {
        "model": CarroModel,
        "color": CarroColor,
        "año": CarroYear,
        "marcaid": MarcaId,
        "costo": CarroCosto,
        "id": CarroId,

      };
      console.log(carroCreacionDTO)
      await axios.put(`${urlCarros}/${carroCreacionDTO.id}/`, carroCreacionDTO).then(navigate('/Carro'));
    } catch (error) {
      console.log(error);
    }


  }
  const [year, setYear] = useState(new Date().getFullYear());

  const [years, setYears] = useState([]);

  const getYears = () => {
    for (var index = 0; index < 25; index++) {
      years.push(year - index);

    }
  }

  const { id } = useParams()

  return (
    <>
      <h1>Editar Vehiculo</h1>
      <div className="container w-25 p-3" style={{ justifyContent: "center", margin: "0 auto", alignItems: "center" }}>

        <form  >
          <div className="container-hijo">

            <label htmlFor="exampleFormControlInput1" className="form-label">Modelo</label>
            <input type="text" value={CarroModel} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroModel(e.target.value)} ></input>
            <label htmlFor="exampleFormControlInput1" className="form-label">Color</label>
            <input type="text" value={CarroColor} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroColor(e.target.value)} ></input>
            <label htmlFor="exampleFormControlInput1" className="form-label">Costo</label>
            <input type="text" value={CarroCosto} className="form-control" id="exampleFormControlInput1" onChange={(e) => setCarroCosto(e.target.value)} ></input>
            <label htmlFor="exampleFormControlInput1" className="form-label">Año</label>

            <select className="form-control" onChange={(e) => { setCarroYear(e.target.value) }}>
              <option defaultValue>{CarroYear}</option>
              {years.map((year, i) => (
                <option key={i + 1} value={year}>{year}</option>
              ))}
            </select>
            <label htmlFor="exampleFormControlInput1" className="form-label">Marca</label>

            <select className="form-control" onChange={(e) => setMarcaId(e.target.value)}>
              {/* <option key={marca.id} value={marca.id}>{marca.name}</option> */}
              <option defaultValue value={CarroMarca.id}>{CarroMarca.name}</option>

              {Marcas.map((marca) => (
                <option key={marca.id} value={marca.id}>{marca.name}</option>
              ))}
            </select>



            <div className="botones">

              <button className="btn btn-primary" onClick={editarCarro}>Guardar Cambios</button>
              <button className="btn btn-secondary" onClick={() => (navigate('/Carro'))}>Cancelar</button>
            </div>
          </div>
        </form>
      </div>


    </>
  )
}