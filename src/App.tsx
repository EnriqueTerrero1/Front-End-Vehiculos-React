import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Menu from './Menu';
import configureValidations from './Validations';
import ShowMarcas from './Marca/ShowMarcas';
import CrearMarca from './Marca/CrearMarca';
import ShowCarros from './Carro/ShowCarros';
import CrearCarro from './Carro/CrearCarro';
configureValidations();

function App() {


  return (
    <>
    <BrowserRouter>
       <Menu></Menu>
      <Routes>
       
       {/* //<Route index element={<Menu></Menu>}></Route> */}
        <Route path="Carro" element={<ShowCarros></ShowCarros>}></Route> 
        <Route path="/Carro/Crear" element={<CrearCarro></CrearCarro>}></Route> 

       <Route path="Marca" element={<ShowMarcas></ShowMarcas>}></Route>
       <Route path="/Marca/Crear" element={<CrearMarca></CrearMarca>}></Route>

   </Routes>








   </BrowserRouter>
    
    </>

  )
}

export default App;
