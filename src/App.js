import './App.css';
import React from 'react';
import NavBar from './componentsGenerales/navBar/navBar'
import AdministradorDeTareas from './componentsGenerales/listaTareas/index'

import './componentsGenerales/cssGeneral/btn.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {

  return (
    <div className='App'>
      <NavBar></NavBar>

      <Container style={{ paddingTop: '10vh' }} fluid >

        <Col className="d-flex justify-content-center align-items-center">
          <Row>
            <AdministradorDeTareas />
          </Row>
        </Col>

      </Container>

    </div>
  )
}

export default App