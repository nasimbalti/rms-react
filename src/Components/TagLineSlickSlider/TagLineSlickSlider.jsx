import 'react-slick/dist/react-slick.min';
import '../TagLineSlickSlider/TagLineSlickSlider.css';

import {Container, Row, Col } from 'react-bootstrap';

import React from "react";
import Slider from "react-slick";

const TagLineSlickSlider = () => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 2000,
		autoplay: true,
		draggable: true,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return(
		<>
			<section className="slick-holder">
				<Container>
					<Row>
						<Col sm={12}>
							<Slider {...settings}>
								<div>
									<h3>Customer Centric</h3>
								</div>
								<div>
									<h3>Follow through Support</h3>
								</div>
								<div>
									<h3>Service &amp; Safety</h3>
								</div>
								<div>
									<h3>Integrity</h3>
								</div>
								<div>
									<h3>Reliability</h3>
								</div>
								<div>
									<h3>Trust &amp; Respect</h3>
								</div>
								<div>
									<h3>Knowledge &amp; Experience</h3>
								</div>
								<div>
									<h3>Customer Centric</h3>
								</div>
								<div>
									<h3>Follow through Support</h3>
								</div>
								<div>
									<h3>Service &amp; Safety</h3>
								</div>
							</Slider>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}
export default TagLineSlickSlider;