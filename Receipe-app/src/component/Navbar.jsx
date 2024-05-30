import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./Country.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/Searchitem/${input}`);
  };

  return (
    <>
      <div className="heading">
        <div className="nav">
          <div className="left">
            <Link to="/" className="Link">
              <h1>Recipe App</h1>
            </Link>
          </div>

          <div className="search">
            <form onSubmit={handleFormSubmit}>
              <input
                className="bar"
                type="text"
                onChange={handleInputChange}
                required
              />
              <button
                style={{
                  background: "lightcoral",
                  color: "white",
                  fontSize: "20px",
                  padding: "5.3px 25px",
                  border: "none",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={handleFormSubmit}
              >
                Search
              </button>
            </form>
          </div>

          <div className="right">
            <Link to="/Country/Indian" className="Link">
              <div>India</div>
            </Link>
            <Link to="/Country/Dutch" className="Link">
              <div>Dutch</div>
            </Link>
            <Link to="/Country/American" className="Link">
              <div>America</div>
            </Link>
            <Link to="/Country/Chinese" className="Link">
              <div>China</div>
            </Link>
            <Link to="/Country/Thai" className="Link">
              <div>Thai</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
