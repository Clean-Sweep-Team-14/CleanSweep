import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LeaderboardTitles() {
    return (
        <Container>
        <Row>
            <Col sm={4}>Global</Col>
            <Col sm={4}>Monthly</Col>
            <Col sm={4}>Household</Col>
        </Row>
        <Row>
            <Col sm>names</Col>
            <Col sm>names</Col>
            <Col sm>names</Col>
        </Row>
        </Container>
    );
}

export default LeaderboardTitles;