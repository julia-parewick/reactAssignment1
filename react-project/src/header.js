import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

function Header(){
    return(
      <Container fluid='true'>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Movie Reviews</Navbar.Brand>
            <Nav className="me-auto">
              <Col sm={10}><Link to="/">View Movies</Link></Col>
              <Col><Link to="/submit">Submit</Link></Col>
            </Nav>
          </Navbar>
      </Container>
    )
  }