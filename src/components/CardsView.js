import Card from "./Card"
export default function CardsView(props) {
  return (
    <div className={'cards'}>
      <Card cards={props.cards} />
    </div>
  ) 
}