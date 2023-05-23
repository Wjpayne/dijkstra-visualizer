import React, { Component } from "react";
import "./board.css";

export default class NodeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="node-container">{this.props.children}</div>;
  }
}