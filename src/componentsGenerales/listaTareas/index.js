import { useState } from 'react';
import FormWork from './formulario/Formulario';
import ContainerTareas from './containerTareas/ContainerTareas';
import Tareas from './tareas/Tareas'

function AdministradorDeTareas() {

  const [tareas,setTareas]=useState([]);

  const agregarTarea=(newTarea)=>{


    let data=[newTarea, ...tareas];

    setTareas(data);
  }


  const deleteAWork=(id)=>{
    console.log(id);
    let newArray=tareas.filter(tarea=> tarea.id!=id);

    setTareas(newArray);
  }

  const statusTarea=(id)=>{
    // console.log(tareas);

    let arrayUpdate=tareas.map((value)=>{
        if(value.id==id){
          value.status=!value.status;
        }
        return value;
    })

    console.log(arrayUpdate)
    setTareas(arrayUpdate);
  }

  return (
    <div>

      <FormWork onSubmit={agregarTarea} />
      
      <ContainerTareas estatusContainerTareas={tareas.length==0?true:false} >

        {
          tareas.map((tarea)=>
            <Tareas 
            
            key={tarea.id} 
            
            texto={tarea.nombre} 
            
            id={tarea.id}
            
            action={deleteAWork}

            actionStatusTarea={statusTarea}
            
            tareaCompletada={tarea.status}

            />
          )
        }

      </ContainerTareas>
    </div>

  );
}

export default AdministradorDeTareas;