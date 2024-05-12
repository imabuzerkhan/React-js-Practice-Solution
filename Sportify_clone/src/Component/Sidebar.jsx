import {assets} from "../assets/assets"

function Sidebar(){
return(
  <div className="w-[25%] p-2  h-full flex-col text-white hidden lg:flex">
    <div className="bg-[#121212]  h-[25%] rounded flex flex-col justify-around">

    <div className="flex items-center gap-3 pl-8 cursor-pointer ">
<img className="w-4" src={assets.home_icon} alt="" />
<p className="font-bold">Home</p>
    </div>
    <div className="flex items-center gap-3 pl-8 cursor-pointer ">
<img className="w-4" src={assets.search_icon} alt="" />
<p className="font-bold">Search</p>
    </div>
    </div>

<div className="bg-[#121212] rounded h-[85%] mt-2">
  <div className="p-4 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <img className="w-6" src={assets.stack_icon} alt="" />
      <p className="font-semibold">Your Libarary</p>
    </div>
    <div className="flex items-center gap-3">
      <img  className="w-4 cursor-pointer"  src={assets.arrow_icon} alt="" />
      <img  className="w-4 cursor-pointer" src={assets.plus_icon} alt="" />
    </div>
  </div>
<div className="p-4 bg-[#242424] m-2 rounded font-semibold items-start justify-start flex flex-col gap-1 pl-4">
  <h1>Craete Your first Playlist</h1>
  <p className="font-light">Its easy we will help you</p>
  <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 ">Create playlist</button>
</div>
<div className="p-4 bg-[#242424] m-2 rounded font-semibold items-start justify-start flex flex-col gap-1 pl-4 mt-2">
  <h1>Let's find some podscast to follow</h1>
  <p className="font-light">We'll keep you updated on new episode</p>
  <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 ">Browse Podcast</button>
</div>



</div>



  </div>
)
}

export default Sidebar