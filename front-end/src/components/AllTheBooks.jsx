import React from 'react';
import { Col, Row } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';
import SingleBook from './SingleBook';

const AllTheBooks = ({ addToCart }) => {
  return (
    <Col md={12}>
      <Row className="g-5 mt-4">
        {fantasy.map((book) => {
          return (
            <Col xs={12} md={4} key={book.asin}>
              <SingleBook book={book} addToCart={addToCart} />
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

export default AllTheBooks;
