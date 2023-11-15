import {Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import React from 'react';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import '../HomeTab/HomeTab.css';

// Residential Services Images Path:
import ResSerImg1 from '../../img/module/residential-services/networking-solution.jpg';
import ResSerImg2 from '../../img/module/residential-services/automation-solution.jpg';
import ResSerImg3 from '../../img/module/residential-services/home-theater-installation-min.jpg';
import ResSerImg4 from '../../img/module/residential-services/tv-install-thumbnail.jpg';
import ResSerImg5 from '../../img/module/residential-services/audio-installation-thumb.jpg';
import ResSerImg6 from '../../img/module/residential-services/audio-service.jpg';
import ResSerImg7 from '../../img/module/residential-services/video-distribution.jpg';
import ResSerImg8 from '../../img/module/residential-services/outdoor.jpg';
import ResSerImg9 from '../../img/module/residential-services/surveillance.jpg';

// Business Solution Images Path:
import BusSolImg1 from '../../img/module/business-solutions/worship-solution.jpg';
import BusSolImg2 from '../../img/module/business-solutions/healthcare-solution.jpg';
import BusSolImg3 from '../../img/module/business-solutions/retail-solution.jpg';
import BusSolImg4 from '../../img/module/business-solutions/corporate-solution.jpg';
import BusSolImg5 from '../../img/module/business-solutions/hospitality-solution.jpg';
import BusSolImg6 from '../../img/module/business-solutions/education-solution.jpg';
import BusSolImg7 from '../../img/module/business-solutions/government-solution.jpg';

// Residential Services Titles:
const ResSerTitle1 = "Wireless Network & Ethernet";
const ResSerTitle2 = "Home Automation";
const ResSerTitle3 = "Home Theater Installation";
const ResSerTitle4 = "TV Installation";
const ResSerTitle5 = "Audio Installation";
const ResSerTitle6 = "Multi Room Audio";
const ResSerTitle7 = "Video Distribution";
const ResSerTitle8 = "Outdoor Entertainment";
const ResSerTitle9 = "Surveillance Installation";

// Business Solution Titles:
const BusSolTitle1 = "Worship";
const BusSolTitle2 = "Healthcare";
const BusSolTitle3 = "Retail";
const BusSolTitle4 = "Corporate";
const BusSolTitle5 = "Hospitality";
const BusSolTitle6 = "Education";
const BusSolTitle7 = "Government";

const HomeTab = () => {
	return(
		<>
			<div className="tab-area">
				<Container fluid>
					<Row>
						<Col sm={12}>
							<Tabs defaultActiveKey="residential" id="tab-1" className="container justify-content-center" >
								<Tab eventKey="residential" title="Residential Services">
									<Row className="holder">
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={ResSerImg1} alt={ResSerTitle1} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{ResSerTitle1}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={ResSerImg2} alt={ResSerTitle2} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{ResSerTitle2}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={ResSerImg3} alt={ResSerTitle3} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{ResSerTitle3}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={ResSerImg4} alt={ResSerTitle4} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{ResSerTitle4}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={ResSerImg5} alt={ResSerTitle5} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{ResSerTitle5}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={ResSerImg6} alt={ResSerTitle6} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{ResSerTitle6}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={ResSerImg7} alt={ResSerTitle7} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{ResSerTitle7}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={ResSerImg8} alt={ResSerTitle8} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{ResSerTitle8}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={ResSerImg9} alt={ResSerTitle9} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{ResSerTitle9}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
									</Row>
								</Tab>
								<Tab eventKey="business" title="Business Solutions">
									<Row className="holder add">
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={BusSolImg1} alt={BusSolTitle1} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{BusSolTitle1}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={BusSolImg2} alt={BusSolTitle2} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{BusSolTitle2}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={BusSolImg3} alt={BusSolTitle3} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{BusSolTitle3}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={BusSolImg4} alt={BusSolTitle4} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{BusSolTitle4}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={BusSolImg5} alt={BusSolTitle5} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{BusSolTitle5}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={BusSolImg6} alt={BusSolTitle6} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{BusSolTitle6}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
										<Col>
											<div className="box">
												<a href="/" target="_blank">
													<img src={BusSolImg7} alt={BusSolTitle7} loading="lazy" />
												</a>
												<div className="caption">
													<strong className="sub-title"><a href="/" target="_blank">{BusSolTitle7}</a></strong>
													<div className="ico-holder"><a href="/"><i className="ico"><FontAwesomeIcon icon={faAngleRight} /></i></a></div>
												</div>
											</div>
										</Col>
									</Row>
								</Tab>
							</Tabs>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default HomeTab;