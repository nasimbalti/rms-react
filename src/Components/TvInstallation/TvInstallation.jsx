import React, { useEffect, useRef } from 'react';

import '../../Components/TvInstallation/TvInstallation.css';
import { Container, Row, Col } from 'react-bootstrap';

import 'react-slick/dist/react-slick.min';
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TvInstallation = ({ installationsData, customClass, useSlickSlider }) => {
	const slickRef = useRef(null);

	useEffect(() => {
		if (slickRef.current && installationsData.length > 5) {
		slickRef.current.slickGoTo(0);
		}
	}, [installationsData]);

	const settings = {
		dots: false,
		infinite: false,
		arrows: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
		nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
					slidesToShow: 4,
					},
				},
				{
					breakpoint: 768,
					settings: {
					slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
					slidesToShow: 1,
					},
				},
			],
		};
	return (
		<>
			<section className={`tv-installation ${useSlickSlider ? 'slick-slider' : ''} ${customClass}`}>
				<Container>
					{useSlickSlider && installationsData.length > 5 ? (
						<Slider ref={slickRef} {...settings}>
							{installationsData.map((data, index) => (
								<div key={index}>
									<a className="holder" href={data.link} target="_blank" rel="noreferrer">
										<div className="ico">
											<img src={data.imageUrl} alt={data.altText} loading="lazy" />
										</div>
										<h3>{data.title}</h3>
										<p>{data.description}</p>
									</a>
								</div>
							))}
						</Slider>
					) : (
						<Row className="custom-row">
							{installationsData.map((data, index) => (
								<Col className="custom-col" key={index}>
									<a className="holder" href={data.link} target="_blank" rel="noreferrer">
										<div className="ico">
											<img src={data.imageUrl} alt={data.altText} loading="lazy" />
										</div>
										<h3>{data.title}</h3>
										<p>{data.description}</p>
									</a>
								</Col>
							))}
						</Row>
					)}
				</Container>
			</section>
			</>
	)
}
export default TvInstallation;