import { Chart, ArcElement } from "chart.js";
import { Badge, Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement);

const DummyChart = () => (
  <Doughnut
    data={{
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    }}
  />
);

// center title text, right aligned badge
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

// the summary is a list group with items and pill badges right aligned
const Summary = () => (
  <ListGroup variant="flush">
    <ListGroup.Item>
      You should eat less
      <Badge pill variant="danger" className="float-right">
        call your doctor
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item>You should eat more</ListGroup.Item>
  </ListGroup>
);

export default function MainDashboard() {
  // each name gets its own card with a dummy chart
  return (
    <Container>
      <Row>
        <DummyCard bigger title="Summary">
          <Summary />
        </DummyCard>

        {[
          { name: "Pulse" },
          { name: "Pressure", badge: "!!!" },
          { name: "Sugar" },
        ].map(({ name, badge }) => (
          <DummyCard key={name} title={name} badge={badge}>
            <DummyChart />
          </DummyCard>
        ))}
      </Row>
    </Container>
  );
}
