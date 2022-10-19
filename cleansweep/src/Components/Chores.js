import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React from "react";

import Page from "./Page";
import useCart from "../hooks/useCart";
import LeaderBoardColumn from "./LeaderBoardColumn";
import {
  getAllChores,
  getAllEasyChores,
  getAllMediumChores,
  getAllHardChores,
  getAllBonusChores,
  postChoresTracker,
} from "../Endpoints";
import { useEffect, useState } from "react";

export default function Chores() {
  const [allChoresData, setAllChoresData] = useState([]);
  const [allEasyChoresData, setAllEasyChoresData] = useState([]);
  const [allMediumChoresData, setAllMediumChoresData] = useState([]);
  const [allHardChoresData, setAllHardChoresData] = useState([]);
  const [allBonusChoresData, setAllBonusChoresData] = useState([]);
  const { addToCart } = useCart();

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

  function submitChore(e, chore, choreDate) {
    e.preventDefault();
    const newChore = { chore: chore, day: choreDate };
    addToCart(newChore);
    console.log(`Chore added ${JSON.stringify(newChore)}`);
  }

  return (
    <Page title="Available chores">
      <Row>
        <LeaderBoardColumn
          title="Easy (5 points)"
          leaders={allEasyChoresData.map((item) => {
            return (
              <>
                {item.chore}{" "}
                <Button
                  href=""
                  onClick={(e) => {
                    submitChore(e, item, new Date().toISOString());
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
          leaders={allMediumChoresData.map((item) => (
            <Button href="" onClick={(event) => submitChore(event, item.pk)}>
              {item.chore}
            </Button>
          ))}
        />
        <LeaderBoardColumn
          title="Hard (100 points)"
          leaders={allHardChoresData.map((item) => (
            <Button href="" onClick={(event) => submitChore(event, item.pk)}>
              {item.chore}
            </Button>
          ))}
        />
      </Row>
    </Page>
  );
}
