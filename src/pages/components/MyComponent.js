import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <span>지금은 {name} 공부 중 입니다.</span>
      </div>
    );
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
