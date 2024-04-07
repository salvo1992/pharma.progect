import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';
import SingleBook from './SingleBook';
import CartPage from './CartPage';

const YourComponent = () => {
  console.log('Your Component');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    console.log('addToCart:', book);
    setCartItems([...cartItems, book]);
  };
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2>Tutti i libri</h2>
          <Row>
            {fantasy.map((book) => (
              <Col key={book.asin} xs={12} md={4}>
                <SingleBook book={book} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      {cartItems.length > 0 && <CartPage cartItems={cartItems} />}
    </Container>
  );
};

export default YourComponent;





