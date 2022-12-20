  import './App.css';
  import TemplateContador from './componentesClases/contadorClicks/templateContador/templateContador';
  import CountClicks from './componentesClases/contadorClicks/countClicks/countClicks';
  import React from 'react';


  class App extends React.Component{

      constructor(){
        super();
        this.state={
          parametro:0,
        }

        this.reiniciarContador=this.reiniciarContador.bind(this);
        this.contadorClicksTemplate=this.contadorClicksTemplate.bind(this);

      }


    contadorClicksTemplate(){
      //  console.log('Entro')
      this.setState( ({parametro}) => ({parametro:parametro+1}) );
    
    };  
    reiniciarContador(){
      console.log('Reiniciar');

      this.setState( {parametro:0} )
    
      }

    render(){
        return (
          <div className='App'>
            <h1>Hello</h1>
      
            <TemplateContador numClick={this.state.parametro} />
      
            < CountClicks 
              styleBtn='btn-Orange'
              texto='Aceptar' 
              contadorClicks={this.contadorClicksTemplate}
            />
      
            < CountClicks 
              styleBtn='btn-Green'
              texto='Reiniciar' 
              contadorClicks={this.reiniciarContador}
            />
          
          </div>
        )
    }
  }

  export default App