import { Container, Row, Col, Card, Badge } from "react-bootstrap";

// create simple post using bootstrap cards
// the header contains a badge right aligned if badgeText is provided
const Post = ({ header, title, content, badgeText }) => (
  <Card>
    <Card.Header>
      <Row>
        <Col>{header}</Col>
        {badgeText && (
          <Col className="text-right">
            <Badge variant="primary">{badgeText}</Badge>
          </Col>
        )}
      </Row>
    </Card.Header>
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

  // add a badge to the first post
  posts[0].badgeText = "People with diabetes should read";

  return (
    <Container>
      <Row className="my-3">
        <Col md={6} className="mx-auto text-center">
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
