import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Page404 = () => (
  <Container
    fluid
    style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '-1em',
    }}
  >
    <div className="my-auto">
      <h1 className="my-4">Page not found</h1>
      <Button variant="success" size="lg" href="./">
        <i className="fa fa-arrow-left mr-2" />
        Retour
      </Button>
    </div>
  </Container>
);
export default Page404;
