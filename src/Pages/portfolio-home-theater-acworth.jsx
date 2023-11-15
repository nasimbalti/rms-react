import React from "react";
import {Helmet} from "react-helmet";

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import OurProjectsDetail from '../Components/OurProjectsDetail/OurProjectsDetail';
import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

//Slick First Img Path
import bannerImg from '../img/module/our-projects/project-1.jpg';

//Slick Project Img Path
import slick1 from '../img/module/our-projects/project-1.jpg';
import slick2 from '../img/module/our-projects/project-1-1.jpg';
import slick3 from '../img/module/our-projects/project-1-2.jpg';
import slick4 from '../img/module/our-projects/project-1-3.jpg';
import slick5 from '../img/module/our-projects/project-1-4.jpg';
import slick6 from '../img/module/our-projects/project-1-5.jpg';

function PortfolioDetail() {
	const getContent=()=>{

	const ProjectBanner = {
		imageUrl: bannerImg,
		altText: 'Home Theater - Acworth - GA',
		title: 'Home Theater - Acworth - GA',
		description: 'Home Theater in Acworth'
	};

	const ProjectInfo = {
		service: 'TV Installation Audio Installation',
		location: 'Acworth',
		years: '2023'
	};

	const slides = [
		{
			imageUrl: slick1,
			altText: 'image description',
		},
		{
			imageUrl: slick2,
			altText: 'image description',
		},
		{
			imageUrl: slick3,
			altText: 'image description',
		},
		{
			imageUrl: slick4,
			altText: 'image description',
		},
		{
			imageUrl: slick5,
			altText: 'image description',
		},
		{
			imageUrl: slick6,
			altText: 'image description',
		},
	];

	const ProjectDetails = {
		...ProjectBanner,
		...ProjectInfo,
		slides: slides
	};
	return (
			<>
				<Helmet>
					<title>Portfolio Home Theater Acworth</title>
				</Helmet>
				<BreadCrumbs title="Project Detail" />
				<OurProjectsDetail {...ProjectDetails} />
				<GetAQuote />
				<WhyChooseUs />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default PortfolioDetail;