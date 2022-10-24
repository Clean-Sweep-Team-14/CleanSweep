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
  const { user } = useAuth();
  const [myChores, setMyChores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getChores(user.auth_token);
        setMyChores(response.data.results);
      } catch (e) {
        console.log("There was a problem." + e);
      }
    }
    fetchData();
  }, []);

  async function onClickDeleteChore(e, chorePk) {
    e.preventDefault();
    const resp = await deleteChore(user.auth_token, chorePk);
    console.log(`Resp ${JSON.stringify(resp)}`);
    console.log(`Chore deleted`);
  }

  async function onClickCompleteChore(
    e,
    pk,
    chorePk,
    day = new Date().toISOString()
  ) {
    e.preventDefault();
    const resp = await completeChore(user.auth_token, chorePk, day);
    console.log(`Resp ${JSON.stringify(resp)}`);
    console.log(`Chore completed`);
  }

  return (
    <Page title="My Chores">
      <Row>
        <LeaderBoardColumn
          title="Chores"
          leaders={myChores.map((item) => {
            return (
              <Row>
                <Col>
                  {item.chore} {item.due_date}
                </Col>
                <Col>
                  <Button
                    className="d-flex justify-content-center"
                    onClick={(e) => {
                      onClickCompleteChore(e, item.pk, item.chore);
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

