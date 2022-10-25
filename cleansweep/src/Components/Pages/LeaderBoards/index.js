import Row from "react-bootstrap/Row";

import Page from "../../Page";
import LeaderBoardColumn from "../../LeaderBoardColumn";
import { useState } from "react";
import { useEffect } from "react";
import {
  getListGlobalLeaderboard,
  getListFriendLeaderboard,
} from "../../../Endpoints";
import useAuth from "../../../hooks/useAuth";
import LeaderBoardList from "../../LeaderBoardNumbers";
import LeaderBoardNumbers from "../../LeaderBoardList";

const LeaderBoards = () => {
  const { user } = useAuth();
  const [allGlobalLeadersData, setAllGlobalLeadersData] = useState([]);
  const [allFriendsLeadersData, setAllFriendsLeadersData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await getListGlobalLeaderboard();
        setAllGlobalLeadersData(response.data.results);

        response = await getListFriendLeaderboard(user.auth_token);
        setAllFriendsLeadersData(response.data.results);
      } catch (e) {
        console.log("There was a problem." + e);
      }
    }
    fetchData();
  }, []);

  return (
    <Page title="Leaderboards" totalPoints={user.totalPoints}>
      <Row>
        <LeaderBoardList
          title="Global"
          leaders={allGlobalLeadersData
            .sort((a, b) => (a.actual_points < b.actual_points ? 1 : -1))
            .map((item) => `${item.username} ${item.actual_points}`)}
        />
      </Row>
    </Page>
  );
};

export default LeaderBoards;
