import { Chart, ArcElement } from "chart.js";
import { Badge, Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
Chart.register(ArcElement);

// generate random data for a two part doughnut chart every second
const DummyChart = () => {
  const [data, setData] = useState({
    labels: ["Red", "Blue"],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        labels: ["Red", "Blue"],
        datasets: [
          {
            data: [
              Math.floor(Math.random() * 100),
              Math.floor(Math.random() * 100),
            ],
            backgroundColor: ["#FF6384", "#36A2EB"],
        },
        ],
      };
      setData(newData);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Doughnut
      data={data}
      options={{
        maintainAspectRatio: true,
        legend: {
          display: false,
        },
      }}
    />
  );
};

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
