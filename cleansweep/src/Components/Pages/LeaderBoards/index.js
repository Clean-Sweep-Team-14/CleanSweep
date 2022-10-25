import Row from 'react-bootstrap/Row';
import Page from '../../Page';
import LeaderBoardColumn from '../../LeaderBoardColumn';
import  { useState, useEffect }  from 'react';
import { getListGlobalLeaderboard } from '../../../Endpoints';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import TableComponent from 'react';

// import "bootstrap/dist/css/bootstrap.min.css";


const LeaderBoards = () => {
  const { user } = useAuth();
  const [leaderData, setLeaderData] = useState({});
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);

  const getLeaderData = async () => {
    await axios.get("https://clean-sweep-team-14.herokuapp.com/leaderboard/global")
    .then((resp)=> {
    let leaderData = resp.results.results.sort((a, b) => 
        (a.actual_points < b.actual_points ? 1 : -1)).map((item) => 
        (`${item.username} ${item.actual_points}`));
      let cols  = Object.keys(leaderData[0].map((results) => {
        return {
          Header: key.toUpperCase(),
          accessor: key
        };
  }));
  setUserData(results);
  setColumns(cols);
  setLoading(false);
},

  useEffect (() => {
    setLoading(true);
    getLeaderData();
  }, []),

  return (
    <TableComponent columns={columns} userData={userData} />
  )}

export default LeaderBoards;
