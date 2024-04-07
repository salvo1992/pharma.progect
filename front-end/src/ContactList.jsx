import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const contacts = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St, City', dob: '1985-05-20' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', address: '456 Elm St, Town', dob: '1990-10-15' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-555-5555', address: '789 Oak St, Village', dob: '1978-12-01' }
];

function ContactList() {
  return (
    <Container style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
      <header>
        <h1>Contact List</h1>
        <p>Welcome to our contact list. Below you'll find information about our contacts.</p>
      </header>
      <main>
        <Row>
          {contacts.map(contact => (
            <Col key={contact.id} xs={12} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`https://picsum.photos/200/150?random=${contact.id}`} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{contact.name}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Email: {contact.email}</ListGroup.Item>
                    <ListGroup.Item>Phone: {contact.phone}</ListGroup.Item>
                    <ListGroup.Item>Address: {contact.address}</ListGroup.Item>
                    <ListGroup.Item>Date of Birth: {new Date(contact.dob).toLocaleDateString()}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </main>
      <footer>
        <p> - Developed by PHARMA</p>
      </footer>
    </Container>
  );
}

export default ContactList;
