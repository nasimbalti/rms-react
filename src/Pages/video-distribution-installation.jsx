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

import VideoDistributionPackages from "../Components/VideoDistributionPackages/VideoDistributionPackages";

import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

// Banner Top Img Path
import VideoDistributionInstallationImg from '../img/front/video-installation-banner.jpg';

function VideoDistributionInstallations() {
	// Multi Room Audio Settings
	const installationsData = [
		{
			imageUrl: require('../img/front/multi-source-streaming-video.png'),
			altText: 'Multi-source Streaming',
			title: 'Multi-source Streaming',
			description: 'Stream content from multiple sources effortlessly, making it available across your entire home.',
			link: './multi-source-streaming',
		},
		{
			imageUrl: require('../img/front/multiple-resolutions-display.png'),
			altText: 'Multiple Resolutions',
			title: 'Multiple Resolutions',
			description: 'Connect old and new displays, we take care of the multiple resolutions.',
			link: './multi-source-streaming',
		},
		{
			imageUrl: require('../img/front/compatibility-management.png'),
			altText: 'Compatibility Management',
			title: 'Compatibility Management',
			description: 'Say goodbye to compatibility issues. We ensure your devices and formats work in harmony.',
			link: './multi-source-streaming',
		},
		{
			imageUrl: require('../img/front/rca-connectors-cables.png'),
			altText: 'Audio Extraction',
			title: 'Audio Extraction',
			description: "Share the audio of your favorite game or TV show with the pool speakers or BBQ, no matter the box where is coming from.",
			link: './multi-source-streaming',
		},
		{
			imageUrl: require('../img/front/rms-care-icon.png'),
			altText: 'Remote Support',
			title: 'Remote Support',
			description: "Quick and efficient troubleshooting with our Remote Support, for a seamless viewing experience.",
			link: './multi-source-streaming',
		},
		{
			imageUrl: require('../img/front/our-guarantee-icon.png'),
			altText: 'RMS Guaranteed',
			title: 'RMS Guaranteed',
			description: "Invest with confidence. We stand by our work with a 30-day guarantee for your satisfaction.",
			link: './multi-source-streaming',
		},
	];
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: VideoDistributionInstallationImg,
		altText: 'Video Distribution'
	};

	return (
			<>
				<Helmet>
					<title>Video Distribution</title>
				</Helmet>
				<BreadCrumbs title="Video Distribution" />
				<BannerTop {...bannerProps} />
				<TvInstallation installationsData={installationsData} useSlickSlider={true} customClass="multi-room-installation redBg-5" />
				<Container>
					<Row>
						<Col sm={12}>
							<h3>Custom RMS Packages</h3>
						</Col>
					</Row>
				</Container>
				<VideoDistributionPackages />
				<Container>
					<Row>
						<Col sm={12}>
							<p>Picture yourself lounging on your patio, enjoying the sunset while watching your favorite sports team win on a large outdoor screen. Or, envision being able to pick up where you left off on your latest binge-watching series, no matter where you move in your home. Maybe it's movie night, and you're streaming a blockbuster in your home theater while the children are playing video games in the playroom. The power to manage multiple video sources and control their distribution across different screens and projectors in your house is what our video distribution installation service brings to your fingertips.</p>
							<p>Welcome to House Video Distribution Installation with RMS Installs, where we help you unlock a new level of convenience and functionality in your entertainment system. Essentially, there are two primary methods to implement video distribution in your home: a Video Matrix System or a Media Over IP System (MoIP). Let's delve into their differences:</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<ol className="num-list">
								<li>
									<h3>Video Matrix</h3>
									<p>A Video Matrix connects a limited number of sources with a limited number of outputs. Varios combination models are available, from 2 to 16 on either end, where you can select any source on any display or mirror a single source on multiple screens for a unified viewing experience.</p>
									<div className="img mb-md-4 mb-2">
										<img src={require('../img/front/hdmiMatrix-1.jpg')} alt="hdmi Matrix" className="img-fluid m-auto d-block" loading="lazy" />
									</div>
									<p>A Video Matrix is a budget friendly option, and the number of connections is not the only variable to find the right product for your specific needs. One of the most relevant factors is the type of connections available. It can vary from analog video, for backward compatibility with vintage products, to different kinds of digital video, which will affect the choice of cables you will be able to use. Let's list the most common options nowadays:</p>
									<ul className="list">
										<li> <FontAwesomeIcon icon={faCircleRight} />
											<strong>HDMI:</strong> Like the matrix pictured above. HDMI connections can have great picture quality, from Full HD to 4K resolution and High Dynamic Range (HDR). However, HDMI cables cannot travel long distances alone without increasing prices. This option is good if the various displays or projectors to connect are not too far from each other and only one or two are far away (to add one or two HDMI extenders).
										</li>
										<li> <FontAwesomeIcon icon={faCircleRight} />
											<strong>HDBaseT:</strong> Instead of using HDMI cables for transporting the video signal, HDBaseT systems use ethernet cables to transmit high-definition video, audio, control signals (like IR and RS-232), and even power up to 100 meters. Ideal for larger homes or when the sources are far from the displays, this system offers superior signal quality and a neat, uncluttered setup.
										</li>
									</ul>
									<div className="img mb-md-4 mb-2">
										<img src={require('../img/front/hdbaseTMatrix-2.jpg')} alt="hdmi Matrix 2" className="img-fluid m-auto d-block" loading="lazy" />
									</div>
									<p>Other features are also available in different models, like audio extraction, when you want to share your favorite TV Show audio with the pool or the patio, connected to your <a href="/">Multi-Room audio system</a>.</p>
								</li>
								<li>
									<h3>Media Over IP (MoIP)</h3>
									<Row>
										<Col lg={12}>
											<p>The ultimate solution in flexibility, scalability, and quality, Video over IP uses your existing network (wired and wireless) to distribute 4K video, audio, control signals, and even Power over Ethernet (PoE) to any connected display. Start small and expand at will. Add unlimited sources or displays just by adding more network switches. It's the best solution for new houses or major renovations where a solid network infrastructure can be planned and installed.</p>
											<div className="img mb-md-4 mb-2">
												<img src={require('../img/front/moIPVideoDiag.gif')} alt="moIP Video Diag" className="img-fluid m-auto d-block" loading="lazy" />
											</div>
										</Col>
									</Row>
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
export default VideoDistributionInstallations;