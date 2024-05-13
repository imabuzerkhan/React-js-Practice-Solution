import { useState } from "react"
import { getticket , sum } from "./data"
import Ticket from "./Ticket";

export default function Lottery({ n, winning }) {
  const [ticket, setTicket] = useState(getticket(n));

  let isWinning = sum(ticket) === winning;

  function LotteryBtn() {
    setTicket(getticket(n));
  }

  return (
    <>
      <h1>Lottery game</h1>
      <div className="lottery" style={{ border: "1px solid white" }}>
        <Ticket ticket={ticket} />
      </div>
      <div>
        <br />
        <br />
        <button onClick={LotteryBtn}>Click and Get</button>
        <h2>{isWinning && "Congratulations! You are a winner."}</h2>
      </div>
    </>
  );
}
