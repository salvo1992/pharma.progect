import React, { useState, useEffect } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';

const AddReview = ({ productId }) => {
  const [review, setReview] = useState({
    shippingInfo: '',
    customerCode: '',
    invoiceEmail: '',
    phoneNumber: '',
    rate: 1,
    productId: null,
  });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReview((r) => ({
      ...r,
      productId: productId,
    }));
    fetchReviews();
  }, [productId]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error('Errore durante il recupero delle recensioni:', error);
    }
  };

  const sendReview = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/reviews`, review);
      if (response.status === 201) {
        alert('Recensione inviata!');
        setReview({
          shippingInfo: '',
          customerCode: '',
          invoiceEmail: '',
          phoneNumber: '',
          rate: 1,
          productId: null,
        });
        fetchReviews();
      }
    } catch (error) {
      alert('Qualcosa è andato storto');
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendReview}>
        <Form.Group className="mb-2">
          <Form.Label>Informazioni di spedizione, indirizzo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui l'indirizzo"
            value={review.shippingInfo}
            onChange={(e) =>
              setReview({
                ...review,
                shippingInfo: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Codice cliente</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il codice cliente"
            value={review.customerCode}
            onChange={(e) =>
              setReview({
                ...review,
                customerCode: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Email per la fattura</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui l'email per la fattura"
            value={review.invoiceEmail}
            onChange={(e) =>
              setReview({
                ...review,
                invoiceEmail: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Numero di telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il numero di telefono"
            value={review.phoneNumber}
            onChange={(e) =>
              setReview({
                ...review,
                phoneNumber: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Voto</Form.Label>
          <Form.Control
            as="select"
            value={review.rate}
            onChange={(e) =>
              setReview({
                ...review,
                rate: e.target.value,
              })
            }
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
      <div className="mt-3">
        <h2>Recensioni</h2>
        <div className="row">
          {reviews.map((review) => (
            <div key={review._id} className="col-md-4 mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Recensione</Card.Title>
                  <Card.Text>
                    <strong>Informazioni spedizione:</strong> {review.shippingInfo}<br />
                    <strong>Codice cliente:</strong> {review.customerCode}<br />
                    <strong>Email fattura:</strong> {review.invoiceEmail}<br />
                    <strong>Numero telefono:</strong> {review.phoneNumber}<br />
                    <strong>Voto:</strong> {review.rate}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddReview;


