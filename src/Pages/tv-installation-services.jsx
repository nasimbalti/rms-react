import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import TvInstallation from '../Components/TvInstallation/TvInstallation';
import TVProInstallationPackages from "../Components/TVProInstallationPackages/TVProInstallationPackages";
import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

// Banner Top Img Path
import TVInstallationImg from '../img/front/tv-installation-services-banner.jpg';

import SlickWithCaption from "../Components/SlickWithCaption/SlickWithCaption";

//Slick First Img Path
import TVMountImg1 from '../img/front/tiltMount_1.jpg';
import TVMountImg2 from '../img/front/tiltMount_2.jpg';

function TVInstallationServices() {
	// TV Installation Services Settings
	const installationsData = [
		{
			imageUrl: require('../img/front/tv-set-icon.png'),
			altText: 'High-End TVs',
			title: 'High-End TVs',
			description: 'From outdoor TVs to outstanding resolutions, ask for our unique on-demand models.',
			link: './contact-service-user',
		},
		{
			imageUrl: require('../img/front/tv-mounts-icon.png'),
			altText: 'TV Mounting',
			title: 'TV Mounting',
			description: 'A mount for every room and viewing scenario.',
			link: './contact-service-user',
		},
		{
			imageUrl: require('../img/front/cables-icon.png'),
			altText: 'Cables Concealing',
			title: 'Cables Concealing',
			description: 'Strategic concealing of power and signal cables. The craft of TV installation.',
			link: './contact-service-user',
		},
		{
			imageUrl: require('../img/front/power-plug-icon.png'),
			altText: 'Power Management',
			title: 'Power Management',
			description: 'Proper handling of high voltage takes care of your low voltage investment.',
			link: './contact-service-user',
		},
		{
			imageUrl: require('../img/front/frames-icon.png'),
			altText: 'The Frame Experts',
			title: 'The Frame Experts',
			description: "An state-of-the art TV needs real artists to perform its installation.",
			link: './contact-service-user',
		},
		{
			imageUrl: require('../img/front/rms-care-icon.png'),
			altText: 'Care+ Remote Support',
			title: 'Care+ Remote Support',
			description: "Help is a call away. Experience fast, effective troubleshooting without the wait.",
			link: './contact-service-user',
		},
		{
			imageUrl: require('../img/front/our-guarantee-icon.png'),
			altText: 'RMS Guaranteed',
			title: 'RMS Guaranteed',
			description: "Enjoy our 30-day workmanship guarantee for peace of mind.",
			link: './contact-service-user',
		},
	];
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: TVInstallationImg,
		altText: 'TV Installation Service'
	};

	// Slick First Slides
	const slides1 = [
		{ images: [TVMountImg1] },
		{ images: [TVMountImg2] },
	]

	return (
			<>
				<Helmet>
					<title>TV Installation</title>
				</Helmet>
				<BreadCrumbs title="TV Installation" />
				<BannerTop {...bannerProps} />
				<TvInstallation installationsData={installationsData} useSlickSlider={true} customClass="installation-services redBg-6" />
				<TVProInstallationPackages />
				<div className="text-area">
					<Container>
						<Row>
							<Col sm={12}>
								<p>Every detail matters when it comes to your TV installation. RMS Installs trains a dedicated team capable of ensuring the safe mounting of your television, clean concealment of all wires, and meticulous setup of any TV model. We strive to deliver a ready-to-use, streamlined experience right out of the box, from configuring language preferences and an internet connection to setting up your favorite streaming apps and TV control automation.</p>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col md={9}>
								<h3>Optimal Viewing | Selecting the Right TV Mount</h3>
								<p>Different rooms and viewing scenarios require different types of TV mounts.</p>
								<h4>Fixed Mount</h4>
								<p>Best for eye-level installations where no movement is needed. This option provides a sleek, minimalistic look.</p>
								<h4>Tilt Mount</h4>
								<p>Ideal for installations above the optimal viewing level or sunny rooms prone to glare during specific times of the day.</p>
								<p>Tilt mounts allow vertical angle adjustment, offering the perfect solution for managing reflections and maintaining optimal picture quality no matter the time.</p>
							</Col>
							<Col md={3}>
								<SlickWithCaption slides={slides1} fadeEffect={true} customClass="dots-overlay" />
							</Col>
						</Row>
						<Row>
							<Col sm={12} className="text-center mb-4">
								<h3>Articulating Mount</h3>
							</Col>
						</Row>
						<Row className="mb-md-5 mb-3">
							<Col md={6}>
								<div className="img">
									<img src={require('../img/front/articulatingMount.jpg')} alt="articulating mount" className="w-100 d-block" loading="lazy" />
								</div>
							</Col>
							<Col md={6}>
								<p>It offers the most flexibility with extendable arms that can tilt, swivel, and pivot, making it perfect for rooms with multiple viewing spots or TVs that need to be tucked away when not in use, such as in a cabinet or specialized furniture. It's also perfect for corner installations or areas where light reflections vary throughout the day.</p>
								<p>For a neater, more integrated finish, consider adding an in-wall enclosure. This feature neatly recesses power bricks and small media sources, like Cable TV or streaming boxes, contributing to a more polished, flush look for your entertainment space.</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12} className="text-center mb-4">
								<h3>Ceiling Mount</h3>
							</Col>
						</Row>
						<Row>
							<Col md={6}>
								<div className="img height">
									<img src={require('../img/front/ceilingManual-5.gif')} alt="ceiling Manual" className="w-100 d-block" loading="lazy" />
								</div>
								<p>Versatility defines the Ceiling Mount, liberating your TV viewing experience from the constraints of wall space. When not in use, the TV can be neatly retracted towards the ceiling, either flipped horizontally with the screen parallel to the floor -an option not recommended for certain TV models- or vertically slid, tucked neatly within the ceiling while facing forward.</p>
								<p>When it's showtime, effortlessly bring down the TV to your preferred viewing height. Whether you favor the hands-on control of our manual versions or the smooth, automated convenience of our motorized options, we cater to your preferences.</p>
							</Col>
							<Col md={6}>
								<div className="img height">
									<img src={require('../img/front/ceilingMotorized-1.gif')} alt="ceiling Motorized" className="w-100 d-block" loading="lazy" />
								</div>
								<p>Our installation team can integrate any motorized mount's functionality into your whole-house control system. Select your media source or favorite show, and watch as your TV descends without pushing additional buttons. Switch your TV off, and it automatically retracts.</p>
								<p>The Ceiling Mount is especially suited for multi-purpose rooms, spaces with limited wall space, or areas with unique architecture, like glass-surrounded rooms. It offers a seamless blend of aesthetics, functionality, and innovation for your viewing pleasure</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12} className="text-center mb-4">
								<h3>Mantle Mount</h3>
								<p>Explicitly designed for over-the-mantle installations, this mount can lower the TV to a more comfortable viewing height and raise it back over the mantle when not.</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12}>
								<div className="img mb-3">
									<img src={require('../img/front/mantelMount-1.gif')} alt="Mantel Mount" className="w-100 d-block" loading="lazy" />
								</div>
								<p>Users can easily tilt, swivel, or pull their TV off the wall and set it to eye level using convenient handles. As with Ceiling Mounts, we also offer motorized solutions to lower and swivel the TV with one quick click in a remote or tap on a mobile app: get fluid noise-less motion from the comfort of your couch.</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12}>
								<h3>A Neater Look | The Magic of Cable Concealing</h3>
								<p>Exposed wires can disrupt the clean, modern aesthetic of your living space. At RMS Installs, we excel in cable concealing, ensuring all wires from your TV and connected devices are hidden from view, even through all the mount's possible movements. This doesn't just enhance the look of your TV area but helps prevent accidents caused by loose cables, creating a safer environment for children and pets.</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12}>
								<h3>State of the Art | Experience the Samsung Frame TV</h3>
							</Col>
						</Row>
						<Row className="mb-md-4 mb-2">
							<Col lg={7}>
								<p>We recommend the Samsung Frame TV for those who prefer a genuinely flush installation. When professionally mounted, it sits flush against the wall, creating an artful seamless integration that looks just like a picture frame.</p>
								<p>Enjoy more screen visibility with no light reflection, night or day. Anti-Reflection technology and the Matte Display Film premium matte finish limit light distraction on your screen by reducing the effects of glare.</p>
								<p>This TV can display works of art when you're not watching your favorite shows, making it a stylish addition to your home decor while serving a dual purpose.</p>
								<p>Customize The Frame with a stylish bezel to fit your décor, choosing from modern or beveled finishes. For those who love aesthetics as much as functionality, the Samsung Frame TV is the perfect choice.</p>
							</Col>
							<Col lg={5}>
								<div className="img">
									<img src={require('../img/front/theFrame.jpg')} alt="The Frame" className="w-100 d-block" loading="lazy" />
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<GetAQuote />
				<WhyChooseUs />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default TVInstallationServices;