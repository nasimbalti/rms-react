import 'react-slick/dist/react-slick.min';
import Slider from "react-slick";

import 'magnific-popup/dist/magnific-popup.css';
import 'magnific-popup';

import '../VideoBox/VideoBox.css';

import { Container, Row, Col } from 'react-bootstrap';

import React, { useEffect } from 'react';
import $ from 'jquery';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Video Thumbnails Images Path
import VideoImg1 from '../../img/module/home-page-video/fellaship-min.jpg';
import VideoImg2 from '../../img/module/home-page-video/avo-review-min.jpg';
import VideoImg3 from '../../img/module/home-page-video/sors-min.jpg';
import VideoImg4 from '../../img/module/home-page-video/whip-min.jpg';
import VideoImg5 from '../../img/module/home-page-video/Untitled-2.jpg';
import VideoImg6 from '../../img/module/home-page-video/videoImg.jpg';

// Single Video
import VideoSingle1 from '../../img/front/control4-video-bg.jpg';
const VideoSingleURL1 = "https://www.youtube.com/watch?v=R9YDhmO4zfU";

// Video Path URL
const videoURL1 = "https://www.youtube.com/watch?v=R9YDhmO4zfU";
const videoURL2 = "https://www.youtube.com/watch?v=R9YDhmO4zfU";
const videoURL3 = "https://www.youtube.com/watch?v=hHLVgOd6_yk";
const videoURL4 = "https://www.youtube.com/watch?v=ChA_ByaPDwc";
const videoURL5 = "https://www.youtube.com/watch?v=gtdlto0pibI";
const videoURL6 = "https://www.youtube.com/watch?v=2tQsh6lQxzk";

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

const VideoBox = ({ useSlickSlider, singleVideo }) => {

	const videoSlides = singleVideo
	? [
		{
			image: VideoSingle1,
			videoUrl: VideoSingleURL1,
		},
	]
	: [
		{
			image: VideoImg1,
			videoUrl: videoURL1,
		},
		{
			image: VideoImg2,
			videoUrl: videoURL2,
		},
		{
			image: VideoImg3,
			videoUrl: videoURL3,
		},
		{
			image: VideoImg4,
			videoUrl: videoURL4,
		},
		{
			image: VideoImg5,
			videoUrl: videoURL5,
		},
		{
			image: VideoImg6,
			videoUrl: videoURL6,
		}
	];

	useEffect(() => {
		if (!useSlickSlider) {
			$('.popup-youtube').magnificPopup({ type: 'iframe' });
		}
	}, [useSlickSlider]);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		afterChange: function(slideIndex) {
		  // Reinitialize Magnific Popup on the newly created elements
			$('.popup-youtube').magnificPopup({ type: 'iframe' });
		},
	};

	return (
		<>
			{useSlickSlider ? (
				<div className="video-box">
					<Slider {...settings}>
						{videoSlides.map((slide, index) => (
							<div key={index} className="video">
								<img src={slide.image} alt={`Video Slide ${index + 1}`} loading="lazy" />
								<div className="btn-play">
									<a className="popup-youtube" href={slide.videoUrl}>
										<i className="ico">
											<FontAwesomeIcon icon={faPlay} />
										</i>
									</a>
								</div>
							</div>
						))}
					</Slider>
				</div>
			) : (
				<div className="video-box">
					<Container fluid>
						<Row>
							{videoSlides.map((slide, index) => (
								<Col key={index} sm={singleVideo ? 12 : undefined} md={singleVideo ? undefined : 6}>
									<div className="video">
										<img src={slide.image} alt={`Video Slide ${index + 1}`} className="w-100" loading="lazy" />
										<div className="btn-play">
											<a className="popup-youtube" href={slide.videoUrl}>
												<i className="ico">
												<FontAwesomeIcon icon={faPlay} />
												</i>
											</a>
										</div>
									</div>
								</Col>
							))}
						</Row>
					</Container>
				</div>
			)}
		</>
	)
}
export default VideoBox;