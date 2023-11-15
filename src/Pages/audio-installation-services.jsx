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

import AudioProInstallationPackages from "../Components/AudioProInstallationPackages/AudioProInstallationPackages";

import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

// Banner Top Img Path
import AudioInstallationImg from '../img/front/audio-installation-banner.jpg';

function AudioInstallationServices() {
	// Audio Installation Services Settings
	const installationsData = [
		{
			imageUrl: require('../img/front/soundbar-icon.png'),
			altText: 'Soundbars',
			title: 'Soundbars',
			description: 'Sleek and powerful soundbars for a single-solution, room-filling sound.',
			link: './audio-installation',
		},
		{
			imageUrl: require('../img/front/audio-separates.png'),
			altText: 'Audio Separates',
			title: 'Audio Separates',
			description: 'Tailor your sound experience with our top-notch bookshelves and tower speakers for audiophiles.',
			link: './audio-installation',
		},
		{
			imageUrl: require('../img/front/in-ceiling-speaker.png'),
			altText: 'In-ceiling and In-wall',
			title: 'In-ceiling and In-wall',
			description: 'Save space without sacrificing style or audio quality with our architectural speaker installations.',
			link: './audio-installation',
		},
		{
			imageUrl: require('../img/front/avrs.png'),
			altText: 'AVRs',
			title: 'AVRs',
			description: 'Streamline your audio with high-quality Audio and Video Receivers for the ultimate in sound control.',
			link: './audio-installation',
		},
		{
			imageUrl: require('../img/front/amplifiers.png'),
			altText: 'Amplifiers',
			title: 'Amplifiers',
			description: "Boost your sound to new levels with our range of high-quality powerful amplifiers.",
			link: './audio-installation',
		},
		{
			imageUrl: require('../img/front/rms-care-icon.png'),
			altText: 'Care+ Remote Support',
			title: 'Care+ Remote Support',
			description: "Help is a call away. Experience fast, effective troubleshooting without the wait.",
			link: './audio-installation',
		},
		{
			imageUrl: require('../img/front/our-guarantee-icon.png'),
			altText: 'RMS Guaranteed',
			title: 'RMS Guaranteed',
			description: "Enjoy our 30-day workmanship guarantee for peace of mind.",
			link: './audio-installation',
		},
	];
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: AudioInstallationImg,
		altText: 'Audio Installation Service'
	};

	return (
			<>
				<Helmet>
					<title>Audio Installation</title>
				</Helmet>
				<BreadCrumbs title="Audio Installation" />
				<BannerTop {...bannerProps} />
				<TvInstallation installationsData={installationsData} useSlickSlider={true} customClass="installation-services redBg-6" />
				<AudioProInstallationPackages />
				<div className="text-area">
					<Container>
						<Row>
							<Col sm={12}>
								<p>We bring the concert hall, studio quality, and cinema-grade audio experience right into into your home. Our deep commitment to crafting immersive audio environments is reflected in the simplicity of our basic services:</p>
								<ul className="list">
									<li><FontAwesomeIcon icon={faCircleRight} /> Personalized consultation</li>
									<li><FontAwesomeIcon icon={faCircleRight} /> Meticulous installation</li>
									<li><FontAwesomeIcon icon={faCircleRight} /> Precise calibration to optimize your auditory journey</li>
									<li><FontAwesomeIcon icon={faCircleRight} /> And optional, whole-house control system integration</li>
								</ul>
								<p>We understand that every listening experience is unique, and so our range of solutions is designed with versatility in mind. Explore our four basic audio setup categories below: from the simplicity and elegance of Soundbars and the unparalleled performance of Audio Separates, to the subtle integration of Architectural Speakers and the outdoor enjoyment of Landscape Speakers. We offer custom solutions that cater to different listening preferences, design aesthetics, and living scenarios. So dive in, and let us assist you find the audio solution that sounds as good to your ears as it looks in your space.</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12} className="mb-2">
								<h3>Effortless Experience | Opt for Soundbars</h3>
							</Col>
						</Row>
						<Row className="d-md-flex align-items-md-center mb-md-5 mb-3">
							<Col lg={6}>
								<div className="img">
									<img src={require('../img/front/es-pwr-SNDBR-180-BLK-Living-Room1.jpg')} alt="es pwr SNDBR 180 BLK Living Room" className="d-block w-100" loading="lazy" />
								</div>
							</Col>
							<Col lg={6}>
								<p>Soundbars offer a clean and straightforward audio solution, ideal for those seeking simplicity without compromising on sound quality.</p>
								<p>Not limited to the TV audio solution, soundbars are compact, stylish, and incredibly easy to set up, providing impressive surround sound effects in a minimalist package. Our expert team will guide you through the vast array of options to find a soundbar that complements your aesthetic and fits seamlessly into your space.</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12} className="mb-2">
								<h3>High-Fidelity Pursuit | Discover Audio Separates</h3>
							</Col>
						</Row>
						<Row className="mb-md-5 mb-2">
							<Col sm={12} className="mb-2">
								<img src={require('../img/front/your-go-to-speakers.png')} alt="Your Speaker" className="d-block w-100" loading="lazy" />
							</Col>
						</Row>
						<Row className="d-md-flex align-items-md-center mb-md-5 mb-3 flex-md-row-reverse">
							<Col lg={6}>
								<div className="img">
									<img src={require('../img/front/den-pma-900HNE-5.jpg')} alt="den pma 900HNE" className="d-block w-100" loading="lazy" />
								</div>
							</Col>
							<Col lg={6}>
								<p>For the audiophiles who crave the nuances of pure, rich, and vibrant sound, audio separates are the way to go. By individually optimizing each component—Amplifiers, Pre-amps, Digital-to-Analog Conerters (DACs)- we can achieve the highest audio fidelity possible. Our consultants will guide you to assemble a system that satisfies your unique acoustic preferences and space requirements, transcending your audio experience from ordinary to extraordinary.</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12} className="mb-2">
								<h3>Invisible Power | Explore Architectural Speakers</h3>
							</Col>
						</Row>
						<Row className="d-md-flex align-items-md-center mb-md-5 mb-3">
							<Col lg={6}>
								<div className="img">
									<img src={require('../img/front/kef-Ci200QSb-THX_hide.jpg')} alt="kef Ci200QSb" className="d-block w-100" loading="lazy" />
								</div>
							</Col>
							<Col lg={6}>
								<p>Architectural speakers embody the perfect balance between design and performance, delivering crystal clear sound while remaining visually unobtrusive.</p>
								<p>Whether installed in-wall or in-ceiling, these speakers provide exceptional sound dispersion, filling your room with immersive, high-quality audio. Let us transform your space into an auditory haven that doesn’t compromise your interior design ethos.</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12} className="mb-2">
								<h3>Landscape Speakers</h3>
							</Col>
						</Row>
						<Row className="mb-md-5 mb-2">
							<Col sm={12} className="mb-2">
								<div className="img">
									<img src={require('../img/front/landscape-speakers.png')} alt="landscape speakers" className="d-block w-100" loading="lazy" />
								</div>
							</Col>
						</Row>
						<Row className="d-md-flex align-items-md-center mb-md-5 mb-3 flex-md-row-reverse">
							<Col lg={6}>
								<div className="img">
									<img src={require('../img/front/mob_outdoors_6_image.jpg')} alt="mob outdoors" className="d-block w-100" loading="lazy" />
								</div>
							</Col>
							<Col lg={6}>
								<p>Bring the party outside or enjoy a soothing evening with your favorite tunes accompanying you under the stars. Landscape speakers are built to blend seamlessly into your outdoor spaces, offering high-quality, weather-resistant audio that can transform your yard, patio, or pool area into an open-air entertainment center.</p>
								<p>From rock-shaped speakers that blend into flower beds to sleek, powerful speakers mounted onto your outdoor structures, we can design and install a system that beautifully merges with your outdoor aesthetics without compromising on audio quality.</p>
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
export default AudioInstallationServices;