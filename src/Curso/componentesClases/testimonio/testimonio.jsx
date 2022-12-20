import './App.css';
import Testimonio from './componentesClases/testimonio/testimonio';
import {v4 as uuidv4} from 'uuid';
import React from 'react';

class App extends React.Component{

  constructor(props){

    super();
    this.state={
      arrayData:[
        {
          name: 'Alexander #',
          cargo: 'Senior Developer #',
          testimonio: 'Hello my name is Kevin, I am junior developer, in working i am write code clear, I am study programmation in pandemic  #',
          img: 'logo512.png',
          id:uuidv4()
        },
        {
          name: 'Alexander #',
          cargo: 'Senior Developer #',
          testimonio: 'Hello my name is Kevin, I am junior developer, in working i am write code clear, I am study programmation in pandemic  #',
          img: 'logo512.png',
          id:uuidv4()
    
        },
        {
          name: 'Alexander #',
          cargo: 'Senior Developer #',
          testimonio: 'Hello my name is Kevin, I am junior developer, in working i am write code clear, I am study programmation in pandemic  #',
          img: 'logo512.png',
          id:uuidv4()
    
        }
      ]
    }

  }

  render(){
    return (
      <div className='App'>
        <h1>What is map in Js used for? </h1>
          
          {
            this.state.arrayData.map((data,index) => {
              return(
                <Testimonio key={data.id} name={data.name +index } cargo={data.cargo} testimonio={data.testimonio} img={data.img} />
                )
            })  
          }
      </div>

    );
    
  }

}


  
  
//   function App() {
//     return (
//       <div className='App'>
  
//         {
//           arrayData.map((data,index) => {
//             return(
//               <Testimonio name={data.name +index } cargo={data.cargo} testimonio={data.testimonio} img={data.img} />
//               )
//           })
  
//         }
  
//       </div>
//     );
//   }

// export default App;