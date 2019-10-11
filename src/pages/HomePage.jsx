import React from "react";
// import NavBar from "../components/NavBar";

const HomePage = props => {
  let welcome = props.user ?
  <h1>Wilkommen, {props.user.name}!</h1> :
  <h1>Wilkommen</h1>
  return (
    <div>
      {welcome}
    </div>
  );
};

export default HomePage;
