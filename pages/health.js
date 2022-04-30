import {
  Button,
  Container,
  Row,
  Col,
  Badge,
  Card,
  Alert,
} from "react-bootstrap";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
Chart.register(ArcElement);

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

const DummyCard = ({ title, children, bigger, badge }) => (
  <Col xs={8} md={bigger ? 6 : 4} lg={bigger ? 6 : 3} className="mt-3 mx-auto">
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

export default function Health() {
  return (
    <Container>
      <Row>
        {[
          { name: "Pulse" },
          { name: "Pressure", badge: "!!!" },
          { name: "Sugar" },
        ].map(({ name, badge }) => (
          <DummyCard key={name} title={name} badge={badge}>
            <DummyChart />
          </DummyCard>
        ))}

        <Col sm={12} md={4} lg={3} className="text-center my-auto mx-auto">
          <Button variant="secondary" className="mt-3 mb-5">+</Button>
        </Col>
      </Row>
    </Container>
  );
}
