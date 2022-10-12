import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

export default function Page(props) {
    useEffect(() => {
        document.title = `${props.title} | CleanSweep`;
        window.scrollTo(0, 0);
    }, [props.title]);
    return (
        <Container className="p-3">
        <h1>
            {props.title}{" "}
        </h1>
        <hr />
        {props.children}
        </Container>
    );
}
