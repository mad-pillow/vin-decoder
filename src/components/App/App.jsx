import "./app.scss";
import React, { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        {/* <Variables /> */}
      </div>
    );
  }  
}

export default App;
