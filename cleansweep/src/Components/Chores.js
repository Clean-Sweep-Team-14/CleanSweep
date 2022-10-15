import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import React from "react";

import Page from "./Page";
import LeaderBoardColumn from "./LeaderBoardColumn";
import { getAllChores, getAllEasyChores, getAllMediumChores, getAllHardChores, getAllBonusChores, postChoresTracker} from "../Endpoints";
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
        }, []
    )  

    async function submitChore(e, chorePk) {
        e.preventDefault()
        try {
            const response = await postChoresTracker(chorePk)
            
            console.log("New chore added to queue!")
            } catch(e) {
            console.log("There was a problem adding a chore."+e)
            }
    }
    
    return (
        <Page title="Available chores">
        <Row>
            <LeaderBoardColumn
            title="Easy (5 points)"
            leaders={allEasyChoresData.map((item) => <Button href=''onClick={(event) => submitChore(event, item.pk)}>{item.chore}</Button>)}
            />
            <LeaderBoardColumn
            title="Medium (25 points)"
            leaders={allMediumChoresData.map((item) => <Button href=''onClick={(event) => submitChore(event, item.pk)}>{item.chore}</Button>)}
            />
            <LeaderBoardColumn
            title="Hard (100 points)"
            leaders={allHardChoresData.map((item) => <Button href=''onClick={(event) => submitChore(event, item.pk)}>{item.chore}</Button>)}
            />
        </Row>
        </Page>
    );
}