import { Navbar, Container, Nav, Form, NavDropdown, FormControl, Button, Offcanvas } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function Navbarr() {
    return ( 
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <NavLink to="/">Logo</NavLink>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">

                    <NavLink to="/home">Home</NavLink>

                    <NavLink to="/about">About</NavLink>

                    <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                        Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
     );
}

export default Navbarr;