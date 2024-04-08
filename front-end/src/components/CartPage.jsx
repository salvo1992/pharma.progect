import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Loading from './Loading';
import Error from './Error';

const CartPage = ({ cartItems }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentCartItems, setCurrentCartItems] = useState(cartItems || []);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);

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
      console.log('Checkout eseguito per gli elementi selezionati:', selectedItems);
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/checkout`, { items: currentCartItems }); // Invia l'intero oggetto carrello al backend
      // Non c'è bisogno di impostare checkoutItems
    } catch (error) {
      console.error('Errore durante il checkout:', error.message);
      setIsError(true);
      alert('Si è verificato un errore durante il checkout. Si prega di riprovare più tardi.');
    }
  };

  const totalAmount = currentCartItems.reduce((total, currentItem) => total + currentItem.price, 0);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/cartItems`);
        setPurchasedItems(response.data);
      } catch (error) {
        console.error('Errore durante il recupero dei prodotti acquistati:', error.message);
        setIsError(true);
      }
    };
    fetchPurchasedItems();
  }, []);
  
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={8}>
          <h2>Il tuo Carrello</h2>
          {isLoading && <Loading />}
          {isError && <Error />}
          {!isLoading && !isError && currentCartItems.map((item) => (
            <Row key={item.asin} className={`cart-item ${selectedItems.includes(item.asin) ? 'selected' : ''}`} onClick={() => handleToggleSelected(item.asin)}>
              <Col xs={8}>
                <p>{item.title} - {item.price} €</p>
              </Col>
              <Col xs={4}>
                <Button variant="danger" onClick={(e) => { e.stopPropagation(); removeFromCart(item.asin); }}>Rimuovi</Button>
              </Col>
            </Row>
          ))}
          {!isLoading && !isError && currentCartItems.length === 0 && <p>Il tuo carrello è vuoto.</p>}
          <Button variant="success" disabled={selectedItems.length === 0} onClick={handleCheckout}>Acquista selezionati</Button>
        </Col>
        <Col xs={12} md={4}>
          <h2 className="text-center">Totale</h2>
          <h3 className="text-center">{totalAmount} €</h3>
        </Col>
      </Row>

      {purchasedItems.length > 0 && (
        <Row className="mt-5">
          <Col>
            <h2>Prodotti acquistati:</h2>
            <ul>
              {purchasedItems.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartPage;







