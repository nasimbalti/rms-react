import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import React from 'react';
import { Link  } from 'react-router-dom';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import '../../Components/Breadcrumbs/Breadcrumbs.css';
const BreadCrumbs = (Props) => {
	return (
		<>
			<div className="breadcrumbs-area">
				<Container>
					<Row>
						<Col md={6}>
							<h2 className="title">{Props.title}</h2>
						</Col>
						<Col md={6}>
							<Breadcrumb>
								<Link to="/" className="breadcrumb-item">Home</Link><FontAwesomeIcon icon={faAnglesRight} />
								<Breadcrumb.Item active>{Props.title}</Breadcrumb.Item>
							</Breadcrumb>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default BreadCrumbs;