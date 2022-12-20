
import { useState } from 'react';
import './App.css';
import PantallaCalculadora from './componentes/calculadora/pantallaCalculadora/pantallaCalculadora'
import Button from './componentes/calculadora/btnCalculadora/btnCalculadora.jsx';
import { evaluate} from 'mathjs';

function App() {

  const [number,getNumber]= useState('');

  const getDataCalculadora=(valorButton)=>{
    

    // Si en la pantalla Esta alguno de esto valores 
    if(number=='NaN' || number=='Infinity' ||  number=='-Infinity'){

      // Que el primer valor a insertar  sea un Numero
      if(!isNaN(valorButton)){

        getNumber(valorButton);

      }

    }else{

          // Verificamos que sea el primer valor y que no contenga un valor diferente a un numero
          number.length==0 && isNaN(valorButton)?getNumber(''):
          // Si es un operador y el ultimo valor en la pantalla tambien lo es (23- mas * => 23-*) 
          isNaN(valorButton) && isNaN(number.slice(-1))?
            // reemplazamos el antiguo Operador por el nuevo
            getNumber((number.slice(0,-1)+valorButton).toString()):
            // Si no es el caso concatenamos el nuevo valor (434* => 434*2)
            getNumber((number+valorButton).toString());
  
    };

  };



  const getResult=async()=>{


    if(number && number!=='-Infinity' && number!=='Infinity' && number!=='NaN'){

      // Si el ultimo caracter no es un numero,
      // lo concatenamos con su mismo valor(22* => 22*22)
      // Si no es el caso dejamos su valor por default 
      let data=isNaN(number.slice(-1))?(number+(number.slice(0,-1)).toString()):number;

      getNumber((evaluate(data)).toString());

    }

  }

  return (
    <div className='App'>


    <PantallaCalculadora value={number}/>
      <div>
        <Button action={getDataCalculadora} texto='1' styleBtn='btn-Black' />
        <Button action={getDataCalculadora} texto='2' styleBtn='btn-Black' />
        <Button action={getDataCalculadora} texto='3' styleBtn='btn-Black' />
        <Button action={getDataCalculadora} texto='4' styleBtn='btn-Black' />
        <Button action={getDataCalculadora} texto='5' styleBtn='btn-Black' />
      </div>

      <div>
        <Button action={getDataCalculadora} texto='6' styleBtn='btn-Black' />
        <Button action={getDataCalculadora} texto='7' styleBtn='btn-Black' />
        <Button action={getDataCalculadora} texto='8' styleBtn='btn-Black' />
        <Button action={getDataCalculadora} texto='9' styleBtn='btn-Black' />
        <Button action={getDataCalculadora} texto='0' styleBtn='btn-Black' />
      </div>

      <div>
        <Button action={getDataCalculadora} texto='+' styleBtn='btn-Orange' />
        <Button action={getDataCalculadora} texto='-' styleBtn='btn-Orange' />
        <Button action={getDataCalculadora} texto='/' styleBtn='btn-Orange' />
        <Button action={getDataCalculadora} texto='*' styleBtn='btn-Orange' />

        <Button action={getResult} texto='=' styleBtn='btn-Orange' />

      </div>

      <div>

        <Button action={()=>getNumber('')} texto='Clear' styleBtn='btn-Green' />

      </div>

    </div>

  );
}

export default App; 