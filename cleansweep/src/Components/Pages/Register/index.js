import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Page from "../../Page";
import {Button, Col, Form, Row} from "react-bootstrap";
import {register} from "../../../Endpoints";

const Register = () => {
  const { register, loading } = useAuth();
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      register(username, email, password);
    }
    setValidated(true);
  };

  return (
      <Page title="Register">
        <Row>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control required type="username" placeholder="Enter username"
                            onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password"
                            onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
        <Row>
          <Col>
            <p>Already have an account? {' '}<a href='/login'>Login then you fucking bitch</a></p>
          </Col>
        </Row>
      </Page>
  );
};

export default Register;