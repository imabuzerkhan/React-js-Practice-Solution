import Product from "./Product"
import Msgbox from "./Msgbox"



function ProductTab(){
  return(
    <>

<Product title="Tv" price={ 30000}></Product>
<Product title="byee" price={10000} subtitle="why are you "></Product>
<Product title="Abuzer" price={20000} subtitle="why are you coming here"></Product>
<Msgbox username = "hello mr abuzer bhai " textcolor = "blue" ></Msgbox>
    </>
  )
}

export default ProductTab