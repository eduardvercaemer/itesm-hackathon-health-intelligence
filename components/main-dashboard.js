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
// import right arrow from react icons
import { AiOutlineRight } from "react-icons/ai";

const Notification = ({ index, title, content, variant }) => (
  <Col xs={12} md={6} className="my-auto">
    <Alert className="h-100 w-100 mt-3" variant={variant}>
      <Accordion.Toggle as={Alert.Heading} eventKey={index}>
        <>
          {title}
          <AiOutlineRight />
        </>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <>
          <hr />
          <p>{content}</p>
        </>
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

  // a divider and header for notification section
  const divider = (
    <>
      <hr />
      <h3 className="text-center">Notifications</h3>
    </>
  );

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
      </Row>

      {divider}

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
    </Container>
  );
}
