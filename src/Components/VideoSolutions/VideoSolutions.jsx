import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import '../../Components/VideoSolutions/VideoSolutions.css';

const VideoSolutions = (Props) => {
	return(
		<>
			<div className="video-solutions">
				<Container className="mt-3">
					<Row>
						<Col sm={12}>
							{Props.heading && <h3>{Props.heading}</h3>}
							<div className="img">
								<img src={Props.imageUrl} alt={Props.altText} loading="lazy" />
							</div>
							<div className="caption">
								<p>{Props.caption}</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default VideoSolutions;