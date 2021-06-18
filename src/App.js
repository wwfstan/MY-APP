import React, { Component } from "react";
import "./App.css";
import TOC from "./Component/TOC";
import Content from "./Component/Content";
import Subject from "./Component/subject";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Subject: {
        title: "WEB",
        sub: "World wild web!",
      },
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'javascript is for interactive'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
        ></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content
          title="HTML"
          desc="HTML is HyperText Markup Language."
        ></Content>
      </div>
    );
  }
}

export default App;
