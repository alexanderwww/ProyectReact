import './ContainerTareas.css';

const ContainerTareas=(props)=>{

    return(
        <div className="ContainerTareas" style={{display: props.estatusContainerTareas?'none':'block'}}>

            {props.children}

        </div>
    )
}


export default ContainerTareas;