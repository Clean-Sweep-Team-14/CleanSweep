import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'react-bootstrap/Navbar'
import LeaderboardTitles from './Leaderboard-Page';
import NavigationBar from './Navbar';
import ChoresLists from './chores-page';
// import { getChores } from './Chores-Page'


function App() {
  return (
<div>
    <main>
    <ChoresLists></ChoresLists>
    <NavigationBar></NavigationBar>
    <LeaderboardTitles></LeaderboardTitles>
    </main>
</div>
    );
}



export default App;
