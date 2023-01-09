export default function Card(props) {
  const { cards } = props;
  
  return (
    cards.map((card) => <div className="card" style={{'backgroundImage': `url(${card.img})`}}>
        <div className="card-name">{card.name}</div>
        <div className="card-color">{card.color}</div>
        <div className="card-footer">
          <div className="card-price">${card.price}</div>
          <button className="card-button">Add to cart</button>
        </div>
      </div> 
    )
  )
}