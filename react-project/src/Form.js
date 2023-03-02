import './App.css';
import {Header} from './header';
import {useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Form(props) {

  const movieTitle = useRef();
  const releaseDate = useRef();
  const actors = useRef();
  const poster = useRef();
  const rating = useRef();

  const enterURL = (evt)=>{
    evt.preventDefault();
    document.getElementById('poster').classList.toggle('hide');
  }
  
  return (
    <div>
      <Header />
      <Container fluid='sm' class=''>
        <form method="post" encType='multipart/form-data'>
          <Row><Col><label>Title: </label></Col><Col><input name='title' ref={movieTitle} type="text"/></Col></Row>
          <Row><Col><label>Release Date: </label></Col><Col><input name='releaseDate' ref={releaseDate} type="date"/></Col></Row>
          <Row><Col><label>Actors (Separate names with ','): </label></Col><Col><input name='actors' ref={actors} type="text"/></Col></Row>
          <Row>
            <Col>
              <label>Image:</label>
            </Col>
            <Col>
              <select id="posterInput" onChange={enterURL}>
                <option value="placeholder">Placeholder</option>
                <option value="imageLink">Provide File</option>
              </select>
                <span id="poster" className="hide">
                    <input name='img' ref={poster} type="file" accept="image/png, image/jpeg"/>
                </span>
            </Col>
          </Row>
          <Row><Col><label>Rating /5: </label></Col><Col><input name='rating' ref={rating} type="text"/></Col></Row>
          <input type='submit' value='Submit'/>
        </form>
      </Container>
    </div>
  );
}