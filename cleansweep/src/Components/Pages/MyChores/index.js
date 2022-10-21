import useCart from "../../../hooks/useCart";
import { Row, Butto, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Page from "../../Page";

const MyChores = () => {
  const { user } = useAuth();

  return (
      <Page title="My Chores">
        <Row>
          <Col>
          </Col>
        </Row>
      </Page>
  );
};

export default MyChores;
