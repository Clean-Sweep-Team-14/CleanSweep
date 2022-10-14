import Row from "react-bootstrap/Row";

import Page from "./Page";
import LeaderBoardColumn from "./LeaderBoardColumn";

export default function Leaderboards() {
    return (
        <Page title="Leaderboards">
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
