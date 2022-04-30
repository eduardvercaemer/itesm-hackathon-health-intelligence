import {
  Button,
  ListGroup,
  Container,
  Badge,
  Accordion,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

// imvisible react bootstrap button
const WrapButton = ({ children, onClick, variant }) => (
  <Button variant={variant} onClick={onClick}>
    {children}
  </Button>
);

const SuggestedAction = ({
  text,
  badge,
  index,
  description,
  badgeVariant,
  onDone,
}) => (
  <ListGroup.Item>
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={1} className="my-auto align-items-center">
              <input type="checkbox" onClick={onDone} />
            </Col>
            <Col xs={1} className="my-auto align-items-center">
              <WrapButton onClick={onDone} variant="outline-black">
                <FaTimes style={{ display: "block" }} />
              </WrapButton>
            </Col>
            <Col xs={8} className="ml-2 align-self-center">
              {text}
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={4}>
          <Accordion.Toggle as={Button} variant="link" eventKey={index}>
            Details
          </Accordion.Toggle>{" "}
          {badge && (
            <Badge
              pill
              variant={badgeVariant ?? "primary"}
              style={{ display: "inline-block" }}
            >
              {badge}
            </Badge>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion.Collapse eventKey={index}>
            <Alert className="mt-3" variant="info">
              {description}
            </Alert>
          </Accordion.Collapse>
        </Col>
      </Row>
    </Container>
  </ListGroup.Item>
);

// a list item that is faded and with not checkbox
const PastAction = ({ text }) => (
  <ListGroup.Item className="text-muted">{text}</ListGroup.Item>
);

// when there are no suggestions, show a message instead
const UserActions_ = ({ suggestions, history, onDone }) => (
  <>
    <Accordion>
      {suggestions.length > 0 ? (
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
      ) : (
        <Alert variant="info" className="text-center align-self-center">
          <h5>You are done for now!</h5>
        </Alert>
      )}
    </Accordion>
    <Container>
      <Row>
        <Col className="mx-auto">
          <h4>Recent Actions</h4>
        </Col>
      </Row>
    </Container>
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
      badge: "!",
      badgeVariant: "danger",
      description: (
        <div>
          <span className="font-weight-bold">
            You should call your doctor immediately,
          </span>{" "}
          we detected that you have a high risk of heart attack.
        </div>
      ),
    },
    {
      text: "Do 15 minutes of exercise today",
      description: (
        <div>
          <span className="font-weight-bold">
            78% of people with similar conditions
          </span>{" "}
          found improvements on their blood pressure with this activity.
        </div>
      ),
    },
    {
      text: "Eat 2 fruits today",
      description: (
        <div>
          <span className="font-weight-bold">
            71% of people with similar conditions
          </span>{" "}
          found improvements on their blood pressure when doing this activity
          regularly.
        </div>
      ),
    },
  ];
  const history_ = [
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
  const [history, setHistory] = useState(history_);

  // removes suggestion from list and adds to history, keeping
  // a maximum of 5 items in history
  const removeSuggestion = (index) => {
    const newSuggestions = [...suggestions];
    const newHistory = [...history];
    newHistory.push(newSuggestions[index]);
    newSuggestions.splice(index, 1);
    setSuggestions(newSuggestions);
    setHistory(newHistory.slice(-5));
  };

  return (
    <UserActions_
      onDone={(idx) => removeSuggestion(idx)}
      suggestions={suggestions}
      history={history}
    />
  );
}
