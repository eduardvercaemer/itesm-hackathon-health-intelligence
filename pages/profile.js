import { Container, Image, Row, Col, Card } from "react-bootstrap";

// dummy profile picture component from internet
const ProfilePic = () => <Image src="https://picsum.photos/50" roundedCircle />;

// in card header, float profile pic and name to the left
export default function Profile() {
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Header>
              <Row>
                <Col className="float-left">
                  <ProfilePic />
                </Col>
                <Col className="float-left">
                  <h1>John Doe</h1>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
