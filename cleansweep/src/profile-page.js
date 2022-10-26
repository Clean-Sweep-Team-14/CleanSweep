import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

export default function ProfileStats() {
  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    className="rounded-circle"
                    fluid
                    style={{ width: "100px" }}
                  />
                </div>
                <MDBTypography tag="h4">Jean Luc Ponty</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @CallMeLukie, @Ishaved <span className="mx-2">|</span>{" "}
                  <a href="#!">I'll Clean your Clock</a>
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="sm">
                  Message a Friend
                </MDBBtn>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">150</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Points Balance
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">3</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Friends
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">6</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Total Chores Completed
                    </MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Container>
        <Col>
          <Stack className="text-center py-3 col-3">
            <div className="bg-white my-2"> Badges Obtained:</div>
            <div className="bg-white my-2"> Member Since: </div>
            <div className="bg-white my-2"> Favorite Chores: </div>
            <div className="bg-white my-2"> Households: </div>
          </Stack>
        </Col>

        <div>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" active>
              Add As Friend
            </Button>
            <Button bsStyle="secondary" bsSize="large">
              Remove Friend
            </Button>
          </ButtonToolbar>
        </div>
      </Container>
    </div>
  );
}
