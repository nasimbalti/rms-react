import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import '../NavBar/NavBar.css';

const NavBar = () => {
	const [isNavActive, setIsNavActive] = useState(false);
	const toggleNavActive = () => {
		setIsNavActive(!isNavActive);
	};

	const [residentialDropdown, setResidentialDropdown] = useState(false);
	const [businessDropdown, setBusinessDropdown] = useState(false);

	const showResidentialDropdown = () => {
		setResidentialDropdown(true);
		setBusinessDropdown(false);
	};

	const hideResidentialDropdown = () => {
		setResidentialDropdown(false);
	};

	const showBusinessDropdown = () => {
		setBusinessDropdown(true);
		setResidentialDropdown(false);
	};

	const hideBusinessDropdown = () => {
		setBusinessDropdown(false);
	};

	const [isScrollDisabled, setIsScrollDisabled] = useState(false);

	const toggleScroll = () => {
		setIsScrollDisabled(!isScrollDisabled);

		if (!isScrollDisabled) {
		document.body.classList.add('no-scroll');
		} else {
		document.body.classList.remove('no-scroll');
		}
	};

	const handleButtonToggle = () => {
		toggleScroll();
		toggleNavActive();
	};

	return(
		<>
			<Navbar expand="lg" className={isNavActive ? 'nav-active' : ''}>
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleButtonToggle}>
						<span class="bar"></span>
						<span class="bar"></span>
						<span class="bar"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHouse} /></Nav.Link>
							<NavDropdown title="Residential" id="basic-nav-dropdown" show={residentialDropdown} onMouseEnter={showResidentialDropdown} onMouseLeave={hideResidentialDropdown}>
								<NavDropdown.Item as={Link} to="/wireless-network-ethernet-installation">Wireless Network &amp; Ethernet</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/home-automation-services">Home Automation</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/home-theater-installation">Home Theater Installation</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/tv-installation-services">TV Installation</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/audio-installation-services">Audio Installation</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/multi-room-audio-installations">Multi Room Audio</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/video-distribution-installation">Video Distribution</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/outdoor-entertainment-installation">Outdoor Entertainment</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/surveillance-installation">Surveillance Installation</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Business Solutions" id="basic-nav-dropdown-2" show={businessDropdown} onMouseEnter={showBusinessDropdown} onMouseLeave={hideBusinessDropdown}>
								<NavDropdown.Item as={Link} to="/worship">Worship</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/healthcare">Healthcare</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/retail">Retail</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/corporate">Corporate</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/hospitality">Hospitality</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/education">Education</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/government">Government</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
							<Nav.Link as={Link} to="/careers">Careers</Nav.Link>
							<Nav.Link as={Link} to="/blog">Blog</Nav.Link>
							<Nav.Link as={Link} to="/we-lead">We Lead</Nav.Link>
							<Nav.Link as={Link} to="/support">Support</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default NavBar;