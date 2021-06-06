import './button.css'

const Button = (props) => (
<div className="mainButton" onClick={props.onClick} >
<div className="btn btn-six">
  <span>{props.value}</span>
</div>
</div>
)


export default Button;