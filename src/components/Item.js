export default function Item(props) {
  const { items } = props;
  
  return (
    items.map((card) => <div className="item">
        <div className="item-img"><img src={card.img} alt="" /></div>
        <div className="item-name">{card.name}</div>
        <div className="item-color">{card.color}</div>
        <div className="item-price">${card.price}</div>
        <button className="item-button">Add to cart</button>
      </div> 
    )
  )
}