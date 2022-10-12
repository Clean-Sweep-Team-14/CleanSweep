import Row from "react-bootstrap/Row";

import Page from "./Page";
import LeaderBoardColumn from "./LeaderBoardColumn";

export default function Chores() {
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
