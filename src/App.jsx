import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Display from "./Display";
import { useState } from "react";
function App() {
 
  const [isAddedToCart, setIsAddedToCart] = useState(true); 
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsAddedToCart(!isAddedToCart); 
    setCount(count + 1);
  };

  const handleRemove = () => {
    setIsAddedToCart(!isAddedToCart); 
    setCount(count - 1);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Popular Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  New Arrivals
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div>
              <button className="btn btn-outline-dark">Cart {count}</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="banner">
        <h1 className="head">Shop in Style</h1>
        <p className="para">With this shop hompage template</p>
      </div>
      <div className="cards">
        <Display
          isAddedToCart={isAddedToCart}
          handleClick={handleClick}
          handleRemove={handleRemove}
          setCount={setCount}
          count={count}
        />
      </div>
      <footer class="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
