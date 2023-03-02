import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {Link, NavLink} from 'react-router-dom';

export function Header(){
    return(
      <Container fluid='true'>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Movie Reviews</Navbar.Brand>
            <Nav className="me-auto">
              <Col sm={10}><NavLink to="/">View Movies</NavLink></Col>
              <Col><NavLink to="/submit">Submit</NavLink></Col>
            </Nav>
          </Navbar>
      </Container>
    )
  }