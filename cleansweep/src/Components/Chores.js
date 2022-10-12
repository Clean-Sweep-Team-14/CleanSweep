import Row from "react-bootstrap/Row";

import Page from "./Page";
import LeaderBoardColumn from "./LeaderBoardColumn";
import { getAllChores, getAllEasyChores, getAllMediumChores, getAllHardChores, getAllBonusChores} from "../Endpoints";
import { useEffect, useState } from "react";

export default function Chores() {
const [allChoresData, setAllChoresData] = useState([])
        useEffect(() => {
        async function fetchData() {
            try {
                const response = getAllChores()
                setAllChoresData(response.results.map(
                    
                ))
            }
            catch(e) {
                console.log("There was a problem.")
            }
            }
            fetchData()
        }, [])
    return (
        <Page title="Chores">
        <Row>
            <LeaderBoardColumn
            title="Easy"
            leaders={["name placeholder", "name placeholder", "name placeholder", "name placeholder"]}
            />
            <LeaderBoardColumn
            title="Medium"
            leaders={["name placeholder", "name placeholder", "name placeholder", "name placeholder"]}
            />
            <LeaderBoardColumn
            title="Hard"
            leaders={["name placeholder", "name placeholder", "name placeholder", "name placeholder"]}
            />
        </Row>
        </Page>
    );
}
