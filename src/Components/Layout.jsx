import React from "react";
import Appnavbar from "./Appnavbar";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Appnavbar />
      <Container>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>{children}</Col>
        </Row>
      <Footer/>
      </Container>
    </div>
  );
};

export default Layout;
