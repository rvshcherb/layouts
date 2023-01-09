export default function IconSwitch(props) {
  return (
    <span 
      className={"material-icons"}
      onClick={(evt) => props.onSwitch(evt)}
    >
      {props.icon}
    </span>
  ) 
}