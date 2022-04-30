import { Badge, Container, Card, Row, Col } from "react-bootstrap";
import UserActions from "./user-actions";

const DummyCard = ({ title, children, bigger, badge }) => (
  <Col sm={12} md={bigger ? 6 : 4} lg={bigger ? 6 : 3} className="mt-3">
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="text-center">
          {title}
          {badge && (
            <Badge variant="danger" className="float-right">
              {badge}
            </Badge>
          )}
        </Card.Title>
        {children}
      </Card.Body>
    </Card>
  </Col>
);

export default function MainDashboard() {
  // each name gets its own card with a dummy chart
  return (
    <Container>
      <Row>
        <DummyCard bigger title="Summary">
          <UserActions />
        </DummyCard>
      </Row>
    </Container>
  );
}
