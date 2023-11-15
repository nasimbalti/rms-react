import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import '../Components/NetworkInstall/NetworkInstall.css';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import TvInstallation from '../Components/TvInstallation/TvInstallation';
import VideoBox from '../Components/VideoBox/VideoBox';
import GetAQuote from '../Components/GetAQuote/GetAQuote';
import TextOverlay from '../Components/TextOverlay/TextOverlay';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

// Banner Top Img Path
import HomeAutomationImg from '../img/front/home-automation.jpg';

function HomeAutomation() {
	// Home Automation Settings
	const installationsData = [
		{
			imageUrl: require('../img/front/av-entertainment.png'),
			altText: 'AV Entertainment',
			title: 'AV Entertainment',
			description: 'One-touch control of all your media, from any room, with simple and elegant interfaces.',
			link: './av-entertainment',
		},
		{
			imageUrl: require('../img/front/chandelier.png'),
			altText: 'Lighting',
			title: 'Lighting',
			description: 'Create perfect ambiance with automated, energy-efficient lighting that responds to your lifestyle.',
			link: './av-entertainment',
		},
		{
			imageUrl: require('../img/front/smart-shades.png'),
			altText: 'Shades',
			title: 'Shades',
			description: 'Intelligent shades that adjust to natural light, time, or temperature for optimal comfort.',
			link: './av-entertainment',
		},
		{
			imageUrl: require('../img/front/heat-snowflake.png'),
			altText: 'Climate Control',
			title: 'Climate Control',
			description: 'Effortless automation for optimal temperature and energy savings, room by room.',
			link: './av-entertainment',
		},
		{
			imageUrl: require('../img/front/video-intercoms.png'),
			altText: 'Video Intercoms',
			title: 'Video Intercoms',
			description: "See who's at the door or chat with other rooms. Secure, convenient communication at your fingertips.",
			link: './av-entertainment',
		},
		{
			imageUrl: require('../img/front/door-knob.png'),
			altText: 'Door Locks',
			title: 'Door Locks',
			description: "Smart locks for enhanced security, letting you control access to your home remotely.",
			link: './av-entertainment',
		},
		{
			imageUrl: require('../img/front/gates-automation.png'),
			altText: 'Gates Automation',
			title: 'Gates Automation',
			description: "Simplify access and enhance security with automated gate solutions that integrate with your home system.",
			link: './av-entertainment',
		},
		{
			imageUrl: require('../img/front/control4-certified.png'),
			altText: 'Control4 Certified',
			title: 'Control4 Certified',
			description: "Our technicians are Control4 certified, assuring expertise in the premier home automation platform.",
			link: './av-entertainment',
		},
		{
			imageUrl: require('../img/front/rms-care-icon.png'),
			altText: 'Care+ Remote Support',
			title: 'Care+ Remote Support',
			description: "Help is a call away. Experience fast, effective troubleshooting without the wait.",
			link: './av-entertainment',
		},
		{
			imageUrl: require('../img/front/our-guarantee-icon.png'),
			altText: 'RMS Guaranteed',
			title: 'RMS Guaranteed',
			description: "Enjoy our 30-day workmanship guarantee for peace of mind.",
			link: './av-entertainment',
		},
	];
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: HomeAutomationImg,
		altText: 'Home Automation'
	};

	// Text Overlay Props
	const textOverlay = {
		imgURL: require("../img/front/quality-bg.jpg"),
		imgAltText: "Quality",
		title: "Quality",
		description: "As mentioned a few lines above, the products we have selected for our customers exceed our expectations. The manufacturer's warranties go between two and ten years, and we personally take care of your claims, if any. We recommend carefully checking our partnered Care+ plans again because some of them include warranty management for those cases when you want to integrate 3rd party devices only supported by their manufacturers for no more than a year."
	}
	return (
			<>
				<Helmet>
					<title>Home Automation</title>
				</Helmet>
				<BreadCrumbs title="Home Automation" />
				<BannerTop {...bannerProps} />
				<TvInstallation installationsData={installationsData} useSlickSlider={true} customClass="grid automation redBg-9" />
				<Container>
					<Row>
						<Col sm={12}>
						<	VideoBox singleVideo={true} />
						</Col>
					</Row>
				</Container>
				<Container className="py-md-5 py-3">
					<Row className="d-md-flex align-items-md-center">
						<Col lg={6}>
							<p>Getting lost in the growing offer of products to automate everyday tasks at home is extremely easy. From the single-button-to-do-all promise to the latest gadget created only to customize fingernail looks, you will find a wild diversity of hardware created by well-known brands, newcomers, or established companies only known by a minority, offering different levels of quality, comfort, integration, and security.</p>
							<p>Having positioned ourselves through our expertise as integrators, RMS Installs provides home automation solutions at a pretty defined range. Read more about the general landscape and where our services are located to know if we are the best fit for your home automation project.</p>
						</Col>
						<Col lg={6}>
							<div className="img">
								<img src={require('../img/front/home-automation-banner.jpg')} alt="home automation" className="img-fluid" loading="lazy" />
							</div>
						</Col>
					</Row>
				</Container>
				<Container className="list-holder py-md-3 py-1">
					<Row>
						<Col lg={5}>
							<img src={require('../img/front/security.jpg')} alt="Security" className="img-fluid" loading="lazy" />
						</Col>
						<Col lg={7}>
							<h3>Security</h3>
							<p>One of our main customer concerns is security and privacy. That's why we will not discuss automation systems developed by big companies like Amazon, Apple, Google, and Windows. Still, now and then, people fall in love with one or more of their features or gadgets. Working simultaneously at two different levels, we provide reliable platforms that allow us to integrate those gadgets or improved versions of any given feature without compromises:</p>
							<ul className="tick-list">
								<li>
									<i className="ico"><FontAwesomeIcon icon={faCheck} /></i>
									<h4>The foundation</h4>
									<p>We design a secure and tailored network solution as the foundation of every automation system we install.</p>
								</li>
								<li>
									<i className="ico"><FontAwesomeIcon icon={faCheck} /></i>
									<h4>The controller</h4>
									<p>A complete but inexpensive and secure computer embedded in a sealed box drives every device connected to itself or to the network.</p>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
				<div className="integration">
					<Container>
						<Row className="mb-4">
							<Col lg={7}>
								<h3>Integration</h3>
								<p>Amazon, Apple, and Google started Project CHIP (Connected Home over IP) in December 2019, aiming to negotiate a standard to provide easy, secure, and reliable integration between all automation platforms and devices. At RMS Installs, we are big fans of the project (called Matter now), and we dream of seeing the day when our customers can start connecting a few intelligent devices on a budget and grow their homes into fully controlled ecosystems.</p>
								<p>But at least for the next couple of years, we will still advise our clients to start with a robust platform if they don't want their systems to fall short of capabilities or become suddenly outdated. We offer two lines of controllers:</p>
							</Col>
							<Col lg={5}>
								<div className="img">
									<img src={require('../img/front/integration.jpg')} alt="integration" className="img-fluid" loading="lazy" />
								</div>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col lg={3}>
								<div className="img">
									<img src={require('../img/front/lutron.jpg')} alt="lutron" className="img-fluid" loading="lazy" />
								</div>
							</Col>
							<Col lg={9}>
								<h4>Lutron</h4>
								<p>When entertainment media is not your priority, but you enjoy your space versatility, Lutron specializes in high-quality, elegantly-designed Lighting and Shade solutions with tangible and virtual controls. Using radio frequencies bridged to your network and WiFi-connected devices, Lutron provides a secure, responsive, and reliable system that will not disappoint you when you want to create the right ambiance for any room, event, or situation on the fly.</p>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col lg={3}>
								<div className="img">
									<img src={require('../img/front/control4.jpg')} alt="Control4" className="img-fluid" loading="lazy" />
								</div>
							</Col>
							<Col lg={9}>
								<h4>Control4</h4>
								<p>Where the one-button controlled home is at most just a sci-fi story, Control4 is the real One-App solution: absolutely everything can be controlled from their smartphone App with a Control4 controller, including other brands' controllers, like Lutron's, Alexa, Apple's HomeKit, Google Nest, etcetera. Forget about having different remotes for every device and go beyond universal remotes using your voice (with Alexa or more secure and reliable solutions) to control media distributed to multiple rooms, small and big home theaters, high-fi audio equipment, projectors or video walls; thermostats; surveillance and alarm systems; doors, gates, and intercoms; the access to your network or Internet connection; and why not, robots and fingernail printers. With Control4, technical limits are not in the system but in your integrator's knowledge.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<GetAQuote />
				<Container className="py-md-5 py-2">
					<Row className="mb-3">
						<Col sm={12} className="text-center">
							<h3>Comfort</h3>
							<p>At RMS Installs, comfort starts with a carefully designed user experience and ends with <br /> excellent, hassle-free, continuous customer support:</p>
						</Col>
					</Row>
					<Row>
						<Col lg={6}>
							<div className="img mb-2">
								<img src={require('../img/front/ux.jpg')} alt="User Experience" className="img-fluid" loading="lazy" />
							</div>
							<h4 className="fw-bold">UX</h4>
							<p>A great user experience design comprises planning and communication from simplicity to luxury. A home automation project can involve multiple companies, from electricians, plumbers, and HVAC technicians to construction managers, architects, and interior designers. RMS Installs design services stand as a bridge in the middle, providing professional-grade plans for Low Voltage, Lighting and Media distribution, load schedules, rack layouts, and thorough documentation management.</p>
						</Col>
						<Col lg={6}>
							<div className="img mb-2">
								<img src={require('../img/front/customer-support.jpg')} alt="customer support" className="img-fluid" loading="lazy" />
							</div>
							<h4 className="fw-bold">Customer Support</h4>
							<p>We have seen control4 controllers running for over ten years without needing replacement. They keep up-to-date with the evolution of surrounding technologies through the deployment of updates. Most of the time, they can be performed automatically, but now and then, they require integration expertise, like car maintenance. Proportionally, the same can be said about all the pieces of software and hardware orchestrated by the controller. We have partnered with a new company created with the knowledge to provide affordable and convenient support solutions in the short, mid, and long term. Please review their offer to learn more.</p>
						</Col>
					</Row>
				</Container>
				<TextOverlay {...textOverlay} />
				<WhyChooseUs />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default HomeAutomation;