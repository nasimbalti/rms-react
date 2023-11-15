import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

import '../../Components/GetAQuote/GetAQuote.css';

const GetAQuote = () => {
	return(
		<>
			<div className="get-quote">
				<Container>
					<Row>
						<Col md={6} className="d-md-flex justify-content-md-end">
							<div className="tel-area">
								<div className="ico"><FontAwesomeIcon icon={faPhoneVolume} /></div>
								<div className="txt">
									<span>Call Us Now</span>
									<a href="tel:4704563108">(470) 456-3108</a>
								</div>
							</div>
						</Col>
						<Col md={6} className="d-md-flex justify-content-md-center">
							<a href="#" className="btn">Get a Quote</a>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default GetAQuote;