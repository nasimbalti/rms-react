import '../TeleMedicine/TeleMedicine.css';

import {Container, Row, Col } from 'react-bootstrap';

const telemedicineTitle = "Telemedicine Solutions";
const telemedicineDescription  = "Our telemedicine solutions can help healthcare providers offer remote consultations and treatments to patients conveniently and cost-effectively. We offer various options, such as video conferencing systems and remote monitoring tools, that enable healthcare providers to diagnose and treat patients from anywhere. Our telemedicine solutions can also be integrated with electronic health records (EHRs) to enable seamless communication and collaboration between healthcare providers.";

const TeleMedicine = () => {
	return(
		<>
			<div className="tele-medicine">
				<Container>
					<Row>
						<Col sm={12}>
							<h3>{telemedicineTitle}</h3>
							<p>{telemedicineDescription}</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<div className="holder">
								<img src={require('../../img/front/telemedicine.jpg')} alt="TeleMedcine" loading="lazy" />
								<div className="caption">
									<h3>{telemedicineTitle}</h3>
									<p>{telemedicineDescription}</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default TeleMedicine;