import ListGroup from "react-bootstrap/ListGroup";

export default function LeaderBoardList(props) {
  return (
    <ListGroup 
      className="py-2" as='ol' numbered
      style={{ width: "80%", margin: "0 auto" }}
    >
      {props.items.map((item) => (
        <ListGroup.Item key={item}>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
