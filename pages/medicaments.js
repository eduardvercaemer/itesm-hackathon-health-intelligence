import { Container, Row, Col, Image, ListGroup, Button } from "react-bootstrap";

// simple component with two rows of 6 thumbnail images from internet
const Pharmacies = () => (
  <>
    <h5 className="text-center">Pharmacies</h5>
    <Row>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Col key={i} xs={6} md={4} lg={3} className="my-3">
          <Image
            src={`https://picsum.photos/id/${i}/200/200`}
            roundedCircle
            className="img-fluid"
          />
        </Col>
      ))}
    </Row>
  </>
);

// bootstrap list group with medicament names and button to buy
const MyMedicaments = () => (
  <Container>
    <Row>
      <Col className="mx-auto text-center">
        <h3>My Medicaments</h3>
      </Col>
    </Row>
    <Row>
      <Col className="align-self-center">
        <ListGroup variant="flush">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ListGroup.Item>
              <Row>
                <Col xs={8}>
                  <h5>Medicament {i}</h5>
                </Col>
                <Col xs={4} className="text-right">
                  <Button variant="primary">Buy</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

export default function Medicaments() {
  return (
    <Container className="mt-3">
      <Row>
        <Col className="mx-auto text-center">
          <h3>Medicaments</h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Pharmacies />
        </Col>
        <Col xs={12} md={6}>
          <MyMedicaments />
        </Col>
      </Row>
    </Container>
  );
}
