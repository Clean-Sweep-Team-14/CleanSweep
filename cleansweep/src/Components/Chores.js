import Row from "react-bootstrap/Row";

import Page from "./Page";
import LeaderBoardColumn from "./LeaderBoardColumn";
import { getAllChores, getAllEasyChores, getAllMediumChores, getAllHardChores, getAllBonusChores} from "../Endpoints";
import { useEffect, useState } from "react";

export default function Chores() {
const [allChoresData, setAllChoresData] = useState([])
const [allEasyChoresData, setAllEasyChoresData] = useState([])
const [allMediumChoresData, setAllMediumChoresData] = useState([])
const [allHardChoresData, setAllHardChoresData] = useState([])
const [allBonusChoresData, setAllBonusChoresData] = useState([])
        useEffect(() => {
        async function fetchData() {
            try {
                let response = await getAllEasyChores()
                setAllEasyChoresData(response.data.results)

                response = await getAllMediumChores()
                setAllMediumChoresData(response.data.results)

                response = await getAllHardChores()
                setAllHardChoresData(response.data.results)
            }
            catch(e) {
                console.log("There was a problem."+e)
            }
            }
            fetchData()
        }, [])
    return (
        <Page title="Chores">
        <Row>
            <LeaderBoardColumn
            title="Easy"
            leaders={allEasyChoresData.map((item) => item.chore)}
            />
            <LeaderBoardColumn
            title="Medium"
            leaders={allMediumChoresData.map((item) => item.chore)}
            />
            <LeaderBoardColumn
            title="Hard"
            leaders={allHardChoresData.map((item) => item.chore)}
            />
        </Row>
        </Page>
    );
}
