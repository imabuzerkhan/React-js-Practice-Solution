import Price from "./Price"



function Product({title ,  idx}){
  let descriptions = [["Its a smmoth" , "Its also Smmoth"] , ["It is satisfied" ,"I have poco mobile phone"], ["Its not a smmoth" , "Its also Smmoth"], ["abcdefg" , "123456789"]]
  let oldPrice = [2000 , 4000, 6000, 5664]
  let NewPrice = [1500, 1800, 2000, 4666]

  return(
    <>
    <div className="Product">
      
    <h1>{title}</h1>
    <p> {descriptions[idx][0]}</p>
    <p> {descriptions[idx][1]}</p>

    <Price oldprice={oldPrice[idx]} Newprice={NewPrice[idx]}></Price>
    </div>
  
    
    
    </>
  )
}

export default Product