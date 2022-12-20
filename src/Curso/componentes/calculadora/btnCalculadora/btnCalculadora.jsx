// import '../countClicks/countClicks.css';
import '../../contadorClicks/countClicks/countClicks.css'

const Button=(props)=>{

    
    return(
       
       <button className={props.styleBtn} onClick={()=>props.action(props.texto) }  >
          {props.texto}
        </button>
    )
}

export default Button; 