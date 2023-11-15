import '../../Components/OurProjectsDetail/OurProjectsDetail.css';
import 'react-slick/dist/react-slick.min';
import { Container, Row, Col } from 'react-bootstrap';

import Slider from "react-slick";

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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

// Slick Settings
const settings = {
	dots: false,
	arrows: true,
	infinite: true,
	adaptiveHeight: true,
	autoplaySpeed: 5000,
	autoplay: true,
	draggable: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: <CustomPrevArrow />,
	nextArrow: <CustomNextArrow />,
};

const OurProjectsDetail = (Props) => {

	return (
		<>
			<div className="project-detail">
				<Container className="py-sm-3 py-md-5">
					<Row>
						<Col lg={8}>
							<div className="holder">
								<div className="img">
									<img src={Props.imageUrl} alt={Props.altText} className="img-fluid" loading="lazy" />
								</div>
								<h2>{Props.title}</h2>
								<p>{Props.description}</p>
							</div>
							<div className="video-holder">
								<h4>Project Videos</h4>
								<div className="video-holder">
									<video controls width="360" height="210">
										<source src="https://www.rmsinstalls.com/uploads/module/our-projects/video/RMSUpdated.mov" type="video/quicktime" />
									</video>
								</div>
							</div>
						</Col>
						<Col lg={4}>
							<aside className="aside">
								<div className="widget">
									<h3>Project Info</h3>
									<dl>
										<dt>Service:</dt>
										<dd>{Props.service}</dd>
										<dt>Location:</dt>
										<dd>{Props.location}</dd>
											{Props.duration && (
											<>
												<dt>Duration:</dt>
												<dd>{Props.duration}</dd>
											</>
											)}
										<dt>Year:</dt>
										<dd>{Props.years}</dd>
									</dl>
								</div>
								<div className="slider-holder">
									<h3>Project Images</h3>
									<Slider {...settings}>
										{Props.slides && Props.slides.map((slide, index) => (
											<div key={index}>
												<img src={slide.imageUrl} alt={slide.altText} />
											</div>
										))}
									</Slider>
								</div>
							</aside>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default OurProjectsDetail;