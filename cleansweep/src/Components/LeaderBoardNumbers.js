import Col from "react-bootstrap/Col";
import AuthProvider from "../../src/hooks/useAuth";

import LeaderBoardList from "./LeaderBoardList";

export default function LeaderBoardColumn(props) {
  return (
    <Col className="text-center">
      <h5>{props.title}</h5>
      <LeaderBoardList items={props.leaders} />
    </Col>
  );
}
