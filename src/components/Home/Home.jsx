import "./Home.css"

const Home = (props) => {
  return (
    <div>Dish : Name : {props.dish.name}, Descripcion : {props.dish.description}, Precio : {props.dish.price}</div>
  )
}

export default Home
