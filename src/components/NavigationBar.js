import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="sticky-top navbar-light bg-light">
            <Container className="border border-danger w-100 d-flex align-center justify-content-between">
                <Navbar.Brand href="#home" className="border">
                    <img
                        src="https://nimdee.com/static/media/nimdee-02%201.e4fc37bf.svg"
                        height="80"
                        className="d-inline-block border"
                        alt="Nimdee logo"
                    />
                </Navbar.Brand>
        
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto border border-primary">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#worksheet">Worksheet</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <NavDropdown className="border border-success" title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item> <Link to="/Admin">Admin </Link> </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
