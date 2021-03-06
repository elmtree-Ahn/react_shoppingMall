import { Link, Route, Switch } from 'react-router-dom';

export default function Item(props) {
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.number + 1) + ".jpg"} width="100%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & {props.shoes.price}</p>
    </div>
  )
}