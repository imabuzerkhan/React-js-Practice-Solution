import { useState, useEffect } from "react";
import './Jokes.css'

function Newjokes() {
  let [joke, setJoke] = useState({});
  const url =
    "https://hindi-jokes-api.onrender.com/jokes/2?api_key=ddcdea10a1c6864a7036c2667159";

  async function getNewJokes() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setJoke({ jokeContent: data.data[0].jokeContent });
  }
  useEffect(() => {
    async function getjoke() {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setJoke({ jokeContent: data.data[0].jokeContent });
    }
    getjoke();
  }, []);
 
  return (
    <div className="jokes-container">
      <h1>New jokes</h1>
      <h4>{joke.jokeContent}</h4>
      <button onClick={getNewJokes}>Get jokes</button>
    </div>
  );
}

export default Newjokes;
