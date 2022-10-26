import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import allGlobalLeadersData from "../Components/Pages/Chores/index";
import { useState } from "react";
import * as apiEndpoints from "../Endpoints";
import useAuth from "../hooks/useAuth";

export default function Page(props) {
  const { user } = useAuth();
  const [userPoints, setUserPoints] = useState({});

  useEffect(() => {
    document.title = `${props.title} | CleanSweep`;
    window.scrollTo(0, 0);
    fetchUserData();
    console.log(props.refresh);
  }, [props.title, props.refresh]);

  const fetchUserData = async () => {
    try {
      const response = await apiEndpoints.getListGlobalLeaderboard();

      if (response.status === 200 && user) {
        const userData = response.data.results.find(
          (data) => data.username === user.username
        );
        const updatedUser = { ...user, totalPoints: userData.actual_points };
        setUserPoints(updatedUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="p-3">
      <h1>{props.title} </h1>
      <h2 className="text-end">
        My Total Points: {`${userPoints.totalPoints || 0}`}
      </h2>
      <hr />
      {props.children}
    </Container>
  );
}
