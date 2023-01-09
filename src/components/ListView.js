import Item from "./Item"

export default function ListView(props) {
  return (
    <div className={'items'}>
      <Item items={props.items} />
    </div>
  ) 
}