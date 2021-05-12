import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount = () => {
    return this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <span> 카운트 : {this.state.count} </span>
        <button onClick={this.increaseCount.bind(this)}>+1 추가</button>
      </div>
    );
  }
}
