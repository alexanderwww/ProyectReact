import './Card.css';

const Card = (props) => {

    return (
            <div className='containerCard'>

                <p className="title">{props.title}</p>
                <p className="desc">{props.descripcion}</p>
                <p className="learn-more">{props.link}</p>
                <img src="https://d33wubrfki0l68.cloudfront.net/b8c8eda0ffb86b53dc2050cbd0c91cf683d727c6/b2dbf/img/logos/cssscan.svg" alt="CSS Scan logo" />

            </div>
    )
}

export default Card;