import useCart from "../../../hooks/useCart";
import { Row, Button, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Page from "../../Page";
import { deleteChore, completeChore } from "../../../Endpoints";
import { SubmitChore } from "../Chores/index";
import { useState } from "react";
import { getChores } from "../../../Endpoints";
import { useEffect } from "react";
import LeaderBoardColumn from "../../LeaderBoardColumn";

const MyChores = () => {
  const { user, fetchUserData } = useAuth();
  const [myChores, setMyChores] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getChores(user.auth_token);
      setMyChores(response.data.results);
    } catch (e) {
      console.log("There was a problem." + e);
    }
  }

  async function onClickDeleteChore(e, pk) {
    e.preventDefault();
    const resp = await deleteChore(user.auth_token, pk);
    fetchData();
  }

  async function onClickCompleteChore(e, pk, day = new Date().toISOString()) {
    e.preventDefault();
    const resp = await completeChore(user.auth_token, pk);
    fetchUserData();
    fetchData();
  }

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toString().substring(0, 21);
  };

  const checkIfChoreIsLate = (date) => {
    const currentDate = new Date();
    const choreDate = new Date(date);

    return choreDate < currentDate;
  };

  return (
    <Page title="My Chores" totalPoints={user.totalPoints}>
      <Row>
        <LeaderBoardColumn
          title="Chores"
          leaders={myChores.map((item) => {
            return (
              <Row
                key={item.chore.pk}
                className={
                  checkIfChoreIsLate(item.due_date) ? "bg-danger" : null
                }
              >
                <Col>
                  {item.chore.chore} : {formatDate(item.due_date)}
                </Col>
                <Col>
                  <Button
                    className={`justify-content-center ${
                      checkIfChoreIsLate(item.due_date) ? "disabled" : null
                    }`}
                    onClick={(e) => {
                      onClickCompleteChore(e, item.pk);
                      console.log(JSON.stringify(item));
                    }}
                  >
                    Complete
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="d-flex justify-content-center"
                    onClick={(e) => {
                      onClickDeleteChore(e, item.pk);
                    }}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            );
          })}
        />
      </Row>
    </Page>
  );
};

export default MyChores;