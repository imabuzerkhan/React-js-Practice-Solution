import { useState } from "react";
import { HiMenuAlt3 , HiOutlineX } from "react-icons/hi";
import { Menutoggle } from "./Menutoggle";
export function Header() {
  const [toggle , Settoggle] = useState(false);

  const Toggle = () =>{
    Settoggle(!toggle);
  }
  const menulist = [{
      idx: 1,
      title: "Home"
    },
    {
      idx: 1,
      title: "Contact"
    },
    {
      idx: 1,
      title: "Skill"
    },
    {
      idx: 1,
      title: "Service"
    },
    {
      idx: 1,
      title: "Portfolio"
    }
  ];

  return (
    <>
      <header>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white text-[28px] font-bold">Abuzer <span className="text-pink-700">Khan</span></h2>
          </div>
          <div className="hidden md:flex items-center gap-6 font-sans">
            {menulist.map((item, idx) => ( // Added the return statement here
              <div key={idx}>   
                <h2 className="text-white text-[20px] hover:border-[1px]  border-white hover:rounded-md hover:px-2 hover:transition-[4s] ">{item.title}</h2>
              </div>
            ))}
             <h2 className="text-white text-[20px] hover:border-[1px]  border-white hover:rounded-md hover:px-2 hover:transition-[4s] hover:bg-red-500  ">Hire me</h2>
          </div>
          <div className="md:hidden">
         {!toggle? < HiMenuAlt3  onClick={Toggle} className="text-white text-[22px]" />
         : <HiOutlineX onClick={Toggle} className="text-white text-[22px]"/>}
        {toggle? <Menutoggle menulist={menulist}></Menutoggle>: null}
          </div>
        </div>
      </header>
    </>
  );
}
