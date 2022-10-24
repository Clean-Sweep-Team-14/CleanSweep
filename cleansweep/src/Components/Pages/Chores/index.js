import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React from "react";
import fetchData from '../LeaderBoards/index'

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
    fetchData();
    const resp = await addChore(user.auth_token, chorePk, choreDate);
  }

  return (
    <Page title="Available Chores" totalPoints={user.totalPoints}>
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
                  }}
                >
                  Add
                </Button>
              </>
            );
          })}
        />
      </Row>
    </Page>
  );
};

export default Chores;
