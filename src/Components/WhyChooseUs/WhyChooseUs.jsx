import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faCheck } from '@fortawesome/free-solid-svg-icons';


import '../../Components/WhyChooseUs/WhyChooseUs.css';

const WhyChooseUs = () => {
	return(
		<>
			<div className="why-choose-us">
				<Container>
					<Row className="mb-4">
						<Col sm={12}>
							<h3>Why Choose RMS Installs?</h3>
							<ul className="list">
								<li><FontAwesomeIcon icon={faCircleRight} /> <strong>Experience:</strong> Our team has extensive experience and knowledge in designing, installing, and maintaining networks of all sizes. We are certified in the latest networking technologies and can help you select the right equipment for your needs.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /> <strong>Quality:</strong> We only use high-quality equipment from trusted brands to ensure your network is reliable and secure.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /> <strong>Customer Service:</strong> Our team is dedicated to providing excellent customer service and support. We will work with you to ensure your network meets your needs and provides the required reliability and security.</li>
							</ul>
							<p>Don't wait any longer to get the reliable and secure network you need. Contact us today to learn more about our network installation services and to schedule a consultation with our team.</p>
						</Col>
					</Row>
					<Row>
						<Col lg={4}>
							<div className="box">
								<div className="icon">
									<i className="ico"></i>
								</div>
								<h4>Our Guarantee</h4>
							</div>
						</Col>
						<Col lg={4}>
							<a href="#" className="box">
								<div className="icon">
									<i className="ico support"></i>
								</div>
								<h4>Extended Product Support with RMS Care+</h4>
							</a>
						</Col>
						<Col lg={4}>
							<div className="box">
								<div className="icon">
									<i className="ico certified"></i>
								</div>
								<h4>Certified Professionals</h4>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default WhyChooseUs;