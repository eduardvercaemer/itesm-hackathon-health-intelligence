import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Link from "next/link";

// component centered in page with a form for username and password
const LogIn = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={6} className="mx-auto">
          <h1 className="text-center">Log In</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Link href="/home">
              <Button variant="primary">Log In</Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default function Index() {
  return <LogIn />;
}
