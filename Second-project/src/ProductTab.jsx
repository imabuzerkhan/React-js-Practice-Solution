import Product from "./Product";
import Price from "./Price";
import './Product.css'



function ProductTab(){
let styles = {
  display : "flex",
  alignItem: "center" ,
  JustifyContent : "center",
  gap: "20px",
  flexWrap : "wrap",
  padding:" 0px 60px"
}
  return(
    <div style={styles}>
    <Product title="Samsung SmartPhone" idx={0} ></Product>
    <Product title="Apple SmartPhone" idx={1}></Product>
    <Product title="Lenevo SmartPhone" idx={2}></Product>
    <Product title="Poco SmartPhone" idx={3}></Product>





    </div>
  )
}

export default ProductTab