import './countClicks.css';
import React from "react";

// Sintaxis de destructuracion:
// En lugar de poner "prost" pone los parametros que se estan pasando 
 const CountClicks=({ texto,styleBtn,contadorClicks })=>{

   return(
      
      <button
         className={styleBtn}
         onClick={contadorClicks}
      >
         {texto}
        </button>
   )
}

export default CountClicks;