import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../../assets/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Landing react strapi
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;