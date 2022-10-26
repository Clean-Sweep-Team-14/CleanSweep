import Col from "react-bootstrap/Col";
import AuthProvider from "../../src/hooks/useAuth";

import NumberedListGroup from "./NumberedListGroup";

export default function LeaderboardColumn(props) {
  return (
    <Col className="text-center">
      <h5>{props.title}</h5>
      <NumberedListGroup items={props.leaders} />
    </Col>
  );
}
