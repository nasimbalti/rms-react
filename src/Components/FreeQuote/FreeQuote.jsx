import { Container, Row, Col } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../../Components/FreeQuote/FreeQuote.css';

const FreeQuote = () => {
	return (
		<>
			<div className="free-quote">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="frame">
								<h3>Have any Question?</h3>
								<p>We're here to help. Send us an email or call us at:</p>
								<div className="txt">
									<a className="tel" href="tel:4704563108">(470) 456-3108</a>
								</div>
								<div className="btn-holder">
									<a href="#" className="btn">
										<FontAwesomeIcon icon={faEnvelope} />
										<span>Get A Free Quote</span>
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default FreeQuote;