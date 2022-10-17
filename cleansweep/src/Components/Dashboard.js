import Page from './Page'
import { Col, Button, Container, Row, Stack } from 'react-bootstrap'






export default function Dashboard() {
    
    return (
        <div>
            <Container> 
                <Stack className='text-center py-5 col-13'>
                    <div className="display-3 my-2"> CHORES </div>
                    <div>
                    <button type="button" class="btn btn-primary">Click Here</button>
                    </div>
                    <div className="display-3 my-2"> MY PROFILE </div>
                    <div>
                    <button type="button" class="btn btn-success">Click Here</button>
                    </div>
                    <div className="display-3 my-2"> FRIENDS </div>
                    <div>
                    <button type="button" class="btn btn-danger">Click Here</button>
                    </div>
                    <div className="display-3 my-2"> LEADERBOARDS </div>
                    <div>
                    <button type="button" class="btn btn-dark">Click Here</button>
                    </div>
                </Stack>
            </Container>
                {/* <div> 
                    <input>Your Best Cleaning Day: </input>
                    <input>Your Worst Cleaning Day:</input>
                </div>    */}
        </div>
    );
}