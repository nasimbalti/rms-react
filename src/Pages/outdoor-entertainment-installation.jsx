import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import TvInstallation from '../Components/TvInstallation/TvInstallation';
import OutDoorEntertainmentPackages from "../Components/OutDoorEntertainmentPackages/OutDoorEntertainmentPackages";
import TextOverlay from "../Components/TextOverlay/TextOverlay";
import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

// Banner Top Img Path
import OutDoorEntertainmentInstallationImg from '../img/front/outdoor-entertainment-banner.jpg';

function OutDoorEntertainmentInstallations() {
	// Out Door Entertainment Settings
	const installationsData = [
		{
			imageUrl: require('../img/front/water-proof-tvs.png'),
			altText: 'Water-proof TVs',
			title: 'Water-proof TVs',
			description: 'Enjoy your favorite shows and movies at your pool, rain or shine, with our durable, waterproof TVs.',
			link: './water-proof',
		},
		{
			imageUrl: require('../img/front/weather-resistant-tvs.png'),
			altText: 'Weather Resistant TVs',
			title: 'Weather Resistant TVs',
			description: 'Experience stunning visuals outdoors under any weather conditions with our resilient weather-resistant TVs.',
			link: './water-proof',
		},
		{
			imageUrl: require('../img/front/pool-landscape-speakers.png'),
			altText: 'Pool & Landscape Speakers',
			title: 'Pool & Landscape Speakers',
			description: 'Immerse in your favorite soundtracks at the pool or patio, with our top-tier outdoor speakers.',
			link: './water-proof',
		},
		{
			imageUrl: require('../img/front/rock-speakers.png'),
			altText: 'Rock Speakers',
			title: 'Rock Speakers',
			description: "Blend audio with aesthetics, our rock-shaped speakers effortlessly complement your outdoor spaces.",
			link: './water-proof',
		},
		{
			imageUrl: require('../img/front/weather-resistant-soundbars.png'),
			altText: 'Weather Resistant Soundbars',
			title: 'Weather Resistant Soundbars',
			description: "Enjoy enhanced sound quality outdoors with our weather-resistant soundbars, designed to withstand the elements.",
			link: './water-proof',
		},
		{
			imageUrl: require('../img/front/rms-care-icon.png'),
			altText: 'Remote Support',
			title: 'Remote Support',
			description: "Quick and efficient troubleshooting with our Remote Support, for a seamless viewing experience.",
			link: './water-proof',
		},
		{
			imageUrl: require('../img/front/our-guarantee-icon.png'),
			altText: 'RMS Guaranteed',
			title: 'RMS Guaranteed',
			description: "Invest with confidence. We stand by our work with a 30-day guarantee for your satisfaction.",
			link: './water-proof',
		},
	];
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: OutDoorEntertainmentInstallationImg,
		altText: 'Out Door Entertainment Installation'
	};

	// Text Overlay Props
	const textOverlaySurface = {
		imgURL: require("../img/front/outAudio1.jpg"),
		imgAltText: "Surface Mount Speakers",
		title: "Surface Mount Speakers",
		description: "Durable speakers with quality components like high-temperature voice coil and aluminum dome tweeter deliver great sound no matter the circumstance. The easy-locking bracket makes an ideal hassle-free and clean mount."
	}
	const textOverlayTerrain = {
		imgURL: require("../img/front/outAudio2.jpg"),
		imgAltText: "Terrain Landscape Kit",
		title: "Terrain Landscape Kit",
		description: "For an all-in-one, low-cost landscape system that sounds great, a two-way speaker design and discreet burial subwoofer deliver high-quality immersive, and evenly distributed audio to your pool or patio without compromising decor."
	}
	const textOverlayRock = {
		imgURL: require("../img/front/outAudio3.jpg"),
		imgAltText: "Rock Speakers",
		title: "Rock Speakers",
		description: "Add or opt for our Episode rock speakers, constructed with a Polypropylene cone and dual Titanium tweeters for a premium sound. Available in granite and sandstone finishes."
	}
	const textOverlayAllWeather = {
		imgURL: require("../img/front/outAudio4.jpg"),
		imgAltText: "All-Weather Soundbars",
		title: "All-Weather Soundbars",
		description: "You can use any of the previous options for your video's audio, or opt for a more localized solution with our passive three-channel soundbars. Constructed with a rust-proof aluminum cabinet and grille, allowing them to easily combat rain, snow, dust, insects, humidity, and salt air."
	}
	return (
			<>
				<Helmet>
					<title>Outdoor Entertainment</title>
				</Helmet>
				<BreadCrumbs title="Outdoor Entertainment" />
				<BannerTop {...bannerProps} />
				<TvInstallation installationsData={installationsData} useSlickSlider={true} customClass="outdoor-entertainment redBg-6" />
				<Container>
					<Row>
						<Col sm={12}>
							<h3>Custom RMS Packages</h3>
						</Col>
					</Row>
				</Container>
				<OutDoorEntertainmentPackages />
				<Container>
					<Row>
						<Col sm={12}>
							<p>Visualize an evening under the stars, enjoying a movie with the family on a crisp, vivid screen. Picture a summer afternoon by the pool, your favorite songs playing harmoniously with nature's chorus. Imagine your garden is subtly illuminated, showcasing your landscape's beauty, while your Wi-Fi signal remains strong, providing excellent connectivity to guests and family.</p>
							<p>Extend the comfort and enjoyment of your home entertainment systems to the outdoors with RMS Installs. Let's explore the fantastic features that bring this vision to life:</p>
							<h3>Sunbrite Weather Resistant TVs</h3>
							<p>Specifically designed to handle rain, snow, dust, insects, and extreme temperature variations, these televisions deliver superior brightness, reducing glare and providing an unparalleled, vivid picture quality under the open sky. Choose from our collection for shade, partial-sun, or full-sun installations.</p>
							<div className="img mb-3">
								<img src={require('../img/front/sb-solutions.jpg')} className="d-block m-auto img-fluid" alt="sb solutions" loading="lazy" />
							</div>
							<p>Enjoy the thrill of the game, movie nights, or your favorite shows in the comfort of your outdoor living space. Your picture shouldn't suffer just because you decide on an outdoor TV. SunBrite™ TVs are up to three times brighter than a typical indoor television and have more 4K options than any brand on the market.</p>
							<h3>Outdoor &amp; Landscape Audio</h3>
							<p>From the patio deck to the poolside, the garden to the gazebo, let's turn your outdoor spaces into symphonies of sound. Choose from various form factor options that you can also integrate into your interior <a href="/">Multi-Room Audio distribution system</a>.</p>
						</Col>
					</Row>
				</Container>
				<TextOverlay {...textOverlaySurface} customClass="right"/>
				<TextOverlay {...textOverlayTerrain} customClass="left"/>
				<TextOverlay {...textOverlayRock} customClass="right"/>
				<TextOverlay {...textOverlayAllWeather} customClass="left"/>
				<Container>
					<Row className="d-md-flex align-items-md-center flex-lg-row-reverse py-lg-4 py-2">
						<Col lg={6}>
							<div className="img mb-3">
								<img src={require('../img/front/outdoor-lighting.png')} alt="outdoor lighting" className="d-block w-100" loading="lazy" />
							</div>
						</Col>
						<Col lg={6}>
							<h3>Outdoor Lighting</h3>
							<p>Set the ambiance with tailored outdoor lighting that illuminates your home's exterior and landscape. From pathway lights for safety to accent lighting that highlights your garden's features, we design and install a lighting solution that complements your outdoor space.</p>
							<p>Adding <a href="/">automated control</a> you will be able to set the right mood at the right time, enhancing aesthetics, safety, and energy efficiency.</p>
						</Col>
					</Row>
					<Row className="d-md-flex align-items-md-center py-lg-4 py-2">
						<Col lg={6}>
							<div className="img mb-3">
								<img src={require('../img/front/outdoor-access-points.png')} alt="outdoor access points" className="d-block w-100" loading="lazy" />
							</div>
						</Col>
						<Col lg={6}>
							<h3>Outdoor Access Points</h3>
							<p>Enjoy uninterrupted streaming of music or videos, and stay connected to your smart home features with our Outdoor Access Points.</p>
							<p>These are designed to endure the toughest conditions while extending the reach of your home Wi-Fi to outdoor spaces, ensuring robust and reliable connectivity. You'll stay connected whether you're lounging by the pool, grilling on the patio, or working in the gazebo.</p>
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
export default OutDoorEntertainmentInstallations;