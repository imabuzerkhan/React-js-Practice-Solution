import Button from "./Component/Button";
import { creatcontext } from "./Component/Counter";

import { useContext } from "react";
function App() {

const counterState = useContext(creatcontext);
console.log(counterState)
  return (
    <>
      <div>
        <h1>Increment by 0</h1>
        <Button></Button> <br />
        <Button></Button> <br />
        <Button></Button>
        <br />
        <Button></Button>
      </div>
    </>
  );
}

export default App;
