import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Menu from './Menu';
import Marcas from './Marca/Marcas';
import CrearMarca from './Marca/CrearMarca';
import CrearCarro from './Carro/CrearCarro';
import EliminarMarca from './Marca/EliminarMarca';
import EditarMarca from './Marca/EditarMarca';
import Carros from './Carro/Carros';
import EliminarCarro from './Carro/EliminarCarro';
import EditarCarro from './Carro/EditarCarro';


function App() {


  return (
    <>
    <BrowserRouter>
       <Menu></Menu>
      <Routes>
      <Route path="/" element={<Carros></Carros>}></Route> 

        <Route path="Carro" element={<Carros></Carros>}></Route> 
        <Route path="/Carro/Crear" element={<CrearCarro></CrearCarro>}></Route> 
        <Route path='/Carro/Eliminar/:id'element={<EliminarCarro></EliminarCarro>}></Route>
        <Route path='/Carro/Editar/:id'element={<EditarCarro></EditarCarro>}></Route>

       <Route path="Marca" element={<Marcas/>}></Route>
       <Route path="/Marca/Crear" element={<CrearMarca></CrearMarca>}></Route>
        <Route path='/Marca/Eliminar/:id'element={<EliminarMarca></EliminarMarca>}></Route>
        <Route path='/Marca/Editar/:id'element={<EditarMarca></EditarMarca>}></Route>
   </Routes>

   </BrowserRouter>
    
    </>

  )
}

export default App;
