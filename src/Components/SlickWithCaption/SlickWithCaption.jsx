import React from 'react';

import 'react-slick/dist/react-slick.min';
import Slider from "react-slick";

import '../../Components/SlickWithCaption/SlickWithCaption.css';
import { Container, Row, Col } from 'react-bootstrap';

const SlickWithCaption = ({ slides, captions, customSettings, fadeEffect , customClass }) => {
	// Slick Settings
	const defaultSettings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 400,
		autoplaySpeed: 5000,
		autoplay: true,
		draggable: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		fade: fadeEffect // Enable the fade effect conditionally
	};
	const settings = { ...defaultSettings, ...customSettings };
	return (
		<>
			<section className={`slickCaption-area ${customClass}`}>
				<Container>
					<Row>
						<Col sm={12}>
							<Slider {...settings}>
								{slides.map((slide, index) => (
									<div key={index}>
										{slide.images.map((image, imageIndex) => (
											<img key={imageIndex} src={image} alt={`Slide ${imageIndex + 1}`} loading="lazy" />
										))}
										{slide.captions && slide.captions.length > 0 && (
											<div className="caption">
											{slide.captions.map((caption, captionIndex) => (
												<p key={captionIndex}>{caption}</p>
											))}
											</div>
										)}
									</div>
								))}
							</Slider>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}
export default SlickWithCaption;