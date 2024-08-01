import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/my-logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={""} />
              </a>
            </div>
            <div className="social-icon">
              <a href="">
                <img src={""} />
              </a>
            </div>
            <div className="social-icon">
              <a href="">
                <img src={""} />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
