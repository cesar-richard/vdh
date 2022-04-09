import React from "react";
import { request } from "../modules/utils/request";
import { Container, Button } from "react-bootstrap";

class Billeterie extends React.Component {
  componentDidMount() {
    request("login", { username: "akraaije" });
  }
  render() {
    return (
      <>
        <Container
          fluid
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "-1em"
          }}
        >
          <div className="my-auto">
            <h1 className="my-4">La Billeterie n'est pas encore disponible</h1>
            <Button variant="success" size="lg" href="./">
              <i className="fa fa-arrow-left mr-2"></i>
              Retour
            </Button>
          </div>
        </Container>
      </>
    );
  }
}

export default Billeterie;
