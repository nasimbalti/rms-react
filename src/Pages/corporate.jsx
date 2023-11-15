import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import SlickWithCaption from "../Components/SlickWithCaption/SlickWithCaption";
import MedicalMonitors from '../Components/MedicalMonitors/MedicalMonitors';
import GetAQuote from "../Components/GetAQuote/GetAQuote";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

// Banner Top Img Path
import corporateImg from '../img/front/corporate-solutions-banner.jpg';

//Slick First Img Path
import ecoSysytemImg from '../img/front/ecosystem.jpg';
import ecoSysytem3Img from '../img/front/ecosystem3.jpg';
import vivitekImg from '../img/front/vivitek_NEW_NovoTouch-scaled.jpg';

// Medical Monitors Img Path
import InteractivityImg from '../img/front/gesture.jpg';
import ConnectivityImg from '../img/front/connectivity.jpg';
import DualNetworkImg from '../img/front/platforms.jpg';

function Corporate() {
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: corporateImg,
		altText: 'corporate solutions',
		captions: (
			<>
				<h2>
					<span>OUTPACE COMPETITION</span>
					<strong>WITH BREAKTHROUGH TECH</strong>
				</h2>
			</>
		)
	};

	// Slick First Slides
	const slides1 = [
		{
			images: [ecoSysytemImg],
			captions: ['Empower your team with the innovative Novo Ecosystem. This versatile solution provides a collaborative platform for sharing ideas, brainstorming, and working together on projects. The NovoTouch displays are just an example, featuring a stunning 4K Ultra HD display, responsive touch technology, and wireless screen-sharing capabilities, allowing team members to present and interact with content effortlessly.']
		},
		{
			images: [ecoSysytem3Img],
			captions: ['Empower your team with the innovative Novo Ecosystem. This versatile solution provides a collaborative platform for sharing ideas, brainstorming, and working together on projects. The NovoTouch displays are just an example, featuring a stunning 4K Ultra HD display, responsive touch technology, and wireless screen-sharing capabilities, allowing team members to present and interact with content effortlessly.']
		},
		{
			images: [vivitekImg],
			captions: ['Empower your team with the innovative Novo Ecosystem. This versatile solution provides a collaborative platform for sharing ideas, brainstorming, and working together on projects. The NovoTouch displays are just an example, featuring a stunning 4K Ultra HD display, responsive touch technology, and wireless screen-sharing capabilities, allowing team members to present and interact with content effortlessly.']
		}
	]

	// Custom Slick Settings
	const slickSettings = {
		dots: false,
		fade: true,
		autoplay: true,
		infinite: true,
		speed: 600,
		autoplaySpeed: 5000,
	};

	// Medical Monitors
	const monitorsData = [
		{
			title: 'Touch and gesture-based interactivity',
			image: InteractivityImg,
			alt: 'Touch and gesture-based interactivity'
		},
		{
			title: 'Wide range of connectivity options',
			image: ConnectivityImg,
			alt: 'Wide range of connectivity options'
		},
		{
			title: 'Dual network support and truly multiplatform Especially useful for facilitating seamless switching from Corporate-to-Guest interaction',
			image: DualNetworkImg,
			alt: 'Dual network support'
		}
	];

	return (
			<>
				<Helmet>
					<title>Corporate Business Solutions</title>
				</Helmet>
				<BreadCrumbs title="Corporate Business Solutions" />
				<BannerTop {...bannerProps} />
				<Container>
					<Row className="py-md-5">
						<Col sm={12}>
							<p>At RMS Installs, we understand that businesses need advanced technology solutions to stay competitive, productive, and secure. We offer comprehensive solutions to meet these demands, including network installation, conferencing solutions, collaborative and interactive solutions, surveillance systems, and automation control. Let our team assist you in transforming your workspace and streamlining operations with our innovative solutions.</p>
						</Col>
					</Row>
					<Row className="text-center">
						<Col sm={12}>
							<h3>Networking Installation</h3>
							<p>We recognize the importance of a well-designed structured wiring system as the backbone of your corporate technology infrastructure. Our team of skilled professionals has extensive experience planning, installing, and maintaining structured wiring solutions catering to your business's specific needs. We utilize high-quality materials and industry best practices to ensure a reliable network supporting your organization's data, voice, and multimedia systems.</p>
						</Col>
					</Row>
					<Row className="py-md-5">
						<Col lg={5}>
							<div className="img">
								<img className="img-fluid" src={require('../img/front/rack_demi_light.jpg')} alt="Rack Demi Light" loading="lazy" />
							</div>
						</Col>
						<Col lg={7}>
							<p>RMS Installs proudly offer expert setup and management of Layer 3 Network systems designed to provide businesses with robust, reliable, and high-performance network infrastructure. With Pakedge MS Series, ensure seamless connectivity and communication between devices, enabling your employees to collaborate efficiently and stay productive.</p>
							<p>Pakedge Layer 3 switches offer rich and advanced features, such as Quality of Service (QoS) for prioritizing critical data traffic, VLAN support for network segmentation, and Layer 3 routing for improved performance and security. Get up to 10 Gbps SFP+ fiber uplinks and improved PoE+ budgeting to support more PoE-powered devices. Last but not least, our setups seize all the power of built-in remote management in case you want to outsource maintenance with our 24/7 support service.</p>
						</Col>
					</Row>
					<Row>
						<Col lg={5}>
							<div className="img">
								<img className="img-fluid" src={require('../img/front/a750.png')} alt="Rack Demi Light" loading="lazy" />
							</div>
						</Col>
						<Col lg={7}>
							<p>We strongly recommend the Access Networks A750 Access Point to enhance your network capabilities further. This enterprise-grade access point delivers fast, reliable Wi-Fi coverage and supports the latest Wi-Fi 6 technology for maximum performance in high-density user environments. With its sleek design and advanced features, such as multi-user MIMO, OFDMA, and advanced roaming capabilities, the A750 Access Point ensures seamless connectivity and exceptional user experience for all your corporate needs.</p>
						</Col>
					</Row>
					<Row className="py-md-5">
						<Col sm={12} className="text-center">
							<h3>Conferencing Solutions</h3>
						</Col>
					</Row>
					<Row className="flex-lg-row-reverse mb-md-5">
						<Col lg={6}>
							<div className="img">
								<img className="img-fluid" src={require('../img/front/conferencing-diagram-main.jpg')} alt="conferencing" loading="lazy" />
							</div>
						</Col>
						<Col lg={6}>
							<p>Conference spaces play an incredibly critical role in business; they're where business plans are mapped out, big deals are finalized, and employees collaborate daily.</p>
							<p>RMS Installs offers a wide range of conferencing solutions designed to meet the diverse needs of modern businesses. Our audio and video conferencing solutions enable clear, high-quality communication and collaboration, regardless of your team's location. Experience crystal-clear audio with our range of microphones, speakers, and audio processors, ensuring that every participant can be heard and understood during conference calls.</p>
							<p>In addition, we offer seamless integration with popular collaboration platforms, such as Microsoft Teams, Zoom, and Google Meet, making it easy to connect and collaborate with your team.</p>
						</Col>
					</Row>
					<Row className="pb-4">
						<Col sm={12}>
							<h3 className="text-center mb-3">Collaborative and Interactive Solutions</h3>
							<SlickWithCaption slides={slides1} customSettings={slickSettings} />
						</Col>
					</Row>
				</Container>
				<MedicalMonitors monitors={monitorsData} className="small-caption" />
				<Container>
					<Row>
						<Col sm={12} className="mb-md-4">
							<p>The NovoTouch also offers a suite of built-in collaboration tools, including annotation, whiteboarding, and screen sharing, making it easy for your team to collaborate in real time, easily integrated with all our other Conferencing solutions. With its flexible connectivity options and compatibility with popular operating systems, the NovoTouch is the perfect solution for any corporate environment.</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="mb-md-4">
							<h3>Surveillance Systems</h3>
							<p>Secure your corporate premises with Luma Surveillance Systems, designed to provide comprehensive security and monitoring solutions for businesses. Our high-quality cameras and recording equipment offer clear video footage, allowing you to monitor and protect your assets, employees, and facilities effectively. Luma Surveillance Systems can be easily integrated with other security measures, such as access control and alarm systems, to create a complete and customized security solution for your business.</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="mb-md-4">
							<h3>Automation Systems</h3>
							<p>Streamline your business operations with Control4 Automation Systems, designed to simplify the management of your corporate environment, integrating any technology in a simple, elegant, and comprehensive interface you can access from any mobile device. Control4 enables centralized control of multi-room audio, video, lighting, temperature, and security systems. Experience improved efficiency and productivity by integrating Control4 into your corporate environment.</p>
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
export default Corporate;