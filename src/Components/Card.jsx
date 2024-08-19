import "./card.css"
const Card = () => {

    const cardData = [
        {
            title : "Titulo qualquer 1",
            description : "Descricao Qualquer 1",
            link : "#"
        },
        {
            title : "Titulo qualquer 2",
            description : "Descricao qualquer 2",
            link : "#"
        }
        ,
        {
            title : "Titulo qualquer 3",
            description : "Descricao qualquer 3",
            link : "#"
        }
        ,
        {
            title : "Titulo qualquer 4",
            description : "Descricao qualquer 4",
            link : "#"
        }
    ]
    console.log(cardData);
    
    return(
        
        <div className="card-container">
            {cardData.map((card, index) => {
                console.log(index);
                
                return (
                    <div className="card" key={index}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <a href={card.link}>Veja mais</a>
                </div>
                )
               
            })}
        </div>
    )
}

export default Card;