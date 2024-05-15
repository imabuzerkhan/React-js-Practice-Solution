import { useState } from "react";

export function BasicForm() {
  //! let [fullname , Setfullname] = useState("")
  //! let [username , SetUsername] = useState("")

  let [formdata, Setformdata] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  let calling = (event) => {
    Setformdata((currentdata) => {
      return { ...currentdata, [event.target.name]: e.target.value };
    });
  };

  function prevent(e) {
    e.preventDefault();
// Setformdata({
//   fullname: "",
//   username : "",
//   password : ""
// })
    console.log(formdata);
  }

  return (
    <>
      <form onSubmit={prevent}>
        <label htmlFor="Fullname">Full name: </label>
        <input
          type="text"
          placeholder="Enter ypur name first"
          value={FormData.fullname}
          name="fullname"
          onChange={calling}
        />{" "}
        <br />
        <br />
        <label htmlFor="Username">Username: </label>
        <input
          type="text"
          placeholder="Enter your username"
          value={FormData.username}
          name="username"
          onChange={calling}
        />{" "}
        <br /> <br />
        <label htmlFor="Username">Password: </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={FormData.password}
          name="password"
          onChange={calling}
        />{" "}
        <br /> <br />
        <button>Summit</button>
      </form>
    </>
  );
}
