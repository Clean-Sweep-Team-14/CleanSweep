import Col from "react-bootstrap/Col";

import CartListGroup from "./CartListGroup";

export default function CartColumn(props) {
    return (
        <Col className="text-start">
        <h5>{props.title}</h5>
        <CartListGroup items={props.leaders} />
        </Col>
    );
}