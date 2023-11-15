import '../TextOverlay/TextOverlay.css';

import {Container, Row, Col } from 'react-bootstrap';

const TextOverlay = (Props) => {
	return(
		<>
			<div className="text-overlay">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="holder">
								<img src={Props.imgURL} alt={Props.imgAltText} className="w-100 img-fluid" loading="lazy" />
								<div className={`caption ${Props.customClass}`}>
									<h3>{Props.title}</h3>
									<p>{Props.description}</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default TextOverlay;