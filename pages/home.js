import { Container, Row, Col } from "react-bootstrap";
import MainDashboard from "../components/main-dashboard";

export default function Home() {
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <MainDashboard />
        </Col>
      </Row>
    </Container>
  );
}
