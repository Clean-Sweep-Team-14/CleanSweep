import Row from "react-bootstrap/Row";

import Page from "./Page";
import LeaderBoardColumn from "./LeaderBoardColumn";

export default function Leaderboards() {
    const [allGlobalLeadersData, setAllGlobalLeadersData] = useState([])
    const [allFriendsLeadersData, setAllFriendsLeadersData] = useState([])
        useEffect(() => {
        async function fetchData() {
            try {
                let response = await listGlobalLeaders()
                setAllGlobalLeadersData(response.data.results)

                response = await listFriendLeaders()
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
            leaders={["name placeholder", "name placeholder", "name placeholder", "name placeholder"]}
            />
            <LeaderBoardColumn
            title="Friends"
            leaders={["name placeholder", "name placeholder", "name placeholder", "name placeholder"]}
            />
        </Row>
        </Page>
    );
}
