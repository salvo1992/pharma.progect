import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
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
          </Card.Body>
        </Card>
        <CommentArea asin={params.asin} />
      </Col>
    </Row>
  )
}

export default BookDetails
