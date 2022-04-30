import {
  Badge,
  Button,
  Container,
  Card,
  Row,
  Col,
  Alert,
  Accordion,
} from "react-bootstrap";
import UserActions from "./user-actions";

// the content is initialy hidden and shown with a fade in animation using
// an accordion
const Notification = ({ index, title, content, variant }) => (
  <Col xs={12} md={6} className="my-auto">
    <Alert className="h-100 w-100 mt-3" variant={variant}>
      <Alert.Heading>
        {title}
        {' '}
        <Accordion.Toggle
          as={Button}
          variant="light"
          eventKey={index}
          icon="fa-solid fa-arrow-right"
        >
          +
        </Accordion.Toggle>
      </Alert.Heading>
      <hr />
      <Accordion.Collapse eventKey={index}>
        <p>{content}</p>
      </Accordion.Collapse>
    </Alert>
  </Col>
);

export default function MainDashboard() {
  const notifications = [
    {
      title: "Stable blood sugar",
      content:
        "Since you began taking X medicament, your blood sugar has been more stable.",
      variant: "success",
    },
    {
      title: "High blood pressure",
      content:
        "Your high blood pressure can be related to your lower water intake.",
      variant: "danger",
    },
  ];

  // each name gets its own card with a dummy chart
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="mt-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-center">Summary</Card.Title>
              <UserActions />
            </Card.Body>
          </Card>
        </Col>

        <Accordion>
          <Row>
            {notifications.map((notification, index) => (
              <Notification
                index={`${index}`}
                key={notification.title}
                {...notification}
              />
            ))}
          </Row>
        </Accordion>
      </Row>
    </Container>
  );
}
