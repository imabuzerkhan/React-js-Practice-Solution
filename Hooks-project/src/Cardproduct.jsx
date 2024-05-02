import { Price } from "./Img";

export function Cardproduct({tittle , Description , src , idx}){

  let oldPrice = [2000 , 4000 , 6000]
let NewPrice =[1500 , 2000 , 3000]
  return(
    <div style={{border: "1px solid black", width: "250px"}}>
      <img className="w-[240px] h-[170px]  "
      
      src={src} />
      <h1 className="text-[18px] font-serif my-2">{tittle}</h1>
      <p className="text-[12px] font-sans mb-4 text-center">{Description}</p>
<Price   oldprice ={oldPrice[idx]} newprice = {NewPrice[idx]}></Price>
    </div>
  )
}