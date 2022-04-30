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
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

const Notification = ({ index, title, content, variant }) => (
  <Col xs={12}>
    <Alert className="w-100 mt-3" variant={variant}>
      <Alert.Heading>
        <Container>
          <Row>
            <Col xs={12} md={8} className="my-auto">
              <h5 className="my-auto">{title}</h5>
            </Col>
            <Col xs={12} md={4} className="text-right">
              <Accordion.Toggle
                as={Button}
                variant={`outline-light`}
                eventKey={index}
              >
                open
              </Accordion.Toggle>
            </Col>
          </Row>
        </Container>
      </Alert.Heading>
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
  const notificationsGood = [
    {
      title: "Stable blood sugar",
      content:
        "Since you began taking X medicament, your blood sugar has been more stable.",
      variant: "success",
    },
    {
      title: "Good weight",
      content:
        "Your weigth has been adequate since you began doing X amount of exercise",
      variant: "success",
    },
  ];
  const notificationsBad = [
    {
      title: "High blood pressure",
      content: (
        <>
          <p>
            Your high blood pressure can be related to your recent decrease in
            water intake.
          </p>
          <hr />
          <p>
            If this continues for the next 2 days, you should contact your
            doctor
          </p>
          <Container>
            <Row>
              <Col>
                <Link passHref href="/doctor">
                  <Button
                    className="float-right"
                    size="sm"
                    variant="outline-light"
                  >
                    Doctor
                    <AiOutlineRight />
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </>
      ),
      variant: "danger",
    },
  ];

  // a divider and header for notification section
  const Divider = ({ title }) => (
    <>
      <hr />
      <h3 className="text-center">{title}</h3>
    </>
  );

  // each name gets its own card with a dummy chart
  return (
    <Container>
      <h3 className="text-center">Your Tasks</h3>
      <Row>
        <Col xs={12} md={8} className="mt-3 mx-auto">
          <Card className="h-100">
            <Card.Body>
              <UserActions />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Divider title="Resources" />

      <Row>
        <Col xs={12} md={6} className="mt-3 mx-auto">
          <Link passHref href="/health">
            <Button variant="outline-primary" className="w-100">
              Health
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={6} className="mt-3 mx-auto">
          <Link passHref href="/medicaments">
            <Button variant="outline-primary" className="w-100">
              Medicaments
            </Button>
          </Link>
        </Col>
      </Row>

      <Divider title="Notifications" />

      <Accordion>
        <Row>
          <Col xs={12} md={6} className="mx-auto">
            <Row>
              {notificationsBad.map((notification, index) => (
                <Notification
                  index={`${index}`}
                  key={notification.title}
                  {...notification}
                />
              ))}
            </Row>
          </Col>
          <Col xs={12} md={6} className="mx-auto">
            <Row>
              {notificationsGood.map((notification, index) => (
                <Notification
                  index={`${index + notificationsBad.length}`}
                  key={notification.title}
                  {...notification}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Accordion>
    </Container>
  );
}
