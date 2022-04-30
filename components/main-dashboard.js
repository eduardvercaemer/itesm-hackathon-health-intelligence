import { Badge, Container, Card, Row, Col, Alert } from "react-bootstrap";
import UserActions from "./user-actions";

const Notification = ({ title, content, variant }) => (
  <Col xs={12} md={6} className="my-auto">
    <Alert className="h-100 mt-3" variant={variant}>
      <Alert.Heading>{title}</Alert.Heading>
      <hr />
      <p>{content}</p>
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

        {notifications.map((notification) => (
          <Notification key={notification.title} {...notification} />
        ))}
      </Row>
    </Container>
  );
}
