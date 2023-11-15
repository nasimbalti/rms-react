import React from "react";
import {Helmet} from "react-helmet";

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import OurProjects from '../Components/OurProjects/OurProjects';
import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

function Portfolio() {
	const getContent=()=>{

	return (
			<>
				<Helmet>
					<title>Portfolio</title>
				</Helmet>
				<BreadCrumbs title="Our Projects" />
				<OurProjects />
				<GetAQuote />
				<WhyChooseUs />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default Portfolio;