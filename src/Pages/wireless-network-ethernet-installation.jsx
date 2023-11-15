import React from "react";
import {Helmet} from "react-helmet";
import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import TvInstallation from '../Components/TvInstallation/TvInstallation';
import CustomRMSPkg from '../Components/CustomRMSPkg/CustomRMSPkg';
import NetworkInstall from '../Components/NetworkInstall/NetworkInstall';

// Banner Top Img Path
import NetworkingImg from '../img/front/networking-banner.jpg';

function WirelessNetworkPage() {
	// TV Install Settings
	const installationsData = [
		{
			imageUrl: require('../img/front/fiber-optics.png'),
			altText: 'Fiber Optics',
			title: 'Fiber Optics',
			description: 'Experience lightning-fast speeds and robust performance with the latest technology.',
			link: './contact-service-user',
		},
		{
			imageUrl: require('../img/front/ethernet-drops.png'),
			altText: 'Ethernet Drops',
			title: 'Ethernet Drops',
			description: 'Enhance your network with multi-room / multi-level hardwired connections.',
			link: './contact-service-user',
		},
		{
			imageUrl: require('../img/front/direct-burial.png'),
			altText: 'Direct Burial',
			title: 'Direct Burial',
			description: 'Seamless building-to-building and outdoor connections with weather-resistant network cables.',
			link: './contact-service-user',
		},
		{
			imageUrl: require('../img/front/wifi-enhancement.png'),
			altText: 'Wi-Fi Enhancement',
			title: 'Wi-Fi Enhancement',
			description: 'Say goodbye to dead zones. Ensure strong signals across your entire property.',
			link: './contact-service-user',
		},
		{
			imageUrl: require('../img/front/our-guarantee-icon.png'),
			altText: 'RMS Guaranteed',
			title: 'RMS Guaranteed',
			description: 'Invest with confidence. We stand by our work with a 30-day guarantee for your satisfaction.',
			link: './contact-service-user',
		},
	];
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: NetworkingImg,
		altText: 'Networking',
		hashBlur: 'LMH3UL{t1A$b.6x0x[ROQ-XSxafS'
	};
	return (
			<>
				<Helmet>
					<title>Wireless Network &amp; Ethernet</title>
				</Helmet>
				<BreadCrumbs title="Wireless Network & Ethernet" />
				<BannerTop {...bannerProps} />
				<TvInstallation installationsData={installationsData} customClass="grid-5" />
				<CustomRMSPkg />
				<NetworkInstall />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default WirelessNetworkPage;