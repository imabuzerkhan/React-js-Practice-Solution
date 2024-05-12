function getticket(n){
  let arr = new Array(n);
  for(let i=0; i<n; i++){
    arr[i] = Math.floor(Math.random()*10)
}
  return arr;
}


function Setticket(arr){
 return arr.reduce((sum , curr)=> sum + curr , 0)
}
export{getticket , Setticket};