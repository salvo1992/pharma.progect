import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import fantasy from '../data/fantasy.json'

const BookDetails = () => {
  const params = useParams()
  const foundBook = fantasy.find((book) => book.asin === params.asin)

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <Card>
          <Card.Img variant="top" src={foundBook.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {foundBook.title}
            </Card.Title>
            <Card.Text style={{ color: 'black' }}>
              {foundBook.TextL}
              </Card.Text>
              <Card.Text style={{ color: 'red' }}>Availability   :  
              {foundBook.availability}
              </Card.Text>{}
              <Card.Text>Prezzo: €{foundBook.price}</Card.Text> {/* Inserimento del prezzo */}
           </Card.Body>
        </Card>
       </Col>
    </Row>
  )
}

export default BookDetails
