import { ListGroup, Button, Container, Col, Row } from "react-bootstrap";
import Calendar from "react-calendar";
// import a cellphone icon
import { FaPhone } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";

// a bootstrap list group with fields for doctor information
// each item has a title and content inline
const DoctorInfo = () => (
  <>
    <Container className="mt-3">
      <Row>
        <Col className="text-center mx-auto">
          <h3>Doctor</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} className="mx-auto">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5>Dr. John Doe</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Office: xxxxxxxxxxxx</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5 style={{ display: "inline" }}>Cellphone: aa bbb bbb ccc</h5>
              <Button variant="primary" className="float-right">
                <FaPhone />
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h3>Availability</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} className="mx-auto">
          <Calendar className="mx-auto" />
        </Col>
      </Row>
    </Container>
  </>
);

export default function Doctor() {
  return <DoctorInfo />;
}
