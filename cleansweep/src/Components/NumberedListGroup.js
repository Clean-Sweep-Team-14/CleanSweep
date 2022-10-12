import ListGroup from "react-bootstrap/ListGroup";

export default function NumberedListGroup(props) {
    return (
        <ListGroup as="ol" numbered>
        {props.items.map((item) => (
            <ListGroup.Item as="li">{item}</ListGroup.Item>
        ))}
        </ListGroup>
    );
}
