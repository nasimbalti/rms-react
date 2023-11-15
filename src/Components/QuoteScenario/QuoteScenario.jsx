import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../Components/QuoteScenario/QuoteScenario.css';

const QuoteScenario = () => {
	return(
		<>
			<div className="quote-scenario">
				<Container>
					<Row>
						<Col sm={12}>
							<h4>THIS IS MY SCENARIO. I NEED A QUOTE NOW</h4>
							<a href="/" className="btn">Quote Mesh Network Package</a>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default QuoteScenario;