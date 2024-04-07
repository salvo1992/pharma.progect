import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddReview from './AddReview';

const UserPage = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8}>
          <h1>Benvenuto nella pagina utenti</h1>
          <p>Qui puoi inserire le informazioni per il tuo ordine:</p>
          <AddReview asin="inserisci_asin_prodotto" />
        </Col>
      </Row>
    </Container>
  );
};

export default UserPage;
