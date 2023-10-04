import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h1 className='text-center'>Featured Listed Property</h1>
          <p className='text-center'>Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be...</p>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Header;
