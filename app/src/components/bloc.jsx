import React from "react";
import Container from "react-bootstrap/Container";

export default function Bloc(props) {
  return (
    <Container fluid style={backgroundStyle(props)}>
      <div className="my-auto w-100" id={props.id}>
        {props.children}
      </div>
    </Container>
  );
}

const backgroundStyle = props => {
  return {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    display: "flex",
    alignItems: "center",
    background: props.image
      ? `url(${props.image}) no-repeat center center fixed`
      : props.color
      ? props.color
      : "white",
    filter: props.filter
  };
};
