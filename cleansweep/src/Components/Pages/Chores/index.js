import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Page from "../../Page";
import useCart from "../../../hooks/useCart";
import LeaderBoardColumn from "../../LeaderBoardColumn";
import {
  getAllChores,
  getAllEasyChores,
  getAllMediumChores,
  getAllHardChores,
  getAllBonusChores,
  addChore,
} from "../../../Endpoints";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Chores = () => {
  const [allChoresData, setAllChoresData] = useState([]);
  const [allEasyChoresData, setAllEasyChoresData] = useState([]);
  const [allMediumChoresData, setAllMediumChoresData] = useState([]);
  const [allHardChoresData, setAllHardChoresData] = useState([]);
  const [allBonusChoresData, setAllBonusChoresData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await getAllEasyChores();
        setAllEasyChoresData(response.data.results);

        response = await getAllMediumChores();
        setAllMediumChoresData(response.data.results);

        response = await getAllHardChores();
        setAllHardChoresData(response.data.results);
      } catch (e) {
        console.log("There was a problem." + e);
      }
    }
    fetchData();
  }, []);

  async function SubmitChore(e, chorePk, choreDate) {
    e.preventDefault();

    const resp = await addChore(user.auth_token, chorePk, choreDate);
    console.log(`Resp ${JSON.stringify(resp)}`);
    console.log(`Chore added`);
  }

  const notify = (chore) => {
    toast.success(`${chore} added to My Chores!`);
    console.log(chore);
  };

  return (
    <Page title="Available Chores" totalPoints={user.totalPoints}>
      <p style={{textAlign: "center"}}>Select chores to add to your list!</p>
      <Row>
        <LeaderBoardColumn
          title="Easy (5 points)"
          leaders={allEasyChoresData.map((item) => {
            return (
              <>
                <h6 className="text-center">
                  {item.chore}
                  {""}
                </h6>
                <Button
                  className="justify-content-center"
                  href=""
                  onClick={(e) => {
                    SubmitChore(e, item.pk);
                    notify(item.chore);
                  }}
                >
                  Add
                </Button>
              </>
            );
          })}
        />
        <LeaderBoardColumn
          title="Medium (25 points)"
          leaders={allMediumChoresData.map((item) => {
            return (
              <>
                <h6 className="text-center ">
                  {item.chore}
                  {""}
                </h6>
                <Button
                  className="justify-content-center"
                  href=""
                  onClick={(e) => {
                    SubmitChore(e, item.pk, new Date().toISOString());
                    notify(item.chore);
                  }}
                >
                  Add
                </Button>
              </>
            );
          })}
        />
        <LeaderBoardColumn
          title="Hard (100 points)"
          leaders={allHardChoresData.map((item) => {
            return (
              <>
                <h6 className="text-center ">
                  {item.chore}
                  {""}
                </h6>
                <Button
                  className="justify-content-center"
                  href=""
                  onClick={(e) => {
                    SubmitChore(e, item.pk, new Date().toISOString());
                    notify(item.chore);
                  }}
                >
                  Add
                </Button>
              </>
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

export default Chores;
