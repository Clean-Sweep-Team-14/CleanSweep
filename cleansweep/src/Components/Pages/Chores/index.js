import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

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
      <p style={{ textAlign: "center" }}>Select chores to add to your list!</p>
      <Row>
        <LeaderBoardColumn
          title="Easy (5 points)"
          leaders={allEasyChoresData.map((item) => {
            return (
              <>
                <h5 className="text-center">
                  {item.chore}
                  {""}
                </h5>
                <Button
                  variant="outline-success"
                  className="justify-content-center"
                  onClick={(e) => {
                    SubmitChore(e, item.pk);
                  }}
                >
                  <CheckIcon />
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
                <h5 className="text-center ">
                  {item.chore}
                  {""}
                </h5>
                <Button
                  variant="outline-success"
                  className="justify-content-center"
                  href=""
                  onClick={(e) => {
                    SubmitChore(e, item.pk, new Date().toISOString());
                  }}
                >
                  <CheckIcon />
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
                <h5 className="text-center ">
                  {item.chore}
                  {""}
                </h5>
                <Button
                  variant="outline-success"
                  className="justify-content-center"
                  href=""
                  onClick={(e) => {
                    SubmitChore(e, item.pk, new Date().toISOString());
                  }}
                >
                  <CheckIcon />
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
