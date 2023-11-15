import {Container, Row, Col, ListGroup } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faArrowRight, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlusG, faFacebookF, faYelp, faInstagram, faYoutube, faHouzz } from '@fortawesome/free-brands-svg-icons';

import '../Header/Header.css';
import logo from '../../img/rms_logo.png';

import NavBar from '../NavBar/NavBar';

const Header = (props) => {
	return(
		<>
			<header id="header" className={`header ${props.className}`}>
				<div className="header-t">
					<Container>
						<Row className="align-items-center justify-content-between">
							<Col xxl={6} xl={8} lg={7} md={9}>
								<ListGroup horizontal as="ul">
									<ListGroup.Item as="li" className="call">
										<FontAwesomeIcon icon={faPhone} />
										<a href="tel:4704563108">(470) 456-3108</a>
									</ListGroup.Item>
									<ListGroup.Item as="li" className="quote">
										<Link to="/contact-service-user">Get a Quote <FontAwesomeIcon icon={faArrowRight} /></Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" className="signin">
										<Link to="/login"><FontAwesomeIcon icon={faRightToBracket} /> Sign In</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" className="signin">
										<Link to="/register"><FontAwesomeIcon icon={faUser} /> Register</Link>
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col xxl={6} xl={4} lg={5} md={3}>
								<div className="connect justify-content-end">
									<strong className="title">Connect With Us</strong>
									<ListGroup horizontal as="ul" className="get-social">
										<ListGroup.Item as="li" className="google">
											<a href="/"><FontAwesomeIcon icon={faGooglePlusG} /></a>
										</ListGroup.Item>
										<ListGroup.Item as="li" className="facebook">
											<a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
										</ListGroup.Item>
										<ListGroup.Item as="li" className="yelp">
											<a href="/"><FontAwesomeIcon icon={faYelp} /></a>
										</ListGroup.Item>
										<ListGroup.Item as="li" className="instagram">
											<a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
										</ListGroup.Item>
										<ListGroup.Item as="li" className="youtube">
											<a href="/"><FontAwesomeIcon icon={faYoutube} /></a>
										</ListGroup.Item>
										<ListGroup.Item as="li" className="houzz">
											<a href="/"><FontAwesomeIcon icon={faHouzz} /></a>
										</ListGroup.Item>
									</ListGroup>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="header-b">
					<Container>
						<Row>
							<Col md={2}>
								<strong className="logo">
									<Link to="/">
										<img src={logo} alt="RMS installs" width="165" height="90" loading="lazy" />
									</Link>
								</strong>
							</Col>
							<Col md={10} className="d-flex justify-content-end">
								<NavBar />
							</Col>
						</Row>
					</Container>
				</div>
			</header>
		</>
	)
}
export default Header;