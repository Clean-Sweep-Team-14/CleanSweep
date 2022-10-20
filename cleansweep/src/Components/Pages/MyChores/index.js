import useCart from "../../../hooks/useCart";
import { Row, Butto, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Cart = () => {
  const { cart } = useCart();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Row>
      <Col>
        <ListGroup>
          {cart.map((item) => {
            console.log(JSON.stringify(item));
            console.log(item.chore.day);
            return (
            <ListGroup.Item>{item.chore.chore.chore} {item.chore.day}</ListGroup.Item>
            
          )})}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Cart;
