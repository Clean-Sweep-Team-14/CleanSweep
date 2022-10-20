import ListGroup from "react-bootstrap/ListGroup";

export default function NumberedListGroup(props) {
    return (
        <ListGroup className="py-2">
        {props.items.map((item) => (
            <ListGroup.Item key={item}>{item}</ListGroup.Item>
        ))}
        </ListGroup>
    );
}
