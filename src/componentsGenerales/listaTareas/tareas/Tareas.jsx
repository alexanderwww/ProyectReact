import './Tareas.css';



const Tareas=(props)=>{

    // Le pasamos el id al attr "props.action"
    const getId=()=>{

        props.action(props.id)
    };

    return(
        <div className='TareaText' id={props.id} >

            <h5 
            onClick={()=>props.actionStatusTarea(props.id)} 

            className='TareaTextInput'
            
            style={{textDecorationLine:props.tareaCompletada?'line-through':''} }
            
            >
                {props.texto}   
            </h5>
            
            <div>
                {/* Dos Formas de cambiar el valor */}
                {/* <button onClick={getId} className='btn-Orange'>Eliminar</button> */}
                <button onClick={()=>props.action(props.id)} className='btn-GreenGradiente'>Eliminar</button>

            </div>
            
        </div>
    )
}

export default Tareas;