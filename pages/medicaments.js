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

const pillLogo =
  "https://www.logolynx.com/images/logolynx/50/5045699be4ab08211a17c264a35b1c67.png";

const Pharmacies = ({ onClick }) => (
  <>
    <h4 className="text-center">Pharmacies</h4>
    <Row>
      {pharmacieLogos.map((logo) => (
        <Col xs={8} sm={6} lg={4} className="text-center mx-auto mt-3" key={logo}>
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

const medicamentNames = ["Aspirin", "Paracetamol", "Ibuprofen"];

// bootstrap list group with medicament names and button to buy
const MyMedicaments = ({ onBuy }) => (
  <Container>
    <Row>
      <Col className="mx-auto text-center">
        <h4>My Medicaments</h4>
      </Col>
    </Row>
    <Row>
      <Col className="align-self-center">
        <ListGroup variant="flush">
          {medicamentNames.map((medicament) => (
            <ListGroup.Item key={medicament}>
              <Container>
                <Row>
                  <Col xs={10} className="align-self-center">
                    <h5 className="m-0">{medicament}</h5>
                  </Col>
                  <Col xs={2}>
                    <Button
                      onClick={() => onBuy({ medicament })}
                      variant="outline-primary"
                    >
                      Buy
                    </Button>{" "}
                  </Col>
                </Row>
              </Container>
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

  const [med, setMed] = useState("");
  const [showMedBuy, setShowMedBuy] = useState(false);
  const openMedBuy = ({ medicament }) => {
    setMed(medicament);
    setShowMedBuy(true);
  };
  const closeMedBuy = () => setShowMedBuy(false);

  return (
    <Container className="mt-3">
      <Row>
        <Col className="mx-auto text-center">
          <h3>Medicaments</h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} className="mt-3">
          <Pharmacies onClick={openModal} />
        </Col>
        <Col xs={12} md={6} className="mt-3">
          <MyMedicaments onBuy={openMedBuy} />
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

      <Modal show={showMedBuy} onHide={closeMedBuy}>
        <Modal.Header closeButton>
          <Modal.Title>You are buying {med}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Users can easily buy commonly used medicaments or be reminded when
            they should buy them.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeMedBuy}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
