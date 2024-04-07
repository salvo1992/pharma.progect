import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CartPage = ({ cartItems }) => {
  console.log('CartPage');
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentCartItems, setCurrentCartItems] = useState([]);

  useEffect(() => {
    setCurrentCartItems(cartItems || []);
  }, [cartItems]);

  const handleToggleSelected = (asin) => {
    if (selectedItems.includes(asin)) {
      setSelectedItems(selectedItems.filter(item => item !== asin));
    } else {
      setSelectedItems([...selectedItems, asin]);
    }
  };

  const removeFromCart = (asin) => {
    const updatedCartItems = currentCartItems.filter(item => item.asin !== asin);
    setCurrentCartItems(updatedCartItems);
    setSelectedItems(selectedItems.filter(item => item !== asin));
  };

  const handleCheckout = async () => {
    try {
      // Implementa la tua logica di checkout qui
      console.log('Checkout eseguito per gli elementi selezionati:', selectedItems);
    } catch (error) {
      console.error('Errore durante il checkout:', error.message);
      alert('Si è verificato un errore durante il checkout. Si prega di riprovare più tardi.');
    }
  };

  const totalAmount = currentCartItems.reduce((total, currentItem) => total + currentItem.price, 0);

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={8}>
          <h2>Il tuo Carrello</h2>
          {currentCartItems.map((item) => (
            <Row key={item.asin} className={`cart-item ${selectedItems.includes(item.asin) ? 'selected' : ''}`} onClick={() => handleToggleSelected(item.asin)}>
              <Col xs={8}>
                <p>{item.title} - {item.price} €</p>
              </Col>
              <Col xs={4}>
                <Button variant="danger" onClick={(e) => { e.stopPropagation(); removeFromCart(item.asin); }}>Rimuovi</Button>
              </Col>
            </Row>
          ))}
          {currentCartItems.length === 0 && <p>Il tuo carrello è vuoto.</p>}
          <Button variant="success" disabled={selectedItems.length === 0} onClick={handleCheckout}>Acquista selezionati</Button>
        </Col>
        <Col xs={12} md={4}>
          <h2 className="text-center">Totale</h2>
          <h3 className="text-center">{totalAmount} €</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;




