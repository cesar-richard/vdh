import React from "react";
import { Container } from "react-bootstrap";
import auth from "../utils/auth";
import { PDA_ID } from "../utils/configVDH.js";

class LoginPage extends React.Component {
  componentDidMount() {
    auth.authenticate();

    const params = {
      client_id: PDA_ID,
      response_type: "code",
      redirect_uri: "https://assos.utc.fr/lavoieduhoublon/",
      "scopes[]": ["user-manage-groupe", "email"],
    };
    const queryString = Object.keys(params)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      })
      .join("&");

    window.location.replace(
      `https://assos.utc.fr/oauth/authorize?${queryString}`
    );
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
            marginBottom: "-1em",
          }}
        >
          <div className="my-auto">
            <h1 className="my-4">
              Vous allez être redirigé vers la page de connexion...
            </h1>
          </div>
        </Container>
      </>
    );
  }
}
export default LoginPage;
