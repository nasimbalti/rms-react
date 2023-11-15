import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import TvInstallation from '../Components/TvInstallation/TvInstallation';
import SurveillanceInstallationPackages from "../Components/SurveillanceInstallationPackages/SurveillanceInstallationPackages";
import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

// Banner Top Img Path
import SurveillanceImg from '../img/front/surveillance-banner.jpg';

function SurveillanceInstallation() {
	// Out Door Entertainment Settings
	const installationsData = [
		{
			imageUrl: require('../img/front/poe-cameras.png'),
			altText: 'PoE Cameras',
			title: 'PoE Cameras',
			description: 'A single cable for power and video transmission makes it easier to reach any corner in your house.',
			link: './poe-cameras',
		},
		{
			imageUrl: require('../img/front/wireless-cameras.png'),
			altText: 'Wireless Cameras',
			title: 'Wireless Cameras',
			description: 'From doorbells to secret locations, place a camera anywhere you like.',
			link: './poe-cameras',
		},
		{
			imageUrl: require('../img/front/tracking-cameras.png'),
			altText: 'Tracking Cameras',
			title: 'Tracking Cameras',
			description: 'Stay on top of every movement with our tracking cameras, providing real-time ID of intruders or car plates.',
			link: './poe-cameras',
		},
		{
			imageUrl: require('../img/front/rms-care-icon.png'),
			altText: 'Remote Support',
			title: 'Remote Support',
			description: "Never feel left alone with our dedicated remote support, always ready to assist in maintaining your security systems' optimal performance.",
			link: './poe-cameras',
		},
		{
			imageUrl: require('../img/front/our-guarantee-icon.png'),
			altText: 'RMS Guaranteed',
			title: 'RMS Guaranteed',
			description: "Invest with confidence. We stand by our work with a 30-day guarantee for your satisfaction.",
			link: './poe-cameras',
		},
	];
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: SurveillanceImg,
		altText: 'Surveillance'
	};
	return (
			<>
				<Helmet>
					<title>Surveillance Installation</title>
				</Helmet>
				<BreadCrumbs title="Surveillance Installation" />
				<BannerTop {...bannerProps} />
				<TvInstallation installationsData={installationsData} useSlickSlider={true} customClass="surveillance redBg-4" />
				<Container>
					<Row>
						<Col sm={12}>
							<h3>Custom RMS Packages</h3>
						</Col>
					</Row>
				</Container>
				<SurveillanceInstallationPackages />
				<Container>
					<Row>
						<Col sm={12}>
							<p>An environment that's secure yet sophisticated. Where you can keep an eye on everything that matters while you are home or away from your phone, tablet, PC, or a dedicated monitor. Welcome to RMS Installs' Surveillance Installation Services, where we prioritize your security without compromising comfort. Let's explore the different ways we can make this a reality.</p>
							<h3>Selecting IP Cameras</h3>
							<p>Experience superior image quality, a larger field of view, and great flexibility with our Internet Protocol (IP) cameras. These cameras use your network to transmit video, making them easily scalable to cover as many areas as you need.</p>
							<div className="img mb-md-5 mb-3">
								<img src={require('../img/front/ip-cameras.jpg')} alt="IP Cameras" className="d-block w-100" loading="lazy" />
							</div>
						</Col>
					</Row>
					<Row className="d-lg-flex flex-lg-row-reverse align-items-lg-center mb-3">
						<Col lg="4">
							<div className="img mb-3">
								<img src={require('../img/front/ptz-camera.png')} alt="ptz camera" className="d-block img-fluid m-auto" loading="lazy" />
							</div>
						</Col>
						<Col lg="8">
							<ul className="list">
								<li><FontAwesomeIcon icon={faCircleRight} /><strong>Fixed IP Cameras:</strong> These cameras are ideal for monitoring specific zones, capturing footage from a set viewing field. They're perfect for doorways, gates, or any area needing constant monitoring.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /><strong>PTZ Cameras:</strong> Pan-Tilt-Zoom (PTZ) cameras offer the flexibility to move and capture different angles and areas. With the ability to rotate, tilt, and zoom, these cameras provide comprehensive surveillance for larger or high-risk areas.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /><strong>Dome Cameras:</strong> Dome cameras are typically used for indoor surveillance. Their sleek design makes them unobtrusive, and their dome-shaped housing can make it difficult for people to determine the camera's pointing direction, enhancing their deterrent effect.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /><strong>Bullet Cameras:</strong> Known for their long, cylindrical shape, they are designed for outdoor use. They are often equipped with infrared night vision, allowing them to record images and videos in complete darkness.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /><strong>Doorbell Cameras:</strong> Doorbell cameras serve a dual purpose - they inform you of who's at your door and provide video surveillance of your entrance area. These smart cameras offer real-time alerts and video streaming, allowing you to see, hear, and speak to visitors, even when you're not home.</li>
							</ul>
						</Col>
					</Row>
					<Row className="d-lg-flex align-items-lg-center">
						<Col lg="6">
							<div className="img mb-3">
								<img src={require('../img/front/nvr-img.png')} alt="nvr camera" className="d-block img-fluid m-auto" loading="lazy" />
							</div>
						</Col>
						<Col lg={6}>
							<h3>Understanding the NVR</h3>
							<p>The Network Video Recorder, or NVR, brings your surveillance system together. Acting as the hub of your surveillance system, the NVR provides one or more large-capacity, fast data-writing hard drives to record video footage from your IP cameras, allowing you to playback and analyze recorded footage at any time and from anywhere. Depending on your specific needs, we can help you choose the right NVR with the appropriate storage capacity and features.</p>
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
export default SurveillanceInstallation;