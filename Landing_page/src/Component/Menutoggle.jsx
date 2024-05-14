export function Menutoggle({menulist}){
  return(
    <div className="absolute left-0 min-h-full mt-7 w-full bg-black ">
{menulist.map((item , idx)=>(
  <div key={idx}>
<h2 className="text-white flex justify-center mb-6 text-[22px]  mt-10   ">{item.title}</h2>
  </div>
))}
    </div>
  )
}