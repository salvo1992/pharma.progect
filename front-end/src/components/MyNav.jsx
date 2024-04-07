import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'; // Importa l'icona utente da react-icons/fa
import { FaShoppingCart } from 'react-icons/fa'; // Importa l'icona del carrello da react-icons/fa

const MyNav = ({ searchQuery, setSearchQuery }) => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-3"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>PHARMA</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <div className="nav-link">Home</div>
            </Link>
            <Link to="/CommentPage">
              <div className="nav-link">AddComments</div>
            </Link>
            <Link to="/ContactList">
              <div className="nav-link">Contact</div>
            </Link>
          </Nav>
          <Navbar.Brand as={Link} to="/Userpage">
        {/* Icona utente */}
        <FaUser size={25} style={{ marginRight: '5px' }} />
        </Navbar.Brand>
      <Navbar.Brand as={Link} to="/CartPage">
        {/* Icona del carrello */}
        <FaShoppingCart size={30} style={{ marginRight: '5px' }} />
      </Navbar.Brand>
          <Nav className="ms-auto">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un farmaco"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
