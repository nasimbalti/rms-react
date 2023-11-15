import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

import './FAQ.css';

const FAQ = () => {
	return(
		<>
			<div className="faq-area">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="frame">
								<h3>FAQs</h3>
								<Accordion defaultActiveKey="0">
									<Accordion.Item eventKey="0">
										<Accordion.Header>I want to mount my TV onto the wall and hide my wires do I need to hire an electrician to install a power outlet?</Accordion.Header>
										<Accordion.Body>
											Yes. Our staff are certified licensed electricians and we recommend that you install a power outlet behind the TV.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="1">
										<Accordion.Header>Do I need to purchase the mounting bracket or HDMI cables before my scheduled appointment?</Accordion.Header>
										<Accordion.Body>
											We recommend that we supply the hardware needed so there are no complications during the install.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="2">
										<Accordion.Header>I have windows directly opposite where I want to mount my TV. should I be concerned with glare from screen?</Accordion.Header>
										<Accordion.Body>
											When you mount the TV we recommend that you use a mount that is not stationary. Preferably a tilt or an articulating bracket. This helps to eliminate glare most of the time.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="3">
										<Accordion.Header>I want to mount my TV onto the wall and hide my wires do I need to hire an electrician to install a power outlet?</Accordion.Header>
										<Accordion.Body>
											Yes. Our staff are certified licensed electricians and we recommend that you install a power outlet behind the TV.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="4">
										<Accordion.Header>Can my audio equipment get connected when I schedule my TV installed?</Accordion.Header>
										<Accordion.Body>
											Yes. Let us know prior to the appointment. There is a up charge, the price is determined if you have a sound bar or a traditional surround sound system.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="5">
										<Accordion.Header>I have not purchased my equipment and I am not sure what to purchase?</Accordion.Header>
										<Accordion.Body>
											With so many options to choose from, we understand that this may be an overwhelming process. We offer a wide range of products from many vendors and our sales staff are very knowledgeable and are qualified to point you to the right direction.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="6">
										<Accordion.Header>I am moving and I do not have TV or internet service. Who should I select?</Accordion.Header>
										<Accordion.Body>
											DIRECTV/AT&T offer the best quality image and data connection amongst the competition. We can conveniently schedule an appointment to install any of their services. We offer cable/satellite and internet service installation.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="7">
										<Accordion.Header>I live in a rural area and my internet connection is very slow. I am concerned that my internet connected devices will not work.</Accordion.Header>
										<Accordion.Body>
											We would recommend satellite internet. The connection speeds can reach as high as other cable providers. Our technicians are trained to install the equipment through VIASAT.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="8">
										<Accordion.Header>What form payment do you accept?</Accordion.Header>
										<Accordion.Body>
											Every form of payment excluding checks.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="9">
										<Accordion.Header>Do I need to purchase the mounting bracket or HDMI cables before my scheduled appointment?</Accordion.Header>
										<Accordion.Body>
											We recommend that we supply the hardware needed so there are no complications during the install.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="10">
										<Accordion.Header>Can my audio equipment get connected when I schedule my TV installed?</Accordion.Header>
										<Accordion.Body>
											Yes. Let us know prior to the appointment. There is a up charge, the price is determined if you have a sound bar or a traditional surround sound system.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="11">
										<Accordion.Header>I have not purchased my equipment and I am not sure what to purchase?</Accordion.Header>
										<Accordion.Body>
											With so many options to choose from, we understand that this may be an overwhelming process. We offer a wide range of products from many vendors and our sales staff are very knowledgeable and are qualified to point you to the right direction.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="12">
										<Accordion.Header>I am moving and I do not have TV or internet service. Who should I select?</Accordion.Header>
										<Accordion.Body>
											DIRECTV/AT&T offer the best quality image and data connection amongst the competition. We can conveniently schedule an appointment to install any of their services. We offer cable/satellite and internet service installation.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="13">
										<Accordion.Header>I live in a rural area and my internet connection is very slow. I am concerned that my internet connected devices will not work.</Accordion.Header>
										<Accordion.Body>
											We would recommend satellite internet. The connection speeds can reach as high as other cable providers. Our technicians are trained to install the equipment through VIASAT.
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default FAQ;