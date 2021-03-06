import { useHistory, useParams } from 'react-router-dom';

export default function Detail(props) {

  let { id } = useParams();
  let findItem = props.shoes.find(function(item){
    return item.id == id
  });
  let history = useHistory();

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (findItem.id + 1) + ".jpg"}  width="100%" />
          
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={() => {history.goBack()}}>뒤로가기</button>
        </div>
      </div>
    </div> 
  )
}