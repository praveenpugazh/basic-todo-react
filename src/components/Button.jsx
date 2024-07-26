/* eslint-disable react/prop-types */
const Button = (props) => {
  return <button onClick={props.click}>{props.btnName}</button>
}

export default Button

