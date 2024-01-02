import React, { useState } from "react";
import EISODOS from "../assets/EISODOS.png"
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import search from "../assets/search.png"

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    //creating a navbar with two sections.
   <div>
   <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={EISODOS} />
        <div className="hiddenLinks">
          <Link to={"/"}>Homepage</Link>
          <Link to={"/Search"}>Search</Link>
          <Link to={"/Event"}>Events</Link>
          <Link to={"/Signup"}>Signup</Link>
          <Link to={"/History"}>History</Link>
          <Link to={"/History"}>Login</Link>
        </div>
      </div>
      {/* the other side of the navbar that will contain our links */}
      <div className="rightSide">
        <Link to={"/"}>Homepage</Link>
        <Link to={"/Search"}>Search</Link>
        <Link to={"/Event"}>Events</Link>
        <Link to={"/Signup"}>Signup</Link>
        <Link to={"/History"}>History</Link>
      
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      <button className="loginbtn"><Link to={"/History"}>Login</Link></button>
    </div>
    <div className="searchBar">
        <div className="SearchEvents">
          <h3>Search Events</h3>
          <input type="text" name="name" placeholder="Butterfly Gathering"></input>
        </div>
        <div className="Location">
        <p>Location</p>
          <input type="text" name="name" placeholder="Butterfly Gathering"></input>
        </div>
        <div className="Date">
        <p>Date</p>
          <input type="date" name="name"></input>
        </div>
        <div className="Search">
          <img src={search}></img>
        </div>
        </div>
    </div>
  );
}

export default Navbar;
