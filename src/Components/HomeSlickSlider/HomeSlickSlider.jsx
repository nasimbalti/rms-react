import 'react-slick/dist/react-slick.min';
import '../HomeSlickSlider/HomeSlickSlider.css';

import {Container, Row, Col } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import React, {useState} from "react";
import Slider from "react-slick";

// Images path
import Banner1 from "../../img/module/banners/rms-care-banner3.jpg";
import Banner2 from "../../img/module/banners/network_integration.jpg";
import Banner3 from "../../img/module/banners/smart_home_installation.jpg";
import Banner4 from "../../img/module/banners/home_theater.jpg";
import Banner5 from "../../img/module/banners/tv-installation-banner.jpg";
import Banner6 from "../../img/module/banners/audio-installation.jpg";
import Banner7 from "../../img/module/banners/multi-room-audio.jpg";
import Banner8 from "../../img/module/banners/video-distribution-banner.jpg";
import Banner9 from "../../img/module/banners/outdoor-entertainment.jpg";
import Banner10 from "../../img/module/banners/home-security-installation.jpg";
import Banner11 from "../../img/module/banners/worship-banner.jpg";
import Banner12 from "../../img/module/banners/healthcare-banner.jpg";
import Banner13 from "../../img/module/banners/retail-banner.jpg";
import Banner14 from "../../img/module/banners/corporate-banner.jpg";
import Banner15 from "../../img/module/banners/hospitality-banner.jpg";
import Banner16 from "../../img/module/banners/education-banner.jpg";
import Banner17 from "../../img/business-solutions/government-banner.jpg";

const HomeSlickSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9, Banner10, Banner11, Banner12, Banner13, Banner14, Banner15, Banner16, Banner17];

	// Slick Custom Arrows
	function getPreviewImage(index) {
        if (index >= 0 && index < slides.length) {
            return slides[index];
        }
        return null;
    }
    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button className="slick-arrow slick-prev" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
                {getPreviewImage(currentSlide - 1) && <img className="arrow-preview" src={getPreviewImage(currentSlide - 1)} alt="prev-slide" />}
            </button>
        );
    };
    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <button className="slick-arrow slick-next" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronRight} />
                {getPreviewImage(currentSlide + 1) && <img className="arrow-preview" src={getPreviewImage(currentSlide + 1)} alt="next-slide" />}
            </button>
        );
    };
	// Slick Settings
	const settings = {
		fade: true,
		cssEase: 'linear',
		dots: true,
		arrows: true,
		infinite: true,
		speed: 3000,
		autoplaySpeed: 5000,
		autoplay: true,
		draggable: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		afterChange: (current) => setCurrentSlide(current)
	};

	return(
		<>
			<section className="banner-holder animate">
				<Container fluid>
					<Row>
						<Col className="p-0">
							<Slider {...settings}>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner1} alt="RMS Care" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h1>RMS Care +</h1>
												</div>
												<div className="box">
													<p>The Ultimate Solution for All Your Home Media <br /> Needs with RMS Installs</p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner2} alt="Network Integration" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Wireless Network &amp; Ethernet</h2>
												</div>
												<div className="box">
													<p>In today's world, a reliable network is vital</p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner3} alt="Smart Home Installation" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Home Automation</h2>
												</div>
												<div className="box">
													<p>Manage your entire home with just press of a button on your smart phone</p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner4} alt="home theater" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Home Theater Installation</h2>
												</div>
												<div className="box">
													<p>Turn your dreams into reality with custom home cinema design, installation and setup</p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner5} alt="tv installation" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>TV Installation</h2>
												</div>
												<div className="box">
													<p>TV Installation for your Home or Business</p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner6} alt="audio-installation" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Audio Installation</h2>
												</div>
												<div className="box">
													<p></p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner7} alt="multi-room-audio" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Multi Room Audio</h2>
												</div>
												<div className="box">
													<p>Custom whole house multi-room audio system that blends seamlessly into your home's interior design</p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner8} alt="video-distribution" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Video Distribution</h2>
												</div>
												<div className="box">
													<p></p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner9} alt="outdoor entertainment" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Outdoor Entertainment</h2>
												</div>
												<div className="box">
													<p>Best Weatherproof &amp; Outdoor Entertainment Systems</p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner10} alt="home security installation" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Surveillance Installation</h2>
												</div>
												<div className="box">
													<p>Keep your home and business safe</p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner11} alt="worship" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Worship Business Solutions</h2>
												</div>
												<div className="box">
													<p></p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner12} alt="healthcare" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Healthcare Business Solutions</h2>
												</div>
												<div className="box">
													<p></p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner13} alt="retail" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Retail Business Solutions</h2>
												</div>
												<div className="box">
													<p></p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner14} alt="corporate" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Corporate Business Solutions</h2>
												</div>
												<div className="box">
													<p></p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner15} alt="hospitality" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Hospitality Business Solutions</h2>
												</div>
												<div className="box">
													<p></p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner16} alt="education" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Education Business Solutions</h2>
												</div>
												<div className="box">
													<p></p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="holder">
										<div className="img">
											<img src={Banner17} alt="government" />
										</div>
										<div className="frame">
											<div className="caption">
												<div className="box">
													<h2>Government Business Solutions</h2>
												</div>
												<div className="box">
													<p></p>
												</div>
												<div className="box"><a href="/" className="btn">Learn More</a></div>
											</div>
										</div>
									</div>
								</div>
							</Slider>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}
export default HomeSlickSlider;