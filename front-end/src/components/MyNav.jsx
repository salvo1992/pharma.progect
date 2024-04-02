import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
            <Link to="/about">
              <div className="nav-link">About</div>
            </Link>
            <Link to="/browse">
              <div className="nav-link">Browse</div>
            </Link>
          </Nav>
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
