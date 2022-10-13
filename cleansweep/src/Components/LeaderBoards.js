import Row from "react-bootstrap/Row";

import Page from "./Page";
import LeaderBoardColumn from "./LeaderBoardColumn";

export default function Leaderboards() {
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
