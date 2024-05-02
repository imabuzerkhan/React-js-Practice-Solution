import './Product.css'

function Product({title ,subtitle , price}){
  let features = ['apple', "banana" , "anar" , "chowmein"]
  let list = features.map((feature)=><li>{feature}</li>);
  let styles = {  backgroundColor : price>25000 ? "red" : ""}

  // if(price>25000){
  //   return(
  //     <>
      
  //     <div className="Product">
  
  //     <h1> {title } </h1>
  //     <h2>{price}</h2>
  //     <p>{subtitle}</p>
  //     <p>Get 50 percent discount</p>
  //     {/* <p>{list}</p> */}
  //     </div>
      
  //     </>
  //   )
  // }else{
  //   return(
  //     <>
      
  //     <div className="Product">
  
  //     <h1> {title } </h1>
  //     <h2>{price}</h2>
  //     <p>{subtitle}</p>
  //     {/* <p>{list}</p> */}
  //     </div>
      
  //     </>
  //   )
  // }

  // ! ternary operator
  // let isdicount = price>25000 ? "discount of 5 %" : null;

  return(
    <>
    
    <div className="Product"  style={styles}>

    <h1 > {title } </h1>
    <h2>{price}</h2>
    <p>{subtitle}</p>
    { price>25000 ? <p>discount of 5 %</p> : null}
    {/* <p>{price>25000 ? "discount of 5 %" : "get discount percent"}</p> */}
    {/* ternary operatory */}
    {/* <p>{isdicount}</p> */}
    <p>{list}</p>
    </div>
    
    </>
  )
  
}

export default Product