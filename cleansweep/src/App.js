import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'react-bootstrap/Navbar'
import LeaderboardTitles from './Leaderboard-Page';
import ChoresLists from './Chores-Page';
// import { getChores } from './Chores-Page'


function App() {
  return (
<div>
    <main>
    <div>  
    <ChoresLists></ChoresLists>
    </div>
    <div>
    <LeaderboardTitles></LeaderboardTitles>
    </div>
    </main>
</div>
    );
}



export default App;
