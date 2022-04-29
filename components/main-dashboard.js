import { Chart, ArcElement } from "chart.js";
import { Container, Card, Row, Col } from "react-bootstrap";
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

// center title text
const DummyCard = ({ title, children }) => (
  <Col sm={12} md={4} lg={3} className="mt-3">
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  </Col>
);

const Summary = () => (
  <p>summary</p>
);

export default function MainDashboard() {
  // each name gets its own card with a dummy chart
  return (
    <Container>
      <Row>
        <DummyCard title="Summary">
          <Summary />
        </DummyCard>

        {["Pulse", "Pressure", "Sugar"].map((name) => (
          <DummyCard key={name} title={name}>
            <DummyChart />
          </DummyCard>
        ))}
      </Row>
    </Container>
  );
}
