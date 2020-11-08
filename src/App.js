import React, { Component } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      myListValues: ["text 1", "text 2"],
      value: "",
    };
  }

  onInputChanged = (value) => {
    this.setState({ value: value.target.value });
  };

  onButtonCLicked = () => {
    const values = [...this.state.myListValues, this.state.value];

    this.setState({
      myListValues: values,
      value: "",
    });
  };

  render() {
    return (
      <Container>
        <div style={{ marginTop: 200 }}></div>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <h1
              style={{
                marginTop: 20,
                marginBottom: 20,
                textAlign: "center",
                color: "white",
              }}
            >
              My app
            </h1>
            <div style={{ justifyContent: "center" }}>
              <Input
                onChange={(e) => this.onInputChanged(e)}
                style={{ textAlign: "center" }}
                placeholder="Add texted here"
                value={this.state.value}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <Button
                onClick={() => this.onButtonCLicked()}
                color="primary"
                style={{ marginTop: 20, marginBottom: 20}}
              >
                Add
              </Button>
            </div>

            {this.state.myListValues.map((value) => (
              <div style= {{background: "white", color: "blue", textAlign: "center", marginBottom: 10, borderRadius: 50}}>{value}</div>
            ))}
            <Row></Row>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    );
  }
}
