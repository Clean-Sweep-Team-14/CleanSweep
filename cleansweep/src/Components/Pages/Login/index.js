import useAuth from "../../../hooks/useAuth";
import { Button, Row, Col, Form } from "react-bootstrap";
import Register from "../Register";
import Page from "../../Page";
import { useState } from "react";
import { user } from "../../../hooks/useAuth";
import fetchUserData from "../../../hooks/useAuth";
import fetchData from "../../../hooks/useAuth";

const Login = () => {
  const { login, loading } = useAuth();
  const { user } = useAuth();
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      login(username, password);
    }
    setValidated(true);
    fetchUserData();
    fetchData();
  };

  return (
    <Page title="Login">
      <Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="username"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
      <Row>
        <Col>
          <p>
            Don't have an account yet? <a href="/register">Register</a>
          </p>
        </Col>
      </Row>
    </Page>
  );
};

export default Login;
