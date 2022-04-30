import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Modal,
} from "react-bootstrap";
import { useState } from "react";

const pharmacieLogos = [
  "https://t3.ftcdn.net/jpg/01/32/53/30/500_F_132533023_rpFVvh1IWtZFggJNWJ8VR7mwGkRu6lko.jpg",
  "https://image.freepik.com/free-vector/pharmacy-logo-design_1438-243.jpg",
  "https://www.logopik.com/wp-content/uploads/edd/2019/01/Pharmacy-Vector-Logo-Template.png",
  "http://cdn.onlinewebfonts.com/svg/img_427951.png",
];

const Pharmacies = ({ onClick }) => (
  <>
    <h4 className="text-center">Pharmacies</h4>
    <Row>
      {pharmacieLogos.map((logo) => (
        <Col xs={8} sm={6} lg={4} className="text-center mx-auto mt-3">
          <Button
            as={Image}
            src={logo}
            width="100%"
            height="100%"
            roundedCircle
            variant="outline-light"
            onClick={onClick}
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
        <h4>My Medicaments</h4>
      </Col>
    </Row>
    <Row>
      <Col className="align-self-center">
        <ListGroup variant="flush">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ListGroup.Item key={i}>
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
  const [showPharmacies, setShowPharmacies] = useState(false);
  const openModal = () => setShowPharmacies(true);
  const closeModal = () => setShowPharmacies(false);

  return (
    <Container className="mt-3">
      <Row>
        <Col className="mx-auto text-center">
          <h3>Medicaments</h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Pharmacies onClick={openModal} />
        </Col>
        <Col xs={12} md={6}>
          <MyMedicaments />
        </Col>
      </Row>

      <Modal show={showPharmacies} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>This is a demo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Users are able to directly contact recommended pharmacies (or other
            services) based on their profile and recent activity.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
