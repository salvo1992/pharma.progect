import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa'; // Importiamo l'icona del check
import fantasy from '../data/fantasy.json';
import SingleBook from './SingleBook';
import './AllTheBooks.css'; // Importiamo il file CSS per lo stile

const AllTheBooks = ({ searchQuery, addToCart, isCartPage }) => { // Aggiungiamo la prop isCartPage
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggleSelected = (asin) => {
    if (selectedItems.includes(asin)) {
      setSelectedItems(selectedItems.filter(item => item !== asin));
    } else {
      setSelectedItems([...selectedItems, asin]);
    }
  };

  return (
    <Col md={12}>
      <Row className="g-5 mt-4">
        {fantasy
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((book) => {
            return (
              <Col xs={12} md={4} key={book.asin}>
                <div 
                  className={`book-wrapper ${selectedItems.includes(book.asin) ? 'selected' : ''}`}
                  onClick={() => handleToggleSelected(book.asin)}
                >
                  <SingleBook
                    book={book}
                    addToCart={addToCart}
                  />
                  {isCartPage && selectedItems.includes(book.asin) && ( // Mostreremo l'icona solo se siamo nella pagina del carrello e il prodotto è selezionato
                    <FaCheckCircle className="check-icon" />
                  )}
                </div>
              </Col>
            );
          })}
      </Row>
    </Col>
  );
};

export default AllTheBooks;




