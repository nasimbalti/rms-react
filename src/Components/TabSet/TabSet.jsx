import {Row, Col, Tab, Nav, Container } from 'react-bootstrap';

import '../../Components/TabSet/TabSet.css';

const TabSet = () => {
	return (
		<>
			<div className="tab-holder">
				<Container>
					<Tab.Container id="tabs" defaultActiveKey="first">
						<Row>
							<Col lg={8}>
								<div className="nav-wrap">
									<div className="img-left">
										<img className="img-fluid" src={require('../../img/front/building-map.png')} alt="Building Map" loading="lazy" />
									</div>
									<Nav variant="pills" className="flex-column">
										<Nav.Item>
											<Nav.Link eventKey="first">
												<i className="ico"></i>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="second">
												<i className="ico teach"></i>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="third">
												<i className="ico rooms"></i>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="fourth">
												<i className="ico faculty"></i>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="fifth">
												<i className="ico public"></i>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="sixth">
												<i className="ico cafe"></i>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="seventh">
												<i className="ico outdoor"></i>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="eighth">
												<i className="ico class"></i>
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</div>
							</Col>
							<Col lg={4}>
								<Tab.Content>
									<Tab.Pane eventKey="first">
										<div className="content">
											<div className="holder">
												<div className="icon">
													<i className="ico"></i>
												</div>
												<div className="txt">
													<h4>Campus Wide</h4>
													<p>All-in-One LED Signage</p>
												</div>
											</div>
											<div className="img">
												<img className="img-fluid" src={require('../../img/front/campus-wide-product.jpg')} alt="LED Signage" loading="lazy" />
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="second">
										<div className="content">
											<div className="holder">
												<div className="icon">
													<i className="ico teach"></i>
												</div>
												<div className="txt">
													<h4>Teacher Desks</h4>
													<p>gram Laptop</p>
												</div>
											</div>
											<div className="img">
												<img className="img-fluid"  src={require('../../img/front/teacher-desk-product.jpg')} alt="Teacher Desks" loading="lazy" />
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="third">
										<div className="content">
											<div className="holder">
												<div className="icon">
													<i className="ico rooms"></i>
												</div>
												<div className="txt">
													<h4>Conference Rooms</h4>
													<p>LAAF Series <br />Commercial Lite Displays <br />UL Series</p>
												</div>
											</div>
											<div className="img">
												<img className="img-fluid"  src={require('../../img/front/conference-product.jpg')} alt="conference product" loading="lazy" />
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="fourth">
										<div className="content">
											<div className="holder">
												<div className="icon">
													<i className="ico faculty"></i>
												</div>
												<div className="txt">
													<h4>Faculty Offices</h4>
													<p>34” IPS QHD UltraWide™ Curved Monitor</p>
												</div>
											</div>
											<div className="img">
												<img className="img-fluid"  src={require('../../img/front/faculty-product.jpg')} alt="faculty product" loading="lazy" />
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="fifth">
										<div className="content">
											<div className="holder">
												<div className="icon">
													<i className="ico public"></i>
												</div>
												<div className="txt">
													<h4>Public Spaces</h4>
													<p>LAE Series</p>
												</div>
											</div>
											<div className="img">
												<img className="img-fluid"  src={require('../../img/front/public-spaces-product.jpg')} alt="public spaces product" loading="lazy" />
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="sixth">
										<div className="content">
											<div className="holder">
												<div className="icon">
													<i className="ico cafe"></i>
												</div>
												<div className="txt">
													<h4>Cafeteria</h4>
													<p>Ultra Stretch Digital Signage</p>
												</div>
											</div>
											<div className="img">
												<img className="img-fluid"  src={require('../../img/front/cafeteria-product.jpg')} alt="cafeteria product" loading="lazy" />
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="seventh">
										<div className="content">
											<div className="holder">
												<div className="icon">
													<i className="ico outdoor"></i>
												</div>
												<div className="txt">
													<h4>Outdoor/Arenas</h4>
													<p>High Brightness Outdoor Displays</p>
												</div>
											</div>
											<div className="img">
												<img className="img-fluid"  src={require('../../img/front/outdoor-arena-product.jpg')} alt="Outdoor Arenas" loading="lazy" />
											</div>
											<div className="img">
												<img className="img-fluid"  src={require('../../img/front//k-12-carousel-4b.jpg')} alt="Banner" loading="lazy" />
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="eighth">
										<div className="content">
											<div className="holder">
												<div className="icon">
													<i className="ico class"></i>
												</div>
												<div className="txt">
													<h4>Classrooms</h4>
													<p>Interactive and Non-Interactive Displays <br /> ProBeam Laser Projectors US Series UHD Commercial TVs</p>
												</div>
											</div>
											<div className="img">
												<img className="img-fluid"  src={require('../../img/front/classroom-product.jpg')} alt="classroom product" loading="lazy" />
											</div>
										</div>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</Container>
			</div>
		</>
	)
}
export default TabSet;