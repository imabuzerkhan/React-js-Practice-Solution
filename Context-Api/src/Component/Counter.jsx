import { createContext, useState } from "react";

export const creatcontext = createContext(null);

export const counterProvider = (props) => {
  const [Count, Setcount] = useState(0);

  return <counterProvider value={{ Count }}>{props.children}</counterProvider>;
};
