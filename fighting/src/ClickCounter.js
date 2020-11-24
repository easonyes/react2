import React, { Component } from "react";
import Counter from "./Counter";
class ControlPanel extends Component {
  // React 新的前端思维方式 •！• 5
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  componentWillMount() {
    console.log("enter componentWillMount");
  }

  componentDidMount() {
    console.log("enter componentDidMount");
  }

  render() {
    const counterStyle = { margin: "16px" };
    return (
      <div style={counterStyle}>
        <Counter name="first" />
        <Counter name="second" />
        <Counter name="third" />
        <div> total: {this.state.total} </div>
      </div>
    );
  }
}
export default ControlPanel;
