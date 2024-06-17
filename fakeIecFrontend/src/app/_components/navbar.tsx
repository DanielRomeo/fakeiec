import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import Link from 'next/link';
import Styles from './_styles/navbar.module.scss'

const MainNavbar = () => {

    return (
		<Navbar bg="light" expand="lg" className="shadow">
			<Container>
				<Link href="/" passHref>
					<Navbar.Brand>FAKE IEC APP</Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						
						<Nav.Link href="/votestats">Vote Statistics</Nav.Link>

						{/* <NavDropdown title="Province stats" id="basic-nav-dropdown">
							<NavDropdown.Item href="/features">Limpopo</NavDropdown.Item>
							<NavDropdown.Item href="/contact">Gautent</NavDropdown.Item>
							<NavDropdown.Item href="/contact">Northern Cape</NavDropdown.Item>
						</NavDropdown> */}
						
						{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="/features">Features</NavDropdown.Item>
							<NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>

					<nav className="mx-auto">
						<Button className={` shadow-lg border-0 rounded-0 ${Styles.githubButton}`}>
							<Link className={`${Styles.link}`} href="https://github.com/danielromeo/fakeiec">Github</Link>
						</Button>
					</nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
    );
  };
  
  export default MainNavbar;
  
