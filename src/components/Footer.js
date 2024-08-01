import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/my-logo.png";
import socialIcon1 from "../assets/img/linkedin.png";
import socialIcon2 from "../assets/img/instagram.png";
import socialIcon3 from "../assets/img/github.png";

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
              <a href="https://www.linkedin.com/in/prayatna-rajkarnikar-b797a52b6/">
                <img src={socialIcon1} />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.instagram.com/rajkarnikar._.prayatna/">
                <img src={socialIcon2} />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://github.com/Prayatna-Rajkarnikar">
                <img src={socialIcon3} />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
