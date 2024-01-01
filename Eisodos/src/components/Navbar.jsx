import React, { useState } from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    //creating a navbar with two sections.
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} />
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
        <Link to={"/History"}>Login</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
