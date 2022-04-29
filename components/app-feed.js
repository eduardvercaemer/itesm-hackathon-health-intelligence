import { Container, Row, Col, Card } from "react-bootstrap";

// create simple post using bootstrap cards
const Post = ({ header, title, content }) => (
  <Card>
    <Card.Header>{header}</Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{content}</Card.Text>
    </Card.Body>
  </Card>
);

export default function AppFeed() {
  // 7 dummy post data with header, title, and content
  const posts = Array.from({ length: 7 }, (_, i) => ({
    header: `Header ${i + 1}`,
    title: `Title ${i + 1}`,
    content: `Content ${i + 1}`,
  }));

  return (
    <Container>
      <Row className="my-3">
        <Col md={6} className="mx-auto">
          <h1>Your Health Feed</h1>
        </Col>
      </Row>
      {posts.map((post) => (
        <Row key={post.header} className="my-3">
          <Col md={12} className="mx-auto">
            <Post {...post} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}
