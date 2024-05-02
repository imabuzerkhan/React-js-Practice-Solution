
export function Price({oldprice , newprice }){
  return(

    <div className="bg-fuchsia-500 text-black py-3" >
      <span className="line-through mr-4">{oldprice}</span>
      <span className="font-bold">{newprice}</span>
    </div>
  )
 }
