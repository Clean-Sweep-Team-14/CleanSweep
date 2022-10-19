import Row from "react-bootstrap/Row";

import Page from "./Page";
import { useState } from "react";
import { useEffect } from "react";
import { choresTracker } from "../Endpoints";
import { Col } from "react-bootstrap";
import { encodeUsername } from "./utils";
import useAuth from "../hooks/useAuth";
import React from 'react';



export default function UserCart () {
    const [choresTracker, setchoresTracker] = useState([])
    
        useEffect(() => {
        async function fetchData() {
            try {
                let response = setchoresTracker()
                setchoresTracker(response.data.results)
            }
            catch(e) {
                console.log("There was a problem."+e)
            }
            }
            fetchData()
        }, [])
    return (
        
        <Page title="Your Chores Cart">
        <h4 className="header text-center text-black-50 m-3">{encodeUsername} You Chose These Chores</h4>
        {/* <Row>
            <Col>
               <ul>
                {choresTracker.map((item) => (`${item.chore} ${item.point}`).sort((a, b) => (a.chore > b.point) ? 1 : -1))}
                </ul> 
            </Col>
        </Row> */}
        </Page>
    );
}