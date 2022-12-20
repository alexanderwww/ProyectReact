import React from "react";
import './testimonio.css';



// Se puede exportar varias "funciones" por medio del "export"
// O tambien se puede Exportar una funcion por Default  

export const Testimonio=(props)=>{

    return(
        <div className="container-testimonio">
            <div className="box-img-testimonio">
                <img className="img-testimonio"  src={require(`../../img/general/${props.img}`)} alt="Testimonios" />
            </div>
            <div className="box-text-testimonio">
                <p className="title-t1 name-testimonio">{props.name}</p>
                <p dangerouslySetInnerHTML={{__html: props.cargo}} />
                <p className="text-testimonio">{props.testimonio}</p>
            </div>
        </div>
    )

}

// export default Testimonio;



// -----------------------------------------------Index 

const arrayData = [
    {
      name: 'Alexander #',
      cargo: 'Senior Developer #',
      testimonio: 'Hello my name is Kevin, I am junior developer, in working i am write code clear, I am study programmation in pandemic  #',
      img: 'logo512.png',
    },
    {
      name: 'Alexander #',
      cargo: 'Senior Developer #',
      testimonio: 'Hello my name is Kevin, I am junior developer, in working i am write code clear, I am study programmation in pandemic  #',
      img: 'logo512.png',
    },
    {
      name: 'Alexander #',
      cargo: 'Senior Developer #',
      testimonio: 'Hello my name is Kevin, I am junior developer, in working i am write code clear, I am study programmation in pandemic  #',
      img: 'logo512.png',
    }
  ]
  
  
  function App() {
    return (
      <div className='App'>
  
        {
          arrayData.map((data,index) => {
            return(
              <Testimonio name={data.name +index } cargo={data.cargo} testimonio={data.testimonio} img={data.img} />
              )
          })
  
        }
  
      </div>
    );
  }