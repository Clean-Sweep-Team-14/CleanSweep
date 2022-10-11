import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'

function LeaderboardTitles() {
    return (

        <Container>
        <Card.Title className='text-center py-3'>Leaderboards</Card.Title>
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

        <Col className='text-start border py-2 my-1' xs={4} xs={4}>
        <Stack gap={2}>
            <div className="bg-light border">1. name placeholder</div>
            <div className="bg-light border">2. name placeholder</div>
            <div className="bg-light border">3. name placeholder</div>
            <div className="bg-light border">4. name placeholder</div>
            <div className="bg-light border">5. name placeholder</div>
        </Stack>

            
        </Col>

        <Row>
            <Col className='text-center border py-2' lg={4} md={4}>
            Friends
            </Col>
        </Row>

        <Row>
        <Col className='text-start border py-2' lg={4} md={4}>
            1. name placeholder
        </Col>
        </Row>
        </Container>
    );
}

export default LeaderboardTitles;