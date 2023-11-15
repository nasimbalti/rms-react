import {Container, Row, Col, Card } from 'react-bootstrap';
import React from 'react';

import '../WhyChoose/WhyChoose.css';
import MainHeading from '../MainHeading/MainHeading'

// Images Path:
import CustomerSatisfaction from '../../img/module/why-us/customer_satisfaction.png';
import Knowledgeable from '../../img/module/why-us/experienced_team.png';
import Affordable from '../../img/module/why-us/affordable_price.png';
import Financing from '../../img/module/why-us/financing_option.png';
import Guarantee from '../../img/module/why-us/about_the_clever_img.png';

// Titles:
const CustomerTitle = "100% Customer Satisfaction";
const KnowledgeableTitle = "Knowledgeable & Experienced Team";
const AffordableTitle = "Affordable Pricing";
const FinancingTitle = "Financing Options";
const GuaranteeTitle = "All Work Backed by 30 days Guarantee";

const WhyChoose = (Props) => {
	return(
		<>
			<section className="why-choose">
				<Container>
					<Row>
						<Col sm={12}>
							<MainHeading title={Props.title} />
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<Card.Img src={CustomerSatisfaction} alt={CustomerTitle} width="116" height="122" loading="lazy" />
								<Card.Body>
									<Card.Title>{CustomerTitle}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Img src={Knowledgeable} alt={KnowledgeableTitle} width="116" height="122" loading="lazy" />
								<Card.Body>
									<Card.Title>{KnowledgeableTitle}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Img src={Affordable} alt={AffordableTitle} width="116" height="122" loading="lazy" />
								<Card.Body>
									<Card.Title>{AffordableTitle}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Img src={Financing} alt={FinancingTitle} width="116" height="122" loading="lazy" />
								<Card.Body>
									<Card.Title>{FinancingTitle}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Img src={Guarantee} alt={GuaranteeTitle} width="116" height="122" loading="lazy" />
								<Card.Body>
									<Card.Title>{GuaranteeTitle}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}
export default WhyChoose;