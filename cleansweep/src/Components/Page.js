import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import allGlobalLeadersData from "../Components/Pages/Chores/index";

export default function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | CleanSweep`;
    window.scrollTo(0, 0);
  }, [props.title]);
  return (
    <Container className="p-3">
      <h1>{props.title} </h1>
      <h2 className="text-end">
        My Total Points {`${props.totalPoints || 0}`}
      </h2>
      <hr />
      {props.children}
    </Container>
  );
}
