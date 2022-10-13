import Row from "react-bootstrap/Row";

import Page from "./Page";
import LeaderBoardColumn from "./LeaderBoardColumn";
import { useState } from "react";
import { useEffect } from "react";
import {listGlobalLeaderboard, listFriendLeaderboard} from "../Endpoints"

export default function Leaderboards() {
    const [allGlobalLeadersData, setAllGlobalLeadersData] = useState([])
    const [allFriendsLeadersData, setAllFriendsLeadersData] = useState([])
        useEffect(() => {
        async function fetchData() {
            try {
                let response = await listGlobalLeaderboard()
                setAllGlobalLeadersData(response.data.results)

                response = await listFriendLeaderboard()
                setAllFriendsLeadersData(response.data.results)
            }
            catch(e) {
                console.log("There was a problem."+e)
            }
            }
            fetchData()
        }, [])
    return (
        
        <Page title="Leaderboards">
        <h4 className="header text-center text-black-50 m-3">CleanSweep</h4>
        <Row>
            <LeaderBoardColumn
            title="Global"
            leaders={allGlobalLeadersData.map((item) => item.leader)}
            />
            <LeaderBoardColumn
            title="Friends"
            leaders={allFriendsLeadersData.map((item) => item.leader)}
            />
        </Row>
        </Page>
    );
}
