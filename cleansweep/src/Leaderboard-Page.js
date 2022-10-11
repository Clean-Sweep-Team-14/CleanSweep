import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function LeaderboardTitles() {
    return (

        <Container>
        <Card.Title className='text-center'>Leaderboards</Card.Title>
        <Row>
        <Col className='text-center border py-3' lg={4} md={4}>
            Global
            </Col>
        <Col className='text-center border py-3' lg={4} md={4}>
            Monthly
            </Col>
        <Col className='text-center border py-3' lg={4} md={4}>
            Household
        </Col>
        </Row>

        <Row>
            <Col className='text-center border py-2' xs={6} md={4}>
            name placeholder
            </Col>
            <Col className='text-center border py-2' xs={6} md={4}>
            name placeholder
            </Col>
            <Col className='text-center border py-2'xs={6} md={4}>
            name placeholder
            </Col>
        </Row>

        <Row>
            <Col className='text-center border py-2' lg={4} md={4}>
                Friends
            </Col>
        </Row>

        <Row>
        <Col className='text-center border py-2' lg={4} md={4}>
                name placeholder
        </Col>
        </Row>
        </Container>
    );
}

export default LeaderboardTitles;