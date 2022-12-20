import Input from "../inputs/Input";
import './Formulario.css';

import {v4 as uuidv4} from 'uuid';

const FormWork=(props)=>{

    const insertWork=(event)=>{

        event.preventDefault()

        if(!event.target.querySelector('#Name').value){

            alert('Falta El nombre')
            return;
        }
        if(!event.target.querySelector('#Correo').value){

            alert('Falta El Correo')
            return;
        }

        let tarea={
            id: uuidv4(),
            nombre:event.target.querySelector('#Name').value,
            creador:event.target.querySelector('#Correo').value,
            status:false
        }

        props.onSubmit(tarea);
    }

    return(

        // Por cada submit Obtenes el value de los inputs, Y se lo agregamos a la propieda 'onSubmit'
        // 'onSubmit={insertWork}'  es igual a onSubmit='{id:23 ,nombre:Name ,creador:Correo },
        // Con este valor lo agregamos a la lista de Tareas (que esta en App.js)
        <form onSubmit={insertWork} >
            <Input id='Name' Placeholder='Name' />
            <Input id='Correo' Placeholder='Correo' />
            <input type='submit' value='Agregar' className="btn-Black" />
        </form>
    )
}

export default FormWork;