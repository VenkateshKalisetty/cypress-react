import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{marginTop: "18%"}}>
          <Col md="auto"><h1>Redux Example</h1></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">(Counter and Users List)</Col>
        </Row>
      </Container>
    )
  }
}