import contactImg from "../assets/img/contact-img.svg";
import { Col, Container, Row } from "react-bootstrap";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form>
              <Row>
                <Col md={6} className="px-1">
                  <input type="text" placeholder="First Name" />
                </Col>
                <Col md={6} className="px-1">
                  <input type="text" placeholder="Last Name" />
                </Col>
                <Col md={6} className="px-1">
                  <input type="email" placeholder="Email" />
                </Col>
                <Col md={6} className="px-1">
                  <input type="tel" placeholder="Phone Number" />
                </Col>
                <Col>
                  <textarea rows={6} placeholder="Message" />
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
