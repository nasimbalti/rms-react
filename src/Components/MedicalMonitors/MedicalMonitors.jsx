import '../../Components/MedicalMonitors/MedicalMonitors.css';
import { Container, Row, Col } from 'react-bootstrap';

const MedicalMonitors = ({ monitors, className }) => {
	return (
		<>
			<section className={`medical-area ${className || ''}`}>
				<Container>
					<Row>
						{monitors.map((monitor, index) => (
							<Col lg={4} key={index}>
								<div className="frame">
									<div className="img">
										<img src={monitor.image} alt={monitor.alt} loading="lazy" />
									</div>
									<strong className="title">{monitor.title}</strong>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</>
	)
}
export default MedicalMonitors;