import { ListGroup, Button, Container, Col, Row, Image } from "react-bootstrap";
import Calendar from "react-calendar";
// import a maps icon
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";

// a bootstrap list group with fields for doctor information
// each item has a title and content inline
const DoctorInfo = () => (
  <>
    <Container className="mt-3">
      <Row>
        <Col xs={12} md={8} className="mx-auto">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Container>
                <Row>
                  <Col xs={12} md={6} className="text-center">
                    <Image src="https://picsum.photos/200/200" roundedCircle />
                  </Col>
                  <Col xs={12} md={6} className="align-self-center text-center">
                    <h3 className="m-0">Dr. John Doe</h3>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5 style={{ display: "inline" }}>Office: </h5>
              Calle Alta Tención Colonia Los Pinos
              <Button variant="link" className="float-right">
                <FaMapMarkerAlt />
              </Button>
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
