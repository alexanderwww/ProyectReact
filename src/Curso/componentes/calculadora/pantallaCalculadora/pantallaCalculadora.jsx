import './pantallaCalculadora.css';

const PantallaCalculadora = (props) => {

    return (
        <div className="container-pantalla">
            <h1>Pantalla</h1>
            <div>
                {props.value}
            </div>
        </div>
    )
}

export default PantallaCalculadora;