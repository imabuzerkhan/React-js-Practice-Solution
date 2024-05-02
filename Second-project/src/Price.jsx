function Price({oldprice , Newprice}){

 let oldStyles = {
    textDecorationLine: "line-through",
    marginRight:"20px",
  }
  let newStyles = {
    fontWeight: "bold"
  }
  let Whole = {
    backgroundColor:"Brown",
    color: "white",
  }
  return(
    <div style={Whole}>
    <span style={oldStyles}>{oldprice}</span>
    <span style={newStyles}>{Newprice}</span>
    </div>
  )
}
export default Price