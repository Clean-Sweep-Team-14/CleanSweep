import ListGroup from "react-bootstrap/ListGroup";

export default function NumberedListGroup(props) {
    return (
        <ListGroup className="py-2" as="ol" numbered>
        {props.items.map((item) => (
            <ListGroup.Item as="li" key={item}>{item}</ListGroup.Item>
        ))}
        </ListGroup>
    );
}
