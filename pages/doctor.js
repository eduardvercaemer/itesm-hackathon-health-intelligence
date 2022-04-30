import { ListGroup, Button } from "react-bootstrap";
// import a cellphone icon
import { FaPhone } from "react-icons/fa";

// a bootstrap list group with fields for doctor information
// each item has a title and content inline
const DoctorInfo = () => (
  <ListGroup variant="flush">
    <ListGroup.Item>
      <h5>Dr. John Doe</h5>
    </ListGroup.Item>
    <ListGroup.Item>
      <h5>Office: xxxxxxxxxxxx</h5>
    </ListGroup.Item>
    <ListGroup.Item>
      <h5 style={{ display: "inline" }}>Cellphone: aa bbb bbb ccc</h5>
      <Button variant="primary" className="float-right">
        <FaPhone />
      </Button>
    </ListGroup.Item>
    <ListGroup.Item>Citas</ListGroup.Item>
  </ListGroup>
);

export default function Doctor() {
  return <DoctorInfo />;
}
