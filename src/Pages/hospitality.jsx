import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import VideoSolutions from '../Components/VideoSolutions/VideoSolutions';
import SlickWithCaption from "../Components/SlickWithCaption/SlickWithCaption";
import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

// Banner Top Img Path
import hospitalityBannerImg from '../img/front/hospitality-banner.jpg';

// Digital Signage Img Path
import DigitalSignImg from '../img/front/digital-signage.jpg';

//Slick First Img Path
import lightsAndshades4 from '../img/front/lightsAndshades-4.jpg';
import lightsAndshades5 from '../img/front/lightsAndshades-5.jpg';
import lightsAndshades6 from '../img/front/lightsAndshades-6.jpg';
import lightsAndshades7 from '../img/front/lightsAndshades-7.jpg';
import lightsAndshades8 from '../img/front/lightsAndshades-8.jpg';
import lightsAndshades9 from '../img/front/lightsAndshades-9.jpg';
import lightsAndshades11 from '../img/front/lightsAndshades-11.jpg';

function Hospitality() {
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: hospitalityBannerImg,
		altText: 'Innovative Comfort',
		captions: (
			<>
				<h2>
					<span>INNOVATE COMFORT</span>
					<strong>WITH TECH-INFUSED LUXURY</strong>
				</h2>
			</>
		)
	};

	// Video Solutions Props Settings
	const DigitalSignageProps = {
		imageUrl: DigitalSignImg,
		altText: 'digital Signage',
		heading: 'Digital Signage',
		caption: (
			<>
				<p>For Digital Signage in public areas, RMS Installs collaborates with your interior design and IT teams to ensure easy maintenance and expert installation, including signage or video wall mounts, cabling, and video players. Our comprehensive range of applications encompasses Digital Wayfinding and Menu boards; co-branded advertising with local partners, airports, and transportation agencies; displaying local weather, news, and television while simultaneously promoting your facilities, amenities, and activities; and managing meeting room schedules with a user-friendly interface, guiding your guests to the right room at the right time.</p>
			</>
		)
	}

	// Slick First Slides
	const slides1 = [
		{ images: [lightsAndshades4] },
		{ images: [lightsAndshades5] },
		{ images: [lightsAndshades6] },
		{ images: [lightsAndshades7] },
		{ images: [lightsAndshades8] },
		{ images: [lightsAndshades9] },
		{ images: [lightsAndshades11] }
	]

	return (
			<>
				<Helmet>
					<title>Hospitality Business Solutions</title>
				</Helmet>
				<BreadCrumbs title="Hospitality Business Solutions" />
				<BannerTop {...bannerProps} />
				<Container className="pt-md-5">
					<Row>
						<Col sm={12}>
							<p>At RMS Installs, we understand that guests today expect seamless connectivity and entertainment on par with their home experience. We offer comprehensive solutions to meet these demands, including <a href="/">specialized TVs</a>, <a href="/">high-impact signage video displays</a>, <a href="/">hi-fi audio distribution</a>, and <a href="/">atmospheric lighting and shade control</a>. Furthermore, we provide an <a href="/">intuitive and efficient interface</a>, accessible through mobile devices and elegant touch panels, designed to automate and coordinate all those multiple environmental variables that enhance private and public spaces.</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="text-center py-3">
							<h3>Specialized TVs and Video Distribution</h3>
						</Col>
					</Row>
					<Row className="flex-lg-row-reverse py-3">
						<Col lg={6}>
							<div className="img">
								<img src={require('../img/front/tvs-and-video-distribution.png')} className="img-fluid" alt="tvs and video distribution" loading="lazy" />
							</div>
						</Col>
						<Col lg={6}>
							<p>Delight your patrons with crisp images and stunning colors on LG's line of NanoCell™ Hospitality TVs. These Smart TVs deliver 4K content and feature wide viewing angles in a sleek design. We offer advanced content management solutions like the Pro:Centric® Smart IPTV platform, which allows your business to create and manage guestroom content easily, showcase brand identity, schedule, and distribute live TV, Video on Demand, or streaming apps content effortlessly.</p>
							<p>Our products are available in various sizes, including large format displays perfect for lobbies and conference rooms. Whether you require single displays or an interconnected network, our team can develop a custom solution tailored to your unique needs. Our installation specialists take pride in their meticulous attention to detail and expert management of wiring concealment, ensuring your furniture and architectural features remain the center of attention.</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<div className="img">
								<img src={require('../img/front/specialized-tvs.jpg')} className="d-block w-100" alt="specialized tv" loading="lazy" />
							</div>
						</Col>
					</Row>
				</Container>
				<VideoSolutions {...DigitalSignageProps} />
				<Container className="pt-md-5">
					<Row>
						<Col sm={12}>
							<h3>Audio Distribution</h3>
							<p>Experience exceptional audio quality with our professional-grade distribution solutions from leading brands like Sonos, Klipsch, and Episode. Designed to deliver clear and natural sound throughout your hospitality environment, our solutions ensure an immersive guest experience. Our skilled team can design and install systems that guarantee even sound distribution while eliminating feedback, distortion, or any other disruptions, whether in conference rooms or informal meetings at the bar or terrace. Additionally, we can seamlessly integrate your audio system with video and lighting solutions to elevate emotional engagement at any event. Please read <a href="/">more about it on our Retail Solutions page.</a></p>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="text-center mb-md-4">
							<h3>Lighting and Shades</h3>
						</Col>
					</Row>
					<Row>
						<Col lg={6}>
							<SlickWithCaption slides={slides1} />
						</Col>
						<Col lg={6}>
							<p>We offer customizable lighting and shade control solutions integrating Lutron and Control4 systems, two of the most renowned brands in the automation industry. With high-quality materials and advanced motorized technology, Lutron allows the implementation of creative and energy-efficient environments, helping reduce your carbon footprint and lower your energy costs without compromising luxury and comfort. Control4 lighting controls and virtual interfaces enable centralized and distributed control of any hospitality environment. This allows your staff and guests to achieve the atmospheres that suit their needs and preferences.</p>
							<p>Our experienced team can design and install systems that ensure even lighting distribution and eliminate glare, flicker, or other issues that may disrupt your guest experience. Our lighting and shade solutions are ideal for various hospitality environments, including lobbies, public areas, restaurants and lounges, ballrooms, conference and meeting rooms, guestrooms and suites, luxury penthouses, serviced residences, back-of-house, and service areas.</p>
							<p>By perfectly balancing daylight and electric light in multiple scenarios, we assist you in creating welcoming and relaxing spaces that your guests will appreciate.</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="text-center mb-md-4">
							<h3>Automation Control</h3>
							<p>We provide advanced automation control solutions from Control4 that allow you to control all your technology systems easily. Control4 touch panels provide a centralized interface for guests and staff to manage lighting, shades, audio, and video systems.</p>
						</Col>
					</Row>
					<Row className="flex-lg-row-reverse mb-md-5">
						<Col lg={6}>
							<div className="img">
								<img src={require('../img/front/automation-control.jpg')} alt="Automation Control" className="img-fluid" loading="lazy" />
							</div>
						</Col>
						<Col lg={6}>
							<p>Unlike popular voice assistants, Josh.AI is an intuitive, privacy-focused voice assistant designed for professionally installed automated spaces. Its sole purpose is to provide a unique and elegant hands-free voice experience. Allow your guests to make multiple requests in a single command freely; Josh.AI contextually adjusts to its surroundings, and conveniently searches for media content, thanks to Josh's knowledge of Control4's integrated devices. In addition to luxurious design and elegant user experiences, every Josh interaction remains private thanks to its steadfast commitment to keeping user data secure.</p>
							<p>Control4 provides seamless control and integration of all technology systems, allowing guests to manage their environment without confusion. Control4's advanced security features also provide peace of mind, ensuring that staff and guests have a secure and private experience.</p>
						</Col>
					</Row>
				</Container>
				<GetAQuote />
				<WhyChooseUs />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default Hospitality;