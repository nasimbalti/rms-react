import {Container, Row, Col } from 'react-bootstrap';
import '../../Components/Articles/Articles.css';

const Articles = () => {
	return(
		<>
			<div className="articles">
				<Container>
					<Row className="mt-md-5">
						<Col lg={6}>
							<div className="img">
								<img src={require('../../img/front/patient-entertainment-systems.png')} alt="patient entertainment systems" className="img-fluid" loading="lazy" />
							</div>
						</Col>
						<Col lg={6}>
							<h3>Patient Entertainment Systems</h3>
							<p>Our patient entertainment systems can improve patient satisfaction by providing access to high-quality content, such as TV shows, movies, and games, during their stay in the hospital. We offer various options, from wall-mounted displays to ceiling-mounted TVs designed to meet healthcare facilities' specific requirements. Our systems can also be integrated with hospital information systems (HIS) to enable patients to access their medical records, order meals, and request services on demand.</p>
						</Col>
					</Row>
					<Row className="flex-md-row-reverse my-md-5">
						<Col lg={6}>
							<div className="img">
								<img src={require('../../img/front/control-systems.jpg')} alt="Control System" className="img-fluid" loading="lazy" />
							</div>
						</Col>
						<Col lg={6}>
							<h3>Control Systems, Security, and Surveillance</h3>
							<p>Our control systems can help you manage all your audio, video, lighting, surveillance, and security systems from a central interface. Manage large video recordings with Luma Surveillance products, and control access to different locations with Yale smart locks. We work with Control4, a leading provider of automation and control solutions, to create a fully integrated and customized system that can streamline your operations and save you time and energy. With Control4, you can control your entire healthcare system using a smartphone, tablet, or remote control, even from a remote location.</p>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default Articles;