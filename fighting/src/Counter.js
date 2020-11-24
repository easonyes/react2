import React, { Component } from "react";
class Counter extends Component {
  // React 新的前端思维方式 •！• 5
  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      count: 0,
      name: props.name,
    };
  }
  onClickButton() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.onClickButton}>Click Me</button>
        <div>
          {this.state.name} Count : {this.state.count}
        </div>
      </div>
    );
  }
}

Counter.defaultProps = {
  name: "xxx",
};

export default Counter;
