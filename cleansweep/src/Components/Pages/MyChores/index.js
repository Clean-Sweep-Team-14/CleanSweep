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
import JSConfetti from 'js-confetti'


const jsConfetti = new JSConfetti();

function confettfy() {
  jsConfetti.addConfetti({
    emojis: ['🧼', '✨', '🫧', '🧹'],
    confettiRadius: 8,
    emojiSize: 75,
    confettiNumber: 250,
  });
}

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
    const newDate = new Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    });
    return newDate.toString();
  };

  const checkIfChoreIsLate = (date) => {
    const currentDate = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    });
    const choreDate = formatDate(date);
    return choreDate < currentDate;
  };

  const notifySuccess = (chore) => {
    toast.success(`${chore} completed!`);
  };

  const deleteSuccess = (chore) => {
    toast.info(`${chore} deleted!`);
  };

  return (
    <Page title="My Chores" totalPoints={user.totalPoints}>
      <p style={{ textAlign: "center", color: "#f44336" }}>
        Do your chores by the due date or you will lose points, ya filthy
        animal!
      </p>
      <Row>
        <LeaderBoardColumn
          leaders={myChores.map((item) => {
            return (
              <Row
                key={item.chore.pk}
                className={
                  checkIfChoreIsLate(item.due_date)
                    ? "alert alert-danger"
                    : null
                }
              >
                <Col>
                  <div>{item.chore.chore}</div>
                  <div>Due By: {formatDate(item.due_date)}</div>
                </Col>
                <Col>
                  <Button
                    variant="success"
                    className="justify-content-center"
                    onClick={(e) => {
                      onClickCompleteChore(e, item.pk);
                      notifySuccess(item.chore.chore);
                      confettfy();
                    }}
                  >
                    Complete
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    className={` ${
                      checkIfChoreIsLate(item.due_date) ? "invisible" : null
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
