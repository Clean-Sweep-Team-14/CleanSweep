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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const notifySuccess = (chore) => {
    toast.success(`${chore} completed!`);
    console.log(chore);
  };

  const deleteSuccess = (chore) => {
    toast.info(`${chore} deleted!`);
    console.log(chore);
  };

  return (
    <Page title="My Chores" totalPoints={user.totalPoints}>
      <Row>
        <LeaderBoardColumn
          leaders={myChores.map((item) => {
            return (
              <Row
                key={item.chore.pk}
                className={
                  checkIfChoreIsLate(item.due_date) ? "alert alert-danger" : null
                }
              >
                <Col>
                  {item.chore.chore} Due By: {(item.due_date)}
                </Col>
                <Col>
                  <Button
                    className="justify-content-center"
                    onClick={(e) => {
                      onClickCompleteChore(e, item.pk);
                      notifySuccess(item.chore.chore);
                      console.log(JSON.stringify(item));
                    }}
                  >
                    Complete
                  </Button>
                </Col>
                <Col>
                  <Button
                    className={`justify-content-center ${
                      checkIfChoreIsLate(item.due_date) ? "disabled" : null
                    }`}
                    onClick={(e) => {
                      onClickDeleteChore(e, item.pk);
                      deleteSuccess(item.chore.chore);
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </Page>
  );
};

export default MyChores;
