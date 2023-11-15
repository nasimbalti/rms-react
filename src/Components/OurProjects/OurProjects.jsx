import React from "react";
import { Link } from 'react-router-dom';

import '../../Components/OurProjects/OurProjects.css';
import { Container, Row, Col } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const OurProjects = () => {
	return (
		<>
			<div className="our-projects">
				<Container>
					<Row>
						<Col md={6} lg={4}>
							<div className="frame">
								<img src={require('../../img/module/our-projects/project-1.jpg')} className="img-fluid" alt="Project 1" loading="lazy" />
								<div className="caption">
									<h4>
										<span>TV Installation Audio Installation</span>
										<strong><Link to="portfolio-home-theater-acworth">Home Theater - Acworth - GA</Link></strong>
									</h4>
									<div className="location">
										<FontAwesomeIcon icon={faLocationDot} />
										<div className="txt">Acworth</div>
									</div>
								</div>
							</div>
						</Col>
						<Col md={6} lg={4}>
							<div className="frame">
								<img src={require('../../img/module/our-projects/project-2.jpg')} className="img-fluid" alt="Project 2" loading="lazy" />
								<div className="caption">
									<h4>
										<span>Home Theater Installation Audio Installation</span>
										<strong><Link to="portfolio-home-theater-installation">Home Theater Installation</Link></strong>
									</h4>
									<div className="location">
										<FontAwesomeIcon icon={faLocationDot} />
										<div className="txt">Suwanee</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default OurProjects;