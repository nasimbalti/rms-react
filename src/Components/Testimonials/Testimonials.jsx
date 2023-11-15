import 'react-slick/dist/react-slick.min';
import '../Testimonials/Testimonials.css';

import { Container, Row, Col } from 'react-bootstrap';

import MainHeading from '../MainHeading/MainHeading'

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import Slider from "react-slick";

// Images Path
import GoogleImg from '../../img/module/what-people-are-saying/google-review.jpg';
import YelpImg from '../../img/module/what-people-are-saying/yelp.png';
import QuoteImg from '../../img/front/quote_icon.png';

const Testimonials = (Props) => {
	// Slick Slider
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 2000,
		autoplay: true,
		draggable: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					adaptiveHeight: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true
				}
			}
		]
	};

	// Star Rating
	const stars = Array.from({ length: 5 }, (_, index) => (
		<li key={index}>
			<FontAwesomeIcon icon={faStar} />
		</li>
	));

	// Read More Func
	const [clickStates, setClickStates] = useState({
		column1: false,
		column2: false,
		column3: false,
		column4: false,
		column5: false,
		column6: false,
		column7: false,
		column8: false,
		column9: false,
	});
	const handleClick = (holder) => {
		setClickStates((prevStates) => ({
			...prevStates,
			[holder]: !prevStates[holder],
		}));
	};

	return (
		<>
			<div className="testimonial-area">
				<Container>
					<Row>
						<Col sm={12}>
							<MainHeading title={Props.title} />
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<Slider {...settings}>
								<div>
									<div className={`holder ${clickStates.column1 ? 'expanded' : 'collapsed'}`}>
										<div className="top-icons">
											<div className="client_img">
												<img src={YelpImg} alt="Sam E." loading="lazy" />
											</div>
											<div className="quote_icon">
												<img src={QuoteImg} alt="quote" loading="lazy" />
											</div>
										</div>
										<h3>Sam E.</h3>
										<ul className="rating">
											{stars}
										</ul>
										<div className="frame">
											<div className="text">
												<p>After experiencing a less than stellar visit from the Geek Squad, I reached out to several business in the metro area for a quote to mount my television over my fireplace.</p>
												<p>Ruredzo was able to come out the next day (ON A SUNDAY) to do the install. Dante was on time as promised and professional down to the booties to cover his shoes.</p>
												<p>I explained to him the complications the Geek Squad has with my setup and showed him the $200 mount they recommended that I buy in order for my television to be mounted over my fireplace since the original owner&#39;s mount would not work.</p>
												<p>Dante hopped into action, did his measurements and took the time to explain to me why the existing mount would not work nor the mount that the Geek Squad recommended for purchase. At that point, I felt as if I were at a loss. Dante assured me he would do everything he could to make sure my tv was mounted before I left.</p>
												<p>He&#39;s a man of his word. He had a mount he was sure that would work (and it did). He added an extension cord and subtracted some wall plates and worked his magic.</p>
												<p>I highly recommend Ruredzo for your home theater needs!</p>
												<p>Thanks again Dante :&#41;</p>
											</div>
											<div className="read-more" onClick={() => handleClick('column1')}> Read <span className="more">More</span> <span className="less">Less</span></div>
										</div>
									</div>
								</div>
								<div>
									<div className={`holder ${clickStates.column2 ? 'expanded' : 'collapsed'}`}>
										<div className="top-icons">
											<div className="client_img">
												<img src={YelpImg} alt="Bil C." loading="lazy" />
											</div>
											<div className="quote_icon">
												<img src={QuoteImg} alt="quote" loading="lazy" />
											</div>
										</div>
										<h3>Bil C.</h3>
										<ul className="rating">
											{stars}
										</ul>
										<div className="frame">
											<div className="text">
												<p>We used Dante before to install a Sonos system. This morning our tv didn't work so I called Dante at 9am. He already was scheduled but said he would fit me in. After resetting everything, it started to work. He is easy to work with, honest and reasonably priced.</p>
											</div>
											<div className="read-more" onClick={() => handleClick('column2')}> Read <span className="more">More</span> <span className="less">Less</span></div>
										</div>
									</div>
								</div>
								<div>
									<div className={`holder ${clickStates.column3 ? 'expanded' : 'collapsed'}`}>
										<div className="top-icons">
											<div className="client_img">
												<img src={YelpImg} alt="James W." loading="lazy" />
											</div>
											<div className="quote_icon">
												<img src={QuoteImg} alt="quote" loading="lazy" />
											</div>
										</div>
										<h3>James W.</h3>
										<ul className="rating">
											{stars}
										</ul>
										<div className="frame">
											<div className="text">
												<p>Project: Repair or Service a Home Theater System or Media Center</p>
												<p>Dante was fabulous; he's extremely knowledgeable and very thorough. I use to install car stereos so I know how to set up my own devices. However, I was simply to busy and found this company through Home Advisor. I have to give him credit, I thought I knew my stuff but he showed me a thing or two. I've been looking for someone like Dante and glad I found him. He recommended a couple of things I could do to improve my system but didn't try to over sell me on anything. He cleaned up my wires and made it so easy for the wife and kids to only have to push one button to turn everything on. He programmed everything perfectly. Can you tell, I'm extremely happy with his work. After several years and multiple AV guys claiming to know how to fix it, he got it done. Awesome work Ruredzo Media Solutions. I will be using your services asap. Please let me know when you can squeeze me in to make those few adjustments and upgrades.</p>
											</div>
											<div className="read-more" onClick={() => handleClick('column3')}> Read <span className="more">More</span> <span className="less">Less</span></div>
										</div>
									</div>
								</div>
								<div>
									<div className={`holder ${clickStates.column4 ? 'expanded' : 'collapsed'}`}>
										<div className="top-icons">
											<div className="client_img">
												<img src={YelpImg} alt="Sam E." loading="lazy" />
											</div>
											<div className="quote_icon">
												<img src={QuoteImg} alt="quote" loading="lazy" />
											</div>
										</div>
										<h3>Sam E.</h3>
										<ul className="rating">
											{stars}
										</ul>
										<div className="frame">
											<div className="text">
												<p>After experiencing a less than stellar visit from the Geek Squad, I reached out to several business in the metro area for a quote to mount my television over my fireplace.</p>
												<p>Ruredzo was able to come out the next day (ON A SUNDAY) to do the install. Dante was on time as promised and professional down to the booties to cover his shoes.</p>
												<p>I explained to him the complications the Geek Squad has with my setup and showed him the $200 mount they recommended that I buy in order for my television to be mounted over my fireplace since the original owner&#39;s mount would not work.</p>
												<p>Dante hopped into action, did his measurements and took the time to explain to me why the existing mount would not work nor the mount that the Geek Squad recommended for purchase. At that point, I felt as if I were at a loss. Dante assured me he would do everything he could to make sure my tv was mounted before I left.</p>
												<p>He&#39;s a man of his word. He had a mount he was sure that would work (and it did). He added an extension cord and subtracted some wall plates and worked his magic.</p>
												<p>I highly recommend Ruredzo for your home theater needs!</p>
												<p>Thanks again Dante :&#41;</p>
											</div>
											<div className="read-more" onClick={() => handleClick('column4')}> Read <span className="more">More</span> <span className="less">Less</span></div>
										</div>
									</div>
								</div>
								<div>
									<div className={`holder ${clickStates.column5 ? 'expanded' : 'collapsed'}`}>
										<div className="top-icons">
											<div className="client_img">
												<img src={YelpImg} alt="Bil C." loading="lazy" />
											</div>
											<div className="quote_icon">
												<img src={QuoteImg} alt="quote" loading="lazy" />
											</div>
										</div>
										<h3>Bil C.</h3>
										<ul className="rating">
											{stars}
										</ul>
										<div className="frame">
											<div className="text">
												<p>We used Dante before to install a Sonos system. This morning our tv didn't work so I called Dante at 9am. He already was scheduled but said he would fit me in. After resetting everything, it started to work. He is easy to work with, honest and reasonably priced.</p>
											</div>
											<div className="read-more" onClick={() => handleClick('column5')}> Read <span className="more">More</span> <span className="less">Less</span></div>
										</div>
									</div>
								</div>
								<div>
									<div className={`holder ${clickStates.column6 ? 'expanded' : 'collapsed'}`}>
										<div className="top-icons">
											<div className="client_img">
												<img src={YelpImg} alt="James W." loading="lazy" />
											</div>
											<div className="quote_icon">
												<img src={QuoteImg} alt="quote" loading="lazy" />
											</div>
										</div>
										<h3>James W.</h3>
										<ul className="rating">
											{stars}
										</ul>
										<div className="frame">
											<div className="text">
												<p>Project: Repair or Service a Home Theater System or Media Center</p>
												<p>Dante was fabulous; he's extremely knowledgeable and very thorough. I use to install car stereos so I know how to set up my own devices. However, I was simply to busy and found this company through Home Advisor. I have to give him credit, I thought I knew my stuff but he showed me a thing or two. I've been looking for someone like Dante and glad I found him. He recommended a couple of things I could do to improve my system but didn't try to over sell me on anything. He cleaned up my wires and made it so easy for the wife and kids to only have to push one button to turn everything on. He programmed everything perfectly. Can you tell, I'm extremely happy with his work. After several years and multiple AV guys claiming to know how to fix it, he got it done. Awesome work Ruredzo Media Solutions. I will be using your services asap. Please let me know when you can squeeze me in to make those few adjustments and upgrades.</p>
											</div>
											<div className="read-more" onClick={() => handleClick('column6')}> Read <span className="more">More</span> <span className="less">Less</span></div>
										</div>
									</div>
								</div>
							</Slider>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<div className="review">
								<strong className="title">Review us on:</strong>
								<ul className="links">
									<li><a href="https://www.google.com/search?q=RMS+installs+google+reviews&rlz=1C1CHBF_enPK837PK837&sxsrf=AOaemvKAySgHGSizF3pooggVxry_L-KrhA%3A1629977856763&ei=AH0nYdODLpiDhbIPxfuhmAw&oq=RMS+installs+google+reviews&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsANKBAhBGABQ8yRY6zJg-TRoAXACeACAAasDiAGOE5IBBzItNy4xLjGYAQCgAQHIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwjTg5PZzM7yAhWYQUEAHcV9CMMQ4dUDCA8&uact=5#lrd=0x88f56b512ecc9df1:0xae86ec665dbe9b8,1,," target="_blank">Google</a></li>
									<li><a href="https://www.homeadvisor.com/write-a-review/64649877/" target="_blank">Home Advisor</a></li>
									<li><a href="https://www.yelp.com/writeareview/biz/dZ8g3AC5TqhJY9Bpi68SlA?return_url=%2Fbiz%2FdZ8g3AC5TqhJY9Bpi68SlA&source=biz_details_war_button" target="_blank">Yelp</a></li>
									<li><a href="https://www.thumbtack.com/ga/woodstock/tv-wall-mount-install/rms-installs/service/296935531659108597" target="_blank">Thumbtack</a></li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default Testimonials;