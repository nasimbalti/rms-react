import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import VideoSolutions from "../Components/VideoSolutions/VideoSolutions";
import UltraBrightProjectors from "../Components/UltraBrightProjectors/UltraBrightProjectors";
import AudioSolutions from "../Components/AudioSolutions/AudioSolutions";
import ControlSolutions from "../Components/ControlSolutions/ControlSolutions";
import GetAQuote from "../Components/GetAQuote/GetAQuote";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

// Banner Top Img Path
import NetworkingImg from '../img/front/worship-experience.jpg';

// Video Solutions Img Path
import VideoSolImg from '../img/front/video-solutions.jpg';

// Lighting Solutions Img Path
import LightingSolImg from '../img/front/lighting-solution.jpg';

function Worship() {
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: NetworkingImg,
		altText: 'Networking',
		captions: (
			<>
				<h2>
					<span>Celebrate Spirituality</span>
					<strong>Craft Immersive Worship</strong>
				</h2>
			</>
		)
	};
	// Video Solutions Props Settings
	const videoSolProps = {
		imageUrl: VideoSolImg,
		altText: 'video solutions',
		heading: 'Video Solutions',
		caption: (
			<>
				<p>Our video solutions can enhance the visual impact of your worship service. We provide various options to fit different spaces and budgets, from high-definition projectors and screens to video walls that can display multiple sources simultaneously.</p>
			</>
		)
	}
	// Lighting Solutions Props Settings
	const lightingSolProps = {
		imageUrl: LightingSolImg,
		altText: 'Lighting solutions',
		heading: 'Lighting Solutions',
		caption: (
			<>
				<p>Lighting can play an essential role in creating a comfortable and immersive atmosphere for worship. Our lighting solutions can transform any worship space into a welcoming and awe-inspiring environment.</p>
			</>
		)
	}
	return (
			<>
				<Helmet>
					<title>Worship Business Solution</title>
				</Helmet>
				<BreadCrumbs title="Worship Business Solutions" />
				<BannerTop {...bannerProps} />
				<Container className="my-md-5 text-center">
					<Row>
						<Col sm={12}>
							<p>At RMS Installs, we understand that sound and visual systems are crucial in creating an immersive worship experience for your congregation. Whether you are a small chapel or a large church, we offer comprehensive <a href="/">Audio</a>, <a href="#">Video</a>, <a href="#">Lighting</a>, and <a href="#">Control solutions</a> that can transform your worship space.</p>
							<p>Our experienced professionals work with leading brands like Vivitek, Control4, Lutron, Araknis, Episode, Klipsch, Kef, Binary, and the Harman family of products to design and install state-of-the-art systems that meet your specific needs and budget. Here are some of the solutions we offer:</p>
						</Col>
					</Row>
				</Container>
				<VideoSolutions {...videoSolProps} />
				<UltraBrightProjectors />
				<AudioSolutions />
				<VideoSolutions {...lightingSolProps} />
				<Container className="mt-md-5">
					<Row>
						<Col sm={12}>
							<p>For a traditional worship setting, a shared reading space, or a guest's reception, our lighting experts can create a warm and welcoming atmosphere by utilizing warm color temperatures, carefully placed accent lighting, and dimming capabilities to enhance the space's natural beauty. We can also incorporate customized lighting scenes for different service parts, such as prayers, songs, and sermons.</p>
							<p>For contemporary worship spaces, we offer lighting solutions that can create a dynamic and engaging atmosphere for congregants. We can use color-changing LED fixtures, moving lights, and video screens to create a visually stunning and immersive experience.</p>
							<p>In addition to traditional and contemporary worship spaces, we also offer lighting solutions for outdoor worship areas.</p>
							<p>Our experts can design and install durable and weather-resistant lighting systems that enhance the natural surroundings' beauty while providing the necessary lighting for outdoor services or events.</p>
							<p>Our lighting systems can also be automated, synchronized with audio and video, and controlled remotely for optimal convenience and ease of use.</p>
							<div className="img">
								<img className="w-100" src={require('../img/front/outdoorLighting.jpg')} alt="Out door lighting" loading="lazy" />
							</div>
						</Col>
					</Row>
				</Container>
				<ControlSolutions />
				<GetAQuote />
				<WhyChooseUs />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default Worship;