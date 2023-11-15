import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import VideoSolutions from '../Components/VideoSolutions/VideoSolutions';
import SlickWithCaption from "../Components/SlickWithCaption/SlickWithCaption";
import GetAQuote from "../Components/GetAQuote/GetAQuote";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

//Slick First Img Path
import OLedDualView1 from '../img/front/oled-dualview-1.jpg';
import OLedDualView2 from '../img/front/oled-dualview-2.jpg';
import OLedDualView3 from '../img/front/oled-dualview-3.jpg';

//Slick Second Img Path
import OtoGround from '../img/front/oto_ground.jpg';
import OtoSufrace from '../img/front/oto_surface.jpg';
import OtoTree from '../img/front/oto_tree.jpg';

// Banner Top Img Path
import retailImg from '../img/front/retail-banner.jpg';

// Video Solutions Img Path
import VideoSolImg from '../img/front/video-display.jpg';

// Commercial Grade Speaker Img Path
import CommercialSpkrImg from '../img/front/episode_retail.jpg';

// Commercial Grade Speaker Img Path
import SurveillanceImg from '../img/front/chossingACamera.jpg';

function Retail() {
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: retailImg,
		altText: 'Retail',
		captions: (
			<>
				<h2>
					<span>REVOLUTIONIZE RETAIL</span>
					<strong>ENGAGE, INSPIRE, DELIGHT</strong>
				</h2>
			</>
		)
	};

	// Video Solutions Props Settings
	const videoSolProps = {
		imageUrl: VideoSolImg,
		altText: 'Video Display and Signage Solutions',
		heading: 'Video Display and Signage Solutions',
		caption: (
			<>
				<p><strong>Flexible Curved Open Frame OLED Signage</strong> <br /> Blending in with the space while stamped on everyone's mind. <br /> With LG OLED signage, discover unprecedentedly flexible design.</p>
			</>
		)
	}

	// Slick First Slides
	const slides1 = [
		{ images: [OLedDualView1] },
		{ images: [OLedDualView2] },
		{ images: [OLedDualView3] }
	]

	// Commercial Grade Speaker Props Settings
	const commercialSpkrProps = {
		imageUrl: CommercialSpkrImg,
		altText: 'Commercial Speaker',
		caption: (
			<>
				<p>Episode&reg; Pendant <br />Speakers feature a wide dispersion that effectively projects sound from tall, open ceilings.</p>
			</>
		)
	}

	// Slick First Slides
	const slides2 = [
		{ images: [OtoGround] },
		{ images: [OtoSufrace] },
		{ images: [OtoTree] }
	]

	// Surveillance Solutions Props Settings
	const SurveillanceSolProps = {
		imageUrl: SurveillanceImg,
		altText: 'Surveillance and Security Solutions',
		heading: 'Surveillance and Security Solutions',
		caption: (
			<>
				<p>SnapAV Surveillance and Security Solutions can help you secure your store and protect your assets. From IP cameras to smart locks, we offer various options to provide real-time surveillance and control over who enters your store. Our experienced team can also help you design and install a security system that meets your specific needs and budget.</p>
			</>
		)
	}

	return (
			<>
				<Helmet>
					<title>Retail Business Solutions</title>
				</Helmet>
				<BreadCrumbs title="Retail Business Solutions" />
				<BannerTop {...bannerProps} />
				<Container className="py-5">
					<Row>
						<Col sm={12}>
							<p>At RMS Installs, we understand how creating an immersive shopping experience is essential for retail businesses to engage customers and increase sales. Whether you're looking to enhance your store's aesthetics or improve your customers' shopping experience, we offer comprehensive audiovisual solutions that can meet your specific needs.</p>
							<p>Our experienced professionals work with leading brands, such as LG, Episode, Control4, Vivitek, and SnapAV, to design and install state-of-the-art <a href="/">video displays</a>, <a href="/">comprehensive audio solutions</a>, <a href="/">control systems</a>, and <a href="/">surveillance platforms</a> that can transform your store into an interactive and engaging space.</p>
						</Col>
					</Row>
				</Container>
				<VideoSolutions {...videoSolProps}/>
				<Container className="py-5">
					<Row className="flex-md-row-reverse">
						<Col lg={6}>
							<SlickWithCaption slides={slides1} />
						</Col>
						<Col lg={6}>
							<p>Showcase your products and promotions in an eye-catching and dynamic way. We offer various options, such as video walls, digital signage, and OLED displays, that can create an immersive shopping experience and increase customer engagement.</p>
							<p>Achieve your most ambitious design goals without compromising technical quality: the deepest blacks, the most accurate and stable color reproduction, and a wide viewing angle.</p>
							<p>Using its built-in high-performance chips, each display plays its video tile without lag for synchronized content playback. Coordinated through our expert LAN integration, updates can be done without message interruptions.</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col sm={12}>
							<div className="img pb-4">
								<img className="d-block m-auto w-100" src={require('../img/front/quickDesign.jpg')} alt="Quick Design" loading="lazy" />
							</div>
							<p>Our experienced team provides a completely new approach for innovative and flexible designs, rapidly responding to on-site changes, making it easier to build a completely unique and eye-catching landmark successfully. We will also assist you with digital content creation and management to ensure your message is delivered effectively.</p>
						</Col>
					</Row>
				</Container>
				<Container className="mt-4">
					<Row>
						<Col sm={12}>
							<h3>Commercial-grade Speakers</h3>
							<p>From indoor pendant and in-ceiling speakers to outdoor surface-mount, and commercial landscape series, we offer various options that can complement your store’s design while providing excellent sound quality.</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<VideoSolutions {...commercialSpkrProps}/>
						</Col>
					</Row>
					<Row className="pt-5">
						<Col lg={8}>
							<p>Featuring top-grade components and durable construction, these professional-grade products provide quality audio designed specifically for commercial applications. Equipped with a smart two-way design, outstanding driver voicing, and a 1st order crossover that together provide improved low-frequency response and sound clarity beyond expectations.</p>
							<p>Our experienced team will design and install a sound system perfectly suited to provide background music, paging applications, and even sound distribution throughout your store or facility.</p>
							<p>volume level every time. Our landscape speakers are constructed with a polypropylene woofer for deep, full sound, and an ultra-responsive aluminum or titanium dome tweeter for high frequencies.</p>
						</Col>
						<Col lg={4}>
							<SlickWithCaption slides={slides2} />
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<h3>Automation Systems</h3>
							<p>Integrating Control4, the Vivitek Novo Ecosystem, and LG's suite for content administration, our automated systems can help you manage all your audiovisual systems from a central interface. With Control4, you can control your entire store's audiovisual system using a smartphone, tablet, or remote control, even from a remote location. Control4 can also be integrated with other systems, such as lighting and climate control, to provide a seamless shopping experience. With Novo Ecosystem, multiple users can connect and display their content simultaneously, making it perfect for presentations, product demos, and group discussions, ideal tools to create a more collaborative and engaging shopping experience for your customers.</p>
						</Col>
					</Row>
				</Container>
				<VideoSolutions {...SurveillanceSolProps}/>
				<Container fluid className="pt-5 px-0">
					<GetAQuote />
				</Container>
				<WhyChooseUs />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default Retail;