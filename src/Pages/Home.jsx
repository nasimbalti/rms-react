import React from "react";
import {Helmet} from "react-helmet";
import FrontLayout from '../Layout/front';
import HomeSlickSlider from '../Components/HomeSlickSlider/HomeSlickSlider';
import HomeTab from '../Components/HomeTab/HomeTab';
import WhyChoose from '../Components/WhyChoose/WhyChoose';
import TagLineSlickSlider from '../Components/TagLineSlickSlider/TagLineSlickSlider';
import Testimonials from '../Components/Testimonials/Testimonials';
import VideoBox from '../Components/VideoBox/VideoBox';
import OurWork from '../Components/OurWork/OurWork';
import PressRelease from '../Components/PressRelease/PressRelease';
import FreeQuote from '../Components/FreeQuote/FreeQuote';

function Home() {
	const getContent=()=>{
		return (
			<>
				<Helmet>
					<title>RMS Installs - Home Automation - Smart Home Devices Installation Atlanta, GA</title>
				</Helmet>
				<HomeSlickSlider />
				<HomeTab />
				<WhyChoose title="Why Choose RMS Installs?" />
				<TagLineSlickSlider />
				<Testimonials title="What People Are Saying" />
				<VideoBox />
				<OurWork title="Our Work" />
				<PressRelease />
				<FreeQuote />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view={view} isHomePage={true} />
}
export default Home;