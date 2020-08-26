import React, { Component } from 'react'
import Navi from './Components/Navi'
import CategoryList from './Components/CategoryList'
import { Container, Row, Col } from 'reactstrap';
export default class App extends Component {
  render() {
    return (
      <div>
         <Container> 
         <Row>
          <Col> <Navi></Navi></Col>
        </Row>
        <Row>
          <Col xl="3"> <CategoryList/></Col>
          <Col  xl="9"> <CategoryList/></Col>
        </Row>
      
        
        
      
        </Container>

      </div>
    )
  }
}

