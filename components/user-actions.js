import { Button, ListGroup, Badge, Accordion, Alert } from "react-bootstrap";

// item with text, optional badge, and checkbox
const SuggestedAction = ({ text, badge, index, description, badgeVariant }) => (
  <ListGroup.Item>
    <input type="checkbox" /> {text}
    {badge && (
      <>
        {" "}
        <Badge pill variant={badgeVariant ?? "primary"}>
          {badge}
        </Badge>
      </>
    )}
    {description && (
      <>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={index}
        >
          Details
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index}>
          <Alert className="mt-3" variant="info">
            {description}
          </Alert>
        </Accordion.Collapse>
      </>
    )}
  </ListGroup.Item>
);

// a list item that is faded and with not checkbox
const PastAction = ({ text }) => (
  <ListGroup.Item className="text-muted">{text}</ListGroup.Item>
);

const UserActions_ = ({ suggestions, history }) => (
  <>
    <Accordion>
      <ListGroup variant="flush">
        {suggestions.map((suggestion, index) => (
          <SuggestedAction
            key={index}
            index={`${index}`}
            text={suggestion.text}
            badge={suggestion.badge}
            badgeVariant={suggestion.badgeVariant}
            description={suggestion.description}
          />
        ))}
      </ListGroup>
    </Accordion>
    <ListGroup variant="flush">
      {history.map((action, index) => (
        <PastAction key={index} text={action.text} />
      ))}
    </ListGroup>
  </>
);

// show a list of past actions and suggested actions, that can be checked
// as completed to move to the history
export default function UserActions() {
  const suggestions = [
    {
      text: "High risk of heart attack",
      badge: "call doctor immediately",
      badgeVariant: "danger",
      description:
        "You should call your doctor immediately, we detected a high risk of heart attack due to your blood pressure.",
    },
    {
      text: "Do 15 minutes of exercise today",
      badge: "try this",
      description:
        "This is likely to improve blood pressure in people with similar conditions",
    },
    {
      text: "Eat a healthy meal",
      description:
        "This is likely to improve sugar levels in people with similar conditions",
    },
  ];
  const history = [
    {
      text: "You ate a healthy meal",
    },
    {
      text: "You slept 7 hours in average the last week",
    },
    {
      text: "You had a high blood pressure the last 2 days",
    },
  ];

  return <UserActions_ suggestions={suggestions} history={history} />;
}
