import Row from "react-bootstrap/Row";

import Page from "./Page";
import LeaderBoardColumn from "./LeaderBoardColumn";
import { useState } from "react";
import { useEffect } from "react";
import {getListGlobalLeaderboard, getListFriendLeaderboard} from "../Endpoints"

export default function Leaderboards() {
    const [allGlobalLeadersData, setAllGlobalLeadersData] = useState([])
    const [allFriendsLeadersData, setAllFriendsLeadersData] = useState([])
        useEffect(() => {
        async function fetchData() {
            try {
                let response = await getListGlobalLeaderboard()
                setAllGlobalLeadersData(response.data.results)
                
                response = await getListFriendLeaderboard()
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
        <Row>
            <LeaderBoardColumn
            title="Global"
            leaders={["name placeholder", "name placeholder", "name placeholder", "name placeholder"]}
            />
            <LeaderBoardColumn
            title="Friends"
            leaders={allGlobalLeadersData.map((item) => `${item.username} ${item.total_points}`).sort((a, b) => (a.total_points > b.total_points) ? 1 : -1)}
            />
            {/* <LeaderBoardColumn
            title="Friends"
            leaders={["name placeholder", "name placeholder", "name placeholder", "name placeholder"]}
            /> */}
            {/* <LeaderBoardColumn
            title="Friends"
            leaders={allFriendsLeadersData.map((item) => `${item.username} ${item.total_points}`).sort((a, b) => (a.total_points > b.total_points) ? 1 : -1)}
            /> */}
            
        </Row>
        </Page>
    );
}
