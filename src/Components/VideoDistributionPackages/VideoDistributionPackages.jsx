import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import '../../Components/VideoDistributionPackages/VideoDistributionPackages.css';
const VideoDistributionPackages = (Props) => {

	return (
		<>
			<div className="video-distribution" id="video-distribution">
				<Container>
					<Row>
						<Col sm={12}>
							{/* Step-1 */}
							<div className="step-1">
								<div className="main-title">
									<h2>RMS Custom Video Distribution Package Builder</h2>
								</div>
								<div className="holder">
									<div className="col">
										<div className="inner-title">
											<h3>Creating Sources</h3>
										</div>
										<div className="holder">
											<div className="inner-col">
												<div className="frame">
													<Row className="mb-md-4 mb-2 align-items-center">
														<Col xs={4}>
															<img src={require('../../img/front/sat-boxes.png')} alt="cable" loading="lazy" />
														</Col>
														<Col xs={3}>
															<input type="number" class="form-control video_source" name="cable" min="0" value="0" id="cable" />
														</Col>
														<Col xs={5}>
															<label htmlFor="cable">Cable/Sat Boxes</label>
														</Col>
													</Row>
													<Row className="mb-md-4 mb-2 align-items-center">
														<Col xs={4}>
															<img src={require('../../img/front/streaming-media.png')} alt="streaming_media" loading="lazy" />
														</Col>
														<Col xs={3}>
															<input type="number" class="form-control video_source" name="streaming_media" min="0" value="0" id="streaming_media" />
														</Col>
														<Col xs={5}>
															<label htmlFor="streaming_media">Streaming Media</label>
														</Col>
													</Row>
													<Row className="mb-md-4 mb-2 align-items-center">
														<Col xs={4}>
															<img src={require('../../img/front/blu-ray-dvd.png')} alt="dvd" loading="lazy" />
														</Col>
														<Col xs={3}>
															<input type="number" class="form-control video_source" name="dvd" min="0" value="0" id="dvd" />
														</Col>
														<Col xs={5}>
															<label htmlFor="dvd">Blu-Ray/DVD</label>
														</Col>
													</Row>
													<Row className="mb-md-4 mb-2 align-items-center">
														<Col xs={4}>
															<img src={require('../../img/front/surveillance-nvr.png')} alt="nvr" loading="lazy" />
														</Col>
														<Col xs={3}>
															<input type="number" class="form-control video_source" name="nvr" min="0" value="0" id="nvr" />
														</Col>
														<Col xs={5}>
															<label htmlFor="nvr">Surveillance NVR</label>
														</Col>
													</Row>
													<Row className="mb-md-4 mb-2 align-items-center">
														<Col xs={4}>
															<img src={require('../../img/front/gaming-system.png')} alt="gaming system" loading="lazy" />
														</Col>
														<Col xs={3}>
															<input type="number" class="form-control video_source" name="gaming_system" min="0" value="0" id="gaming_system" />
														</Col>
														<Col xs={5}>
															<label htmlFor="gaming_system">Gaming System</label>
														</Col>
													</Row>
													<Row className="mb-md-4 mb-2 align-items-center">
														<Col xs={4}>
															<img src={require('../../img/front/others-icon.png')} alt="other" loading="lazy" />
														</Col>
														<Col xs={3}>
															<input type="number" class="form-control video_source" name="other" min="0" value="0" id="other" />
														</Col>
														<Col xs={5}>
															<label htmlFor="other">OTHER</label>
														</Col>
													</Row>
												</div>
											</div>
											<div className="inner-col">
												<div className="frame">
													<div className="videocount-box">
														<img src={require('../../img/front/hdmi-cable-icon.png')} alt="hdmi cable" loading="lazy" />
														<button class="spkaddlink add_source_btn">
															<span>Add Sources</span>
															<FontAwesomeIcon icon={faPlus} />
														</button>
													</div>
													<div className="roompricecount">
														<span>Total AV <br /> Sources:</span>
														<span className="media_sources">0 Media Sources</span>
													</div>
													<div className="roompricecount d-none">
														<span>Sub-Total:</span>
														<span className="source_total_price">$ 0.00</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="inner-title">
											<h3>Distribution System</h3>
										</div>
										<div className="holder">
											<div className="box">
												<div className="text">
													<p>Add all the media sources you want to access on any display, whether it's a TV or projector, throughout your house.</p>
												</div>
												<p>Then, you will create your rooms and we'll show you the best-suited options for your Distribution System:</p>
												<p><strong>Matrixes:</strong> Affordable, high-quality, and a fixed number of zones.</p>
												<p>Or, <strong>MoIP</strong> (Ethernet-based): Best quality, unlimited, easily upgradeable.</p>
											</div>
											<i className="semi-circle-left"></i>
										</div>
									</div>
								</div>
							</div>
							{/* Step-2 */}
							<div className="step-2 d-none">
								<div className="main-title">
									<button className="btn-back"></button>
									<h2>RMS Custom Video Distribution Package Builder</h2>
								</div>
								<div className="holder">
									<div className="col">
										<div className="inner-title">
											<input type="text" name="room_name" placeholder="Enter Your Room Name Here" class="form-control" id="room_name_custom" />
										</div>
										<div className="holder">
											<div className="inner-col">
												<div className="frame">
													<Row className="mb-md-4 mb-2">
														<Col xs={4}>
															<img src={require('../../img/front/tvs-in-room.png')} alt="tv creating" loading="lazy" />
														</Col>
														<Col xs={3}>
															<input type="number" class="form-control video_source" name="tv_creating_input" min="0" value="0" id="tv_creating_input" />
														</Col>
														<Col xs={5}>
															<label htmlFor="tv_creating_input">TVs in the Room</label>
														</Col>
													</Row>
													<Row className="mb-md-4 mb-2">
														<Col xs={4}>
															<img src={require('../../img/front/projectors-in-room.png')} alt="project creating" loading="lazy" />
														</Col>
														<Col xs={3}>
															<input type="number" class="form-control video_source" name="project_creating_input" min="0" value="0" id="project_creating_input" />
														</Col>
														<Col xs={5}>
															<label htmlFor="project_creating_input">Projectors in the Room</label>
														</Col>
													</Row>
													<div className="bg-gray">
														<Row>
															<Col md={5}>
																<h4>Wiring Scenario for HDMI signal</h4>
															</Col>
															<Col md={7}>
																<div className="radio-holder">
																	<Row>
																		<Col lg={6}>
																			<div className="radio-box">
																				<input type="radio" name="wiringSpeakers" value="Open Walls" id="open-walls" />
																				<label htmlFor="open-walls">Open Walls</label>
																			</div>
																		</Col>
																		<Col lg={6}>
																			<div className="radio-box">
																				<input type="radio" name="wiringSpeakers" value="Pre-Wired" id="prewired" />
																				<label htmlFor="prewired">Pre-Wired</label>
																			</div>
																		</Col>
																		<Col lg={12}>
																			<div className="radio-box">
																				<input type="radio" name="wiringSpeakers" value="Closed Walls, No Wires" id="closedwalls" />
																				<label htmlFor="closedwalls">Closed Walls, No Wires</label>
																			</div>
																		</Col>
																	</Row>
																</div>
															</Col>
														</Row>
													</div>
												</div>
											</div>
											<div className="inner-col">
												<div className="frame">
													<div className="videocount-box">
														<div className="speakercountbox">
															<div className="spkcount">
																<div className="txt">
																	<span className="room_tv_show">0 TVs</span>
																	<span className="room_projector_show">0 Pro</span>
																</div>
															</div>
														</div>
														<button class="spkaddlink add_source_btn">
															<span>Add Room</span>
															<FontAwesomeIcon icon={faPlus} />
														</button>
													</div>
													<div className="roompricecount">
														<span>Sub-Total:</span>
														<span className="media_sources">$ 0.00</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="inner-title">
											<h3>Rooms:</h3>
										</div>
										<div className="holder">
											<div className="box">
												<div className="text">
													<p>Add the Tv's and Projectors.</p>
													<p><strong>Matrixes:</strong> Affordable, high-quality, and a fixed number of zones.</p>
												</div>
												<p>Or, <strong>MoIP</strong> (Ethernet-based): Best quality, unlimited, easily upgradeable.</p>
											</div>
											<i className="semi-circle-left"></i>
										</div>
									</div>
								</div>
							</div>
							{/* Step-3 */}
							<div className="step-3 d-none">
								<div className="main-title">
									<button className="btn-back"></button>
									<h2>RMS Custom Video Distribution Package Builder</h2>
								</div>
								<div className="holder">
									<div className="col3">
										<div className="head">
											<h3>Sources and Outputs</h3>
										</div>
										<div className="frame">
											<h4>We will be integrating:</h4>
											<ul className="unlist input_media">
												<li><span className="num">0</span> Cable Box</li>
												<li><span className="num">0</span> Streaming Media</li>
												<li><span className="num">0</span> DVD/Blu-Ray</li>
												<li><span className="num">0</span> Surveillance NVR</li>
												<li><span className="num">0</span> Gaming System</li>
												<li><span className="num">0</span> Other devices</li>
											</ul>
											<h4>For signal distribution to:</h4>
											<ul className="unlist input_media">
												<li><span className="num">0</span> Rooms</li>
												<li><span className="num">0</span> TVs</li>
												<li><span className="num">0</span> Projector</li>
											</ul>
										</div>
									</div>
									<div className="col3">
										<div className="head">
											<h3>Distribution System</h3>
										</div>
										<div className="radio-wrap">
											<div className="radio-holder">
												<Row>
													<Col md={6}>
														<input type="radio" name="distributed_matrix_moip" id="moip" value="moip" />
														<label htmlFor="moip">MoIP</label>
													</Col>
													<Col md={6}>
														<input type="radio" name="distributed_matrix_moip" id="matrix" value="matrix" />
														<label htmlFor="matrix">Matrix</label>
													</Col>
												</Row>
											</div>
										</div>
										<div className="frame">
											<div className="wrap-box">
												<div className="txt-wrap">
													<p className="moip">Media over IP (MoIP) System</p>
													<p className="matrix d-none">Matrix</p>
												</div>
												<Row className="mb-md-5 mb-3">
													<Col lg={6}>
														<Row className="flex-md-row-reverse">
															<Col lg={6}>
																<label htmlFor="transmitters">Transmitters (Sources)</label>
															</Col>
															<Col lg={6}>
																<input type="number" name="transmitters" class="form-control" value="0" id="transmitters" min="0" />
															</Col>
														</Row>
													</Col>
													<Col lg={6}>
														<Row>
															<Col lg={6}>
																<label htmlFor="receivers">Receivers (Sources)</label>
															</Col>
															<Col lg={6}>
																<input type="number" name="receivers" class="form-control" value="0" id="receivers" min="0" />
															</Col>
														</Row>
													</Col>
												</Row>
												<div className="img">
													<img src={require('../../img/front/video-controller-1.jpg')} alt="video controller" loading="lazy" />
												</div>
											</div>
										</div>
										<i class="ico-arrow white"></i>
									</div>
									<div className="col3">
										<div className="head">
											<h3>Package Total</h3>
										</div>
										<div className="frame">
											<ul className="unlist bullet input_media">
												<li><span className="num">1</span> MoIP controller</li>
												<li><span className="num">1</span> Network Switch Layer 3</li>
												<li><span className="num">0</span> MoIP Transmitters</li>
												<li><span className="num">0</span> MoIP Receivers</li>
												<li><span className="num"></span> Ethernet Wiring</li>
												<li><span className="num"></span> MoIP System Setup</li>
											</ul>
											<div className="btn-holder"><button className="distributed_price">Book Now <br /> for $1,433.89</button></div>
										</div>
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
export default VideoDistributionPackages;