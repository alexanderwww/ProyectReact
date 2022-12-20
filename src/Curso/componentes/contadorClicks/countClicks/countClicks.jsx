import './countClicks.css';
import React from "react";

// Sintaxis de destructuracion:
// En lugar de poner "prost" pone los parametros que se estan pasando 
export const CountClicks=({ texto,styleBtn,contadorClicks })=>{

   return(
      
      <button
         className={styleBtn}
         onClick={contadorClicks}
      >
         {texto}
        </button>
   )
}

//  ----------------------------------
import { useState } from 'react';
import './App.css';
import { CountClicks } from './componentes/countClicks/countClicks.jsx';
import TemplateContador from './componentes/templateContador/templateContador';

function App() {

   const contadorClicksTemplate=()=>{
     console.log('Entro')
     setNumClicks(parametro+1);
   
   };  
   const reiniciarContador=()=>{
     console.log('Reiniciar')
     setNumClicks(0)
   }
     
   const [parametro, setNumClicks]=useState(0);
 
   return (
     <div className='App'>
       <h1>Hello</h1>
 
       <TemplateContador numClick={parametro} />
 
       < CountClicks 
         styleBtn='btn-Orange'
         texto='Aceptar' 
         contadorClicks={contadorClicksTemplate}
       />
 
       < CountClicks 
         styleBtn='btn-Green'
         texto='Reiniciar' 
         contadorClicks={reiniciarContador}
       />
     
     </div>
   );
 }