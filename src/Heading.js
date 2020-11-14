import React, { Component } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";

export class Heading extends Component {
  
  

  render() {
    return (
      <div>
        <h1>Heading</h1>
        <h1 style={{ color: "blue" }}>{this.props.headingTitleName}</h1>
      </div>
    );
  }
}
