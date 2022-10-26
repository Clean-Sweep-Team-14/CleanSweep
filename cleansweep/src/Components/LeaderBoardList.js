import ListGroup from "react-bootstrap/ListGroup";

export default function LeaderBoardList(props) {
  return (
    <ListGroup
      id="leaderBoard"
      className="py-2"
      as="ol"
      numbered
      style={{ width: "50%", margin: "0 auto" }}
    >
      {props.items.map((item) => (
        <ListGroup.Item
          style={{ display: "flex", justifyContent: "space-between" }}
          key={item.username}
        >
          <div style={{ flexGrow: 1 }}>{item.username}</div>
          <div>{item.actual_points}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
