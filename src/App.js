import './App.css';
import React from 'react';
import NavBar from './componentsGenerales/navBar/navBar'
import AdministradorDeTareas from './componentsGenerales/listaTareas/index'

import './componentsGenerales/cssGeneral/btn.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './componentsGenerales/card/Card';
const App = () => {

  return (
    <div className='App'>
      <NavBar></NavBar>

      <Container style={{ paddingTop: '10vh' }} fluid >

        <Col className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <AdministradorDeTareas />
            </Col>
            <Col>

              <Card
                title='Administrador De Tareas'
                descripcion='Asigna tareas pendientes o por realizar, creado con React Js'
                link='Tecnologias usadas →'
              />


              <Card
                title='Administrador De Tareas'
                descripcion='Asigna tareas pendientes o por realizar, creado con React Js'
                link='Tecnologias usadas →'
              />


              <Card
                title='Administrador De Tareas'
                descripcion='Asigna tareas pendientes o por realizar, creado con React Js'
                link='Tecnologias usadas →'
              />



            </Col>
          </Row>
        </Col>

      </Container>

    </div>
  )
}

export default App