import React from "react";
// import NavBar from "../components/NavBar";

const HomePage = props => {
  return (
    <div>
      {/* <NavBar user={props.user} handleLogout={props.handleLogout} /> */}
      <h1>Wilkommen, {props.user.name}!</h1>
    </div>
  );
};

export default HomePage;
