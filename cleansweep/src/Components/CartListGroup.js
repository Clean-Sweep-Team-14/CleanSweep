import ListGroup from "react-bootstrap/ListGroup";

export default function CartListGroup(props) {
    return (
        <ListGroup className="py-2" as="ol" >
        {props.items.map((item) => (
            <ListGroup.Item as="li" key={item}>{item}</ListGroup.Item>
        ))}
        </ListGroup>
    );
}
