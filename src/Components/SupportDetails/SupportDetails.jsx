import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './SupportDetails.css';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const SupportDetails = () => {
	return(
		<>
			<div className="support-details">
				<Container>
					<Row>
						<Col lg={4} md={6}>
							<div className="box">
								<div className="ribbon">For members only</div>
								<div className="icon">
									<FontAwesomeIcon icon={faPhone} />
								</div>
								<div className="text">
									<span>24/7 Support Number</span>
									<a href="tel:+14705704746">+1 (470) 570-4746</a>
								</div>
							</div>
						</Col>
						<Col lg={4} md={6}>
							<div className="box">
								<div className="icon">
									<FontAwesomeIcon icon={faEnvelope} />
								</div>
								<div className="text">
									<span>Support Email</span>
									<a href="mailto:rmsinstalls@residential.zendesk.com">rmsinstalls@residential.zendesk.com</a>
								</div>
							</div>
						</Col>
						<Col lg={4} md={6}>
							<div className="box">
								<div className="icon">
									<FontAwesomeIcon icon={faEnvelopeOpenText} />
								</div>
								<div className="text">
									<a href="/">Start Subscription for 24/7 Support</a>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<div className="btn-holder">
								<a href="/" className="chat">Chat With a Support Agent!</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default SupportDetails;