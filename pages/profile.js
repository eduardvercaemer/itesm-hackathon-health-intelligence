import { Container, Image, Row, Col, Card } from "react-bootstrap";

// dummy profile picture component from internet
const ProfilePic = () => <Image src="https://picsum.photos/50" roundedCircle />;

// profile card component, shows name, date of birth, list of chronic diseases
// list of medications, and list of allergies
export default function Profile() {
  return (
    <Container>
      <Row className="mt-3">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>
                    <h1>John Doe</h1>
                  </Card.Title>
                  <Card.Text>
                    <h5>Date of Birth:</h5>
                    <p>January 1, 1970</p>
                  </Card.Text>
                  <Card.Text>
                    <h5>Chronic Diseases:</h5>
                    <p>
                      Diabetes, High Blood Pressure, Asthma, High Cholesterol,
                      Cancer
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <h5>Medications:</h5>
                    <p>Aspirin, Ibuprofen, Advil</p>
                  </Card.Text>
                  <Card.Text>
                    <h5>Allergies:</h5>
                    <p>Peanuts, Eggs, Milk</p>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
