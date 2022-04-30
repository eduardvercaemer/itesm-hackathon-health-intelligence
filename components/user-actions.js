import { Button, ListGroup, Badge, Accordion, Alert } from "react-bootstrap";

// item with text, optional badge, and checkbox
const SuggestedAction = ({ text, badge, index, description }) => (
  <ListGroup.Item>
    <input type="checkbox" /> {text}
    {badge && (
      <>
        {" "}
        <Badge pill variant="primary">
          {badge}
        </Badge>
      </>
    )}
    {description && (
      <>
        <Accordion.Toggle
          className="float-right"
          as={Button}
          variant="link"
          eventKey={index}
        >
          Details
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index}>
          <Alert className="mt-3" variant="info">{description}</Alert>
        </Accordion.Collapse>
      </>
    )}
  </ListGroup.Item>
);

// a list item that is faded and with not checkbox
const PastAction = ({ text }) => (
  <ListGroup.Item className="text-muted">{text}</ListGroup.Item>
);

// show a list of past actions and suggested actions, that can be checked
// as completed to move to the history
export default function UserActions() {
  return (
    <>
      <Accordion>
        <ListGroup variant="flush">
          <SuggestedAction
            text="Eat a healthy meal"
            index="0"
            description="This is likely to improve sugar levels in people with similar conditions"
            badge="1"
          />
          <SuggestedAction text="Drink a glass of water" index="1" />
          <SuggestedAction text="Take a walk" index="2" />
          <SuggestedAction text="Exercise" badge="!!!" index="3" />
        </ListGroup>
      </Accordion>
      <ListGroup variant="flush">
        <PastAction text="Eat a healthy meal" />
      </ListGroup>
    </>
  );
}
