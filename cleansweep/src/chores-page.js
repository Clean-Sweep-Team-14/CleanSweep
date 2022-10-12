import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


const ChoresLists = () => (
    
<Container>
        <Card.Title className='text-center py-3'> 🧹 Select Your Household Chores ! 🪠 </Card.Title>
        <Row>
        <Stack className='text-center py-3 col-3'>
            <div className="border">Easy Chores - 5 pts</div>
            <div className="bg-white my-2">1. name placeholder</div>
            <div className="bg-white my-2">2. name placeholder</div>
            <div className="bg-white my-2">3. name placeholder</div>
            <div className="bg-white my-2">4. name placeholder</div>
            <div className="bg-white my-2">5. name placeholder</div>
        </Stack>

        <Stack className='text-center py-3 col-3'>
            <div className="border">Medium Chores - 25 pts</div>
            <div className="bg-white my-2">1. name placeholder</div>
            <div className="bg-white my-2">2. name placeholder</div>
            <div className="bg-white my-2">3. name placeholder</div>
            <div className="bg-white my-2">4. name placeholder</div>
            <div className="bg-white my-2">5. name placeholder</div>
        </Stack>

        <Stack className='text-center py-3 my- col-3'>
        <div className="border">Hard Chores - 100 pts</div>
            <div className="bg-white my-2">1. name placeholder</div>
            <div className="bg-white my-2">2. name placeholder</div>
            <div className="bg-white my-2">3. name placeholder</div>
            <div className="bg-white my-2">4. name placeholder</div>
            <div className="bg-white my-2">5. name placeholder</div>
        </Stack>
    </Row>
      
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" active>
          Block Level Button
          </Button>
        </ButtonToolbar>
      </div>

        {/* <Row>
<Col>
        <Stack className='text-center py-3 my-5 col-4'>
        <div className="border">All Chores</div>
            <div className="bg-white my-2">1. name placeholder</div>
            <div className="bg-white my-2">2. name placeholder</div>
            <div className="bg-white my-2">3. name placeholder</div>
            <div className="bg-white my-2">4. name placeholder</div>
            <div className="bg-white my-2">5. name placeholder</div>
        </Stack>
</Col>   
        </Row> */}

</Container>

);

export default ChoresLists;
