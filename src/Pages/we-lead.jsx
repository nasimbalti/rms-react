import React from "react";
import {Helmet} from "react-helmet";
import {Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import VideoBox from '../Components/VideoBox/VideoBox';
import MainHeading from '../Components/MainHeading/MainHeading';
import OurWork from '../Components/OurWork/OurWork';

function WeLead() {
	const getContent=()=>{

	return (
			<>
				<Helmet>
					<title>We Lead</title>
				</Helmet>
				<BreadCrumbs title="We Lead" />
				<Container className="py-sm-3 py-md-5">
					<Row>
						<Col sm={12}>
							<p>RMS Installs was founded in Atlanta, Georgia in 2009. The company is a multimedia systems integrator offering residential and commercial Home Theater, TV installation, Automation, Network and Security/Surveillance Installation Services throughout the Atlanta metropolitan areas, such as Acworth, Kennesaw, Dallas, Cartersville, Marietta, Woodstock, Canton, Roswell, Powder Springs, Alpharetta, Cumming, Milton City, Suwannee, Johns Creek, Duluth, Buckhead, Brookhaven, Midtown, Smyrna, and Atlanta.</p>
							<p>The company's mission is to create solid relationships with every client. We roll out the red carpet to ensure that every client that we interact with experience world class customer service. We employee the most knowledgeable and experienced professionals to deliver that promise. Our goal is to make sure we listen to our client's needs and provide various options that lead to an overall client satisfaction.</p>
							<p>RMS Installs sales and design professionals take the time to educate and offer a wide range of consumer electronics that are current and up to date with every single project. We are very selective of the brands that we choose to carry keeping the client first in mind. RMS Installs select the finest, most user-friendly products that will perform beyond the client's expectation. RMS Installs offer a variety of products from the most reputable vendors that can fit into our client's lifestyle and décor.</p>
							<p>We are extremely passionate about our craft and we want to ensure we guarantee our installation services for 1 year to all our clients.</p>
						</Col>
					</Row>
				</Container>
				<div className="video-bg">
					<Container>
						<Row>
							<Col sm={12}>
								<MainHeading title="Videos" />
								<VideoBox useSlickSlider={true} />
							</Col>
						</Row>
					</Container>
				</div>
				<div className="our-work lead">
					<Container className="py-sm-3 py-md-5">
						<Row>
							<Col sm={12}>
								<OurWork useSlickSlider={true} title="Gallery" />
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default WeLead;