import 'react-slick/dist/react-slick.min';
import Slider from "react-slick";

import 'magnific-popup/dist/magnific-popup.css';
import 'magnific-popup';

import '../OurWork/OurWork.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import MainHeading from '../MainHeading/MainHeading'

import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Video Thumbnails Images Path
import PortfolioImg1 from '../../img/module/our-work/rms_tv_installation.jpg';
import PortfolioImg2 from '../../img/module/our-work/tv_mounting_service-min.jpg';
import PortfolioImg3 from '../../img/module/our-work/tv_mounting_service_atlanta.jpg';
import PortfolioImg4 from '../../img/module/our-work/media_installation_networking-min.jpg';
import PortfolioImg5 from '../../img/module/our-work/commercial_low_voltage-min.jpg';
import PortfolioImg6 from '../../img/module/our-work/rms_smart_media_home_device_installation-min.jpg';

const images = [PortfolioImg1, PortfolioImg2, PortfolioImg3, PortfolioImg4, PortfolioImg5, PortfolioImg6];

const CustomPrevArrow = (props) => {
	const { onClick } = props;
	return (
		<button className="slick-arrow slick-prev" onClick={onClick}>
			<FontAwesomeIcon icon={faArrowLeft} />
		</button>
	);
};

const CustomNextArrow = (props) => {
	const { onClick } = props;
	return (
		<button className="slick-arrow slick-next" onClick={onClick}>
			<FontAwesomeIcon icon={faArrowRight} />
		</button>
	);
};
const OurWork = ({ useSlickSlider, title }) => {
	useEffect(() => {
		if (!useSlickSlider) {
			$('.popup-youtube').magnificPopup({ type: 'iframe' });
		}
	}, [useSlickSlider]);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		afterChange: function(slideIndex) {
		  // Reinitialize Magnific Popup on the newly created elements
			$('.popup-youtube').magnificPopup({ type: 'iframe' });
		},
	};

	// Render your images using the map function
	const renderImages = () => {
		return images.map((image, index) => (
			<Col lg={4} md={6} key={index}>
				<div className="box">
					<img src={image} alt={`Work ${index + 1}`} />
					<div className="overlay">
						<a className={useSlickSlider ? '' : 'image-popup'} href={image}>
							<FontAwesomeIcon icon={faPlus} />
						</a>
					</div>
				</div>
			</Col>
		));
	};

	return(
		<>
			<div className={useSlickSlider ? 'slider-container' : 'our-work'}>
				<Container>
					<Row>
						<Col sm={12}>
						<MainHeading title={title} />
						</Col>
					</Row>
					{useSlickSlider ? (
						<Slider {...settings}>{renderImages()}</Slider>
					) : (
						<Row>{renderImages()}</Row>
					)}
					<Row>
						<Col sm={12} className="text-center">
							<Button variant="primary" href="#" className="btn">
								See Full Portfolio
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default OurWork;