import Col from "react-bootstrap/Col";

import NumberedListGroup from "./NumberedListGroup";

export default function LeaderboardColumn(props) {
    return (
        <Col>
        <h5>{props.title}</h5>
        <NumberedListGroup items={props.leaders} />
        </Col>
    );
}