import './Input.css';
import { useState } from 'react';

const Input=(props)=>{

    const [valueInput,updateInput]=useState('data');

    // Validar Campos  
    const statusText=(event)=>{
        // updateInput(event.target.value);
    }

    return(

        <div>
            <input 
            className='Input' 
            type="text" 
            placeholder={props.Placeholder} 
            id={props.id} 
            onChange={statusText} 
            />
        </div>
    );
}

export default Input;
