import 'react-slick/dist/react-slick.min';
import '../PressRelease/PressRelease.css';

import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from 'react-bootstrap';

import React from 'react';
import Slider from "react-slick";

import PressImg1 from '../../img/front/rms-installs-press-realease/press-landing-image.jpg';
import PressImg2 from '../../img/front/rms-installs-press-realease/press-realease.jpg';

const PressRelease = () => {
	// Slick Slider
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		draggable: true,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return(
		<>
			<div className="press-release">
				<Container>
					<Row className="align-items-center">
						<Col md={6}>
							<div className="img-holder">
								<div className="img">
									<i className="bar"></i>
									<img src={PressImg1} alt="press landing" loading="lazy" />
								</div>
								<div className="img bottom">
									<img src={PressImg2} alt="press release" loading="lazy" />
									<i className="square"></i>
								</div>
							</div>
						</Col>
						<Col md={6}>
							<Slider {...settings}>
								<div>
									<h3>Press Release</h3>
									<h4>Doug Weinstein at Technology Designer is interested</h4>
									<p>Hope all has been well! Doug Weinstein at Technology Designer is interested in featuring the Stoney J case study in their Winter Issue! The article would cover fiber and networking, sec</p>
									<a href="/" className="btn">Read More</a>
								</div>
								<div>
									<h3>Press Release</h3>
									<h4>Doug Weinstein at Technology Designer is interested</h4>
									<p>Hope all has been well! Doug Weinstein at Technology Designer is interested in featuring the Stoney J case study in their Winter Issue! The article would cover fiber and networking, sec</p>
									<a href="/" className="btn">Read More</a>
								</div>
								<div>
									<h3>Press Release</h3>
									<h4>Doug Weinstein at Technology Designer is interested</h4>
									<p>Hope all has been well! Doug Weinstein at Technology Designer is interested in featuring the Stoney J case study in their Winter Issue! The article would cover fiber and networking, sec</p>
									<a href="/" className="btn">Read More</a>
								</div>
								<div>
									<h3>Press Release</h3>
									<h4>Doug Weinstein at Technology Designer is interested</h4>
									<p>Hope all has been well! Doug Weinstein at Technology Designer is interested in featuring the Stoney J case study in their Winter Issue! The article would cover fiber and networking, sec</p>
									<a href="/" className="btn">Read More</a>
								</div>
							</Slider>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default PressRelease;