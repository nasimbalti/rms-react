import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './ContactServiceModule.css';

const RegisterModule = () => {
	return(
		<>
			<div className="contact-services">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="form-holder">
								<Form>
									<Row>
										<Col xs={12} md={6}>
											<Form.Control placeholder="First name*" />
										</Col>
										<Col xs={12} md={6}>
											<Form.Control placeholder="Last name*" />
										</Col>
									</Row>
									<Row>
										<Col xs={12} md={6}>
											<Form.Control placeholder="Email*" />
										</Col>
										<Col xs={12} md={6}>
											<Form.Control placeholder="Phone" />
										</Col>
									</Row>
									<Row>
										<h4>Is the Location Business Or Residential</h4>
									</Row>
									<Row>
										<Col>
											<Form.Check inline type="checkbox" id="residential" label="Residential" />
											<Form.Check inline type="checkbox" id="business" label="Business" />
										</Col>
									</Row>
									<Row>
										<h5>Select Services</h5>
									</Row>
									<Row>
										<Col xs={12} md={6}>
											<Form.Check inline type="checkbox" id="wireless-network-and-ethernet" label="Wireless Network & Ethernet" />
										</Col>
										<Col xs={12} md={6}>
											<Form.Check inline type="checkbox" id="home-automation" label="Home Automation" />
										</Col>
									</Row>
									<Row>
										<Col xs={12} md={6}>
											<Form.Check inline type="checkbox" id="home-theater-installation" label="Home Theater Installation" />
										</Col>
										<Col xs={12} md={6}>
											<Form.Check inline type="checkbox" id="tv-installation" label="TV Installation" />
										</Col>
									</Row>
									<Row>
										<Col xs={12} md={6}>
											<Form.Check inline type="checkbox" id="audio-installation" label="Audio Installation" />
										</Col>
										<Col xs={12} md={6}>
											<Form.Check inline type="checkbox" id="multi-room-audio" label="Multi Room Audio" />
										</Col>
									</Row>
									<Row>
										<Col xs={12} md={6}>
											<Form.Check inline type="checkbox" id="video-distribution" label="Video Distribution" />
										</Col>
										<Col xs={12} md={6}>
											<Form.Check inline type="checkbox" id="outdoor-entertainment" label="Outdoor Entertainment" />
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Check inline type="checkbox" id="surveillance-installation" label="Surveillance Installation" />
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Control as="textarea" rows={3} placeholder="Your Address" />
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group controlId="ControlSelect1">
												<Form.Label>Select State</Form.Label>
												<Form.Select>
													<option value="AL">Alabama</option>
													<option value="AS">American Samoa</option>
													<option value="AZ">Arizona</option>
													<option value="AR">Arkansas</option>
													<option value="CA">California</option>
													<option value="CO">Colorado</option>
													<option value="CT">Connecticut</option>
													<option value="DE">Delaware</option>
													<option value="DC">District Of Columbia</option>
													<option value="FM">Federated States Of Micronesia</option>
													<option value="FL">Florida</option>
													<option value="GA" selected="">Georgia</option>
													<option value="GU">Guam</option>
													<option value="HI">Hawaii</option>
													<option value="ID">Idaho</option>
													<option value="IL">Illinois</option>
													<option value="IN">Indiana</option>
													<option value="IA">Iowa</option>
													<option value="KS">Kansas</option>
													<option value="KY">Kentucky</option>
													<option value="LA">Louisiana</option>
													<option value="ME">Maine</option>
													<option value="MH">Marshall Islands</option>
													<option value="MD">Maryland</option>
													<option value="MA">Massachusetts</option>
													<option value="MI">Michigan</option>
													<option value="MN">Minnesota</option>
													<option value="MS">Mississippi</option>
													<option value="MO">Missouri</option>
													<option value="MT">Montana</option>
													<option value="NE">Nebraska</option>
													<option value="NV">Nevada</option>
													<option value="NH">New Hampshire</option>
													<option value="NJ">New Jersey</option>
													<option value="NM">New Mexico</option>
													<option value="NY">New York</option>
													<option value="NC">North Carolina</option>
													<option value="ND">North Dakota</option>
													<option value="MP">Northern Mariana Islands</option>
													<option value="OH">Ohio</option>
													<option value="OK">Oklahoma</option>
													<option value="OR">Oregon</option>
													<option value="PW">Palau</option>
													<option value="PA">Pennsylvania</option>
													<option value="PR">Puerto Rico</option>
													<option value="RI">Rhode Island</option>
													<option value="SC">South Carolina</option>
													<option value="SD">South Dakota</option>
													<option value="TN">Tennessee</option>
													<option value="TX">Texas</option>
													<option value="UT">Utah</option>
													<option value="VT">Vermont</option>
													<option value="VI">Virgin Islands</option>
													<option value="VA">Virginia</option>
													<option value="WA">Washington</option>
													<option value="WV">West Virginia</option>
													<option value="WI">Wisconsin</option>
													<option value="WY">Wyoming</option>
													<option value="AE">Armed Forces Africa</option>
													<option value="AA">Armed Forces Americas</option>
													<option value="AP">Armed Forces Pacific</option>
												</Form.Select>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Control as="textarea" rows={3} placeholder="Your Message" />
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Check inline type="checkbox" id="terms-agree" label="I agree to receive SMS text for proposal and updates on my project." />
										</Col>
									</Row>
									<Row>
										<Col>
											<Button type="submit" className="btn-submit" size="lg">Send</Button>
										</Col>
									</Row>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default RegisterModule;