import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'react-bootstrap/Navbar'
import LeaderboardTitles from './Leaderboard-Page';
import NavigationBar from './Navbar';

function App() {
  return (
<div>
    <main>
    <NavigationBar></NavigationBar>
    <LeaderboardTitles></LeaderboardTitles>
    </main>
</div>
    );
}

export default App;
