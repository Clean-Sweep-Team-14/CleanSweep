import ListGroup from "react-bootstrap/ListGroup";

export default function LeaderBoardList(props) {
  return (
    <ListGroup 
      id = 'leaderBoard'
      className="py-2" as='ol' numbered
      style={{ width: "40%", margin: "0 auto"}}
    >
      {props.items.map((item) => (
        <ListGroup.Item style={{display:'flex', justifyContent: 'space-between'}} key={item.username}><div style={{flexGrow: 1}}>{item.username}</div><div>{item.actual_points}</div></ListGroup.Item>
      ))}
    </ListGroup>
  );
}
// .map((item) => `${item.username} ${item.actual_points}`)