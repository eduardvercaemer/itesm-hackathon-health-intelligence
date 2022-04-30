import { Button, ListGroup, Badge, Accordion, Alert } from "react-bootstrap";
import { useState } from "react";

// item with text, optional badge, and checkbox
const SuggestedAction = ({
  text,
  badge,
  index,
  description,
  badgeVariant,
  onDone,
}) => (
  <ListGroup.Item>
    <input type="checkbox" onClick={onDone} /> {text}
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
        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
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

const UserActions_ = ({ suggestions, history, onDone }) => (
  <>
    <Accordion>
      <ListGroup variant="flush">
        {suggestions.map((suggestion, index) => (
          <SuggestedAction
            key={suggestion.text}
            index={`${index}`}
            text={suggestion.text}
            badge={suggestion.badge}
            badgeVariant={suggestion.badgeVariant}
            description={suggestion.description}
            onDone={() => onDone(index)}
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
  const suggestions_ = [
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

  const [suggestions, setSuggestions] = useState(suggestions_);

  const removeSuggestion = (index) => {
    const newSuggestions = [...suggestions];
    newSuggestions.splice(index, 1);
    setSuggestions(newSuggestions);
  };

  return (
    <UserActions_
      onDone={(idx) => removeSuggestion(idx)}
      suggestions={suggestions}
      history={history}
    />
  );
}