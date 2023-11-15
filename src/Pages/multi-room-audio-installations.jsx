import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import TvInstallation from '../Components/TvInstallation/TvInstallation';

import MultiRoomAudioInstallationPackages from "../Components/MultiRoomAudioInstallationPackages/MultiRoomAudioInstallationPackages";

import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

// Banner Top Img Path
import MultiRoomAudioInstallationImg from '../img/front/multi-audio-hero.jpg';

function MultiRoomAudioInstallations() {
	// Multi Room Audio Settings
	const installationsData = [
		{
			imageUrl: require('../img/front/physical-controls.png'),
			altText: 'Physical Controls',
			title: 'Physical Controls',
			description: 'Effortlessly manage each room audio choosing from a variety of options, from wall knobs to touch panels.',
			link: './physical-controls',
		},
		{
			imageUrl: require('../img/front/app-controls.png'),
			altText: 'App Controls',
			title: 'App Controls',
			description: 'Your phone becomes a powerful remote control with our seamless app integration for your multi-room audio system.',
			link: './physical-controls',
		},
		{
			imageUrl: require('../img/front/multi-channel-amplifiers.png'),
			altText: 'Multi-Channel Amplifiers',
			title: 'Multi-Channel Amplifiers',
			description: 'Experience immersive sound across all rooms with our multi-channel amplifiers ensuring audio richness and depth.',
			link: './physical-controls',
		},
		{
			imageUrl: require('../img/front/multi-source-streaming.png'),
			altText: 'Multi-Source Streaming',
			title: 'Multi-Source Streaming',
			description: "Enjoy unlimited music options with the ability to stream from various sources, old and new. Your music, your way.",
			link: './physical-controls',
		},
		{
			imageUrl: require('../img/front/rms-care-icon.png'),
			altText: 'Remote Support',
			title: 'Remote Support',
			description: "Experience quick and efficient troubleshooting with our Remote Support system, maintaining your uninterrupted audio experience.",
			link: './physical-controls',
		},
		{
			imageUrl: require('../img/front/our-guarantee-icon.png'),
			altText: 'RMS Guaranteed',
			title: 'RMS Guaranteed',
			description: "Enjoy our 30-day workmanship guarantee for peace of mind.",
			link: './physical-controls',
		},
	];
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: MultiRoomAudioInstallationImg,
		altText: 'Multi Room Audio'
	};

	return (
			<>
				<Helmet>
					<title>Multi Room Audio</title>
				</Helmet>
				<BreadCrumbs title="Multi Room Audio" />
				<BannerTop {...bannerProps} />
				<TvInstallation installationsData={installationsData} useSlickSlider={true} customClass="multi-room-installation redBg-5" />
				<Container>
					<Row>
						<Col sm={12}>
							<h3>Custom RMS Packages</h3>
						</Col>
					</Row>
				</Container>
				<MultiRoomAudioInstallationPackages />
				<Container>
					<Row>
						<Col sm={12}>
							<p>Imagine seamlessly playing your favorite music, radio station, or podcast as you move from room to room, enjoying perfect synchronization and harmony. Or perhaps you prefer different sounds to fit each space's mood? You can have calm ambient music in your home office, a lively playlist in the living room, and soothing nature sounds in the bathroom, all playing simultaneously and controlled independently. Set the perfect soundtrack for your daily routines, or easily create a vibrant multi-ambiance atmosphere for your upcoming party. Unleash the power of sound and elevate your home's comfort and functionality to a whole new level.</p>
							<p>Step into the world of Multi-Room Audio Installation with RMS Installs, where we craft soundscapes that respect your budget while never compromising on an immersive audio experience. Let's summarize the three different ways we can bring this experience to life in your home:</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<ol className="num-list">
								<li>
									<h3>Consumer Wireless Systems</h3>
									<p>Dive into a world of wire-free sound with our consumer wireless systems. Simply place our sleek speakers in your desired rooms, and they'll connect to your home Wi-Fi. From compact speakers to soundbars and subwoofers, an expansive product line allows you to tailor your audio setup to each room's needs. Capable of sharing and streaming virtually any audio source -be it your personal music library, internet radio, any major streaming service, your TV audio, or the record playing in your treasured turntable-, no matter where any of those are located.</p>
									<div className="img mb-md-4 mb-2">
										<img src={require('../img/front/wirelessAudio-1.png')} alt="wireless Audio" className="img-fluid" loading="lazy" />
									</div>
									<p>Just using a user-friendly mobile app or its PC counterpart, you will be able to create virtual audio zones throughout your home, controlling their volumes and sources independently or as a group.</p>
								</li>
								<li>
									<h3>Wired Audio-Matrix Systems</h3>
									<Row>
										<Col lg={6}>
											<p>Step up your audio game with our wired audio matrix systems. These are for music lovers seeking power and top-notch sound quality.</p>
											<p>A wired multi-room audio system involves speakers installed in various rooms, all connected to a central Audio Matrix, as big as many audio zones are desired.</p>
											<p>While maintaining the convenience of a single app for multiple audio sources, these systems provide an enhanced sound experience. You can create and control multiple audio zones in your home, like wireless systems.</p>
											<p>If you're an audiophile, this is the system you'd want to hear your favorite melodies through.</p>
										</Col>
										<Col lg={6}>
											<div className="img mb-md-4 mb-2">
												<img src={require('../img/front/audioMatrix.png')} alt="audio Matrix" className="img-fluid" loading="lazy" />
											</div>
										</Col>
									</Row>
								</li>
								<li>
									<h3>Audio Over IP</h3>
									<p>You can think of it as a hybrid system combining the best of both previous options: high-quality audio and a cable-free solution to provide versatility and maximize aesthetic value. This approach offers the best scalability, flexibility, and the ability to deliver uncompressed high-resolution audio to multiple rooms.</p>
									<div className="img mb-md-4 mb-2">
										<img src={require('../img/front/aoIP.gif')} alt="Audio Over IP" className="w-100" loading="lazy" />
									</div>
								</li>
							</ol>
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
export default MultiRoomAudioInstallations;