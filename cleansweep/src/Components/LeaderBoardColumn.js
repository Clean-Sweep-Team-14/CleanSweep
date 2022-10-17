import Col from "react-bootstrap/Col";

import NumberedListGroup from "./NumberedListGroup";

export default function LeaderboardColumn(props) {
    return (
        <Col className="text-start">
        <h5>{props.title}</h5>
        <NumberedListGroup items={props.leaders} />
        </Col>
    );
}