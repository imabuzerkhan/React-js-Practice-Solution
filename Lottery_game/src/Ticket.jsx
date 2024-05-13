import Ticketnum from "./Ticketnum";
function Ticket({ticket}){
  return(
    <>  
     { ticket.map((num , idx)=> (
    <Ticketnum num={num} key={idx}/>
   ))}
 
    </>
     )}
  
export default Ticket;