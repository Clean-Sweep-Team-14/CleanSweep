import ListGroup from "react-bootstrap/ListGroup"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from 'react-bootstrap/Stack'


const LeaderboardTitles = () => (
    
<Container>
        <Card.Title className='text-center py-3'>Leaderboards</Card.Title>
        <Row>
        <Stack className='text-center border py-3 col-3'>
            <div className="border">Global</div>
            <div className="bg-white my-2">1. name placeholder</div>
            <div className="bg-white my-2">2. name placeholder</div>
            <div className="bg-white my-2">3. name placeholder</div>
            <div className="bg-white my-2">4. name placeholder</div>
            <div className="bg-white my-2">5. name placeholder</div>
        </Stack>

        <Stack className='text-center border py-3 col-3'>
            <div className="border">Monthly</div>
            <div className="bg-white">1. name placeholder</div>
            <div className="bg-white">2. name placeholder</div>
            <div className="bg-white">3. name placeholder</div>
            <div className="bg-white">4. name placeholder</div>
            <div className="bg-white">5. name placeholder</div>
        </Stack>

        <Stack className='text-center border py-3 my- col-3'>
        <div className="border">Household</div>
            <div className="bg-white my-2">1. name placeholder</div>
            <div className="bg-white my-2">2. name placeholder</div>
            <div className="bg-white my-2">3. name placeholder</div>
            <div className="bg-white my-2">4. name placeholder</div>
            <div className="bg-white my-2">5. name placeholder</div>
        </Stack>

    </Row>
        <Row>
<Col>
        <Stack className='text-center border py-3 my-5 col-4'>
        <div className="border">Friends</div>
            <div className="bg-white my-2">1. name placeholder</div>
            <div className="bg-white my-2">2. name placeholder</div>
            <div className="bg-white my-2">3. name placeholder</div>
            <div className="bg-white my-2">4. name placeholder</div>
            <div className="bg-white my-2">5. name placeholder</div>
        </Stack>
</Col>   
        </Row>

</Container>

);

export default LeaderboardTitles;
