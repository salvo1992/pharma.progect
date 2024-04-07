// SingleBook.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleBook = ({ book, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log('handleAddToCart', book); // Aggiungi questo log per verificare se la funzione viene chiamata correttamente
    if (addToCart && typeof addToCart === 'function') {
      addToCart(book); // Chiamata a addToCart con il libro corrente come argomento
    }
  };

  return (
    <Card>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.Text}</Card.Text>
        <Card.Text>Prezzo: €{book.price}</Card.Text>
        <div className="d-grid gap-2">
          <Button
            variant="primary"
            onClick={() => navigate(`/details/${book.asin}`)}
          >
            VAI AI DETTAGLI
          </Button>
          <Button variant="success" onClick={handleAddToCart}>
            Aggiungi al carrello
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;


