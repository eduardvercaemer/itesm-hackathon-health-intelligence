import { ListGroup, Badge, ListGroupItem } from "react-bootstrap";

// item with text, optional badge, and checkbox
const SuggestedAction = ({ text, badge }) => (
  <ListGroup.Item>
    <input type="checkbox" /> {text}
    {badge && (
      <Badge pill variant="primary" className="float-right">
        {badge}
      </Badge>
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
      <ListGroup variant="flush">
        <SuggestedAction text="Eat a healthy meal" />
        <SuggestedAction text="Drink a glass of water" />
        <SuggestedAction text="Take a walk" />
        <SuggestedAction text="Exercise" badge="!!!" />
      </ListGroup>
      <ListGroup variant="flush">
        <PastAction text="Eat a healthy meal" />
      </ListGroup>
    </>
  );
}
