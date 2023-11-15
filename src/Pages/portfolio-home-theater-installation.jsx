import React from "react";
import {Helmet} from "react-helmet";

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import OurProjectsDetail from '../Components/OurProjectsDetail/OurProjectsDetail';
import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

//Slick First Img Path
import bannerImg from '../img/module/our-projects/project-2.jpg';

//Slick Project Img Path
import slick1 from '../img/module/our-projects/project-2.jpg';
import slick2 from '../img/module/our-projects/Designed-Theater-120-Dragonfly-Screen-ON.jfif';
import slick3 from '../img/module/our-projects/Designed-Theater-Cup-Holder.jfif';
import slick4 from '../img/module/our-projects/Designed-Theater-Dragonfly-120-Screen.jfif';
import slick5 from '../img/module/our-projects/Designed-Theater-Front.jfif';
import slick6 from '../img/module/our-projects/Designed-Theater-Front-Side.jfif';
import slick7 from '../img/module/our-projects/Designed-Theater-JVC-DLA-RS2100K-off.jfif';
import slick8 from '../img/module/our-projects/Designed-Theater-KEF-Ci-R-Series-THX-Speakers.jfif';
import slick9 from '../img/module/our-projects/Designed-Theater-KEF-KUBE-12-Subwoofer.jfif';
import slick10 from '../img/module/our-projects/Designed-Theater-KEF-R11.jfif';
import slick11 from '../img/module/our-projects/Designed-Theater-KEF-Rc2.jfif';
import slick12 from '../img/module/our-projects/Designed-Theater-KEFV-R11-Full.jfif';
import slick13 from '../img/module/our-projects/Designed-Theater-Row -One-Seating.jfif';
import slick14 from '../img/module/our-projects/Designed-Theater-Row-One-Seating-Lights-Off.jfif';
import slick15 from '../img/module/our-projects/Designed-Theater-Sconce.jfif';
import slick16 from '../img/module/our-projects/Design-JVC-DLA-RS2100K.jfif';

function PortfolioDetail() {
	const getContent=()=>{

	const ProjectBanner = {
		imageUrl: bannerImg,
		altText: 'Home Theater Installation',
		title: 'Home Theater Installation',
		description: 'This was an unfinished basement. Our client Ray Marchman hired RMS Installs to build his dream Home Theater. Dante Ruredzo designed the interior layout and suggested layout. Framing, Drywall and structural wiring was performed by RMS Installs. Equipment included a JVC 8K projector with a 120” Screen from Dragon Fly. The surround sound configuration was 11.1ch from KEF. One simple and easy to use control system from Control4.'
	};

	const ProjectInfo = {
		service: 'Home Theater Installation Audio Installation',
		location: 'Suwanee',
		duration: '3 Months',
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
		{
			imageUrl: slick7,
			altText: 'image description',
		},
		{
			imageUrl: slick8,
			altText: 'image description',
		},
		{
			imageUrl: slick9,
			altText: 'image description',
		},
		{
			imageUrl: slick10,
			altText: 'image description',
		},
		{
			imageUrl: slick11,
			altText: 'image description',
		},
		{
			imageUrl: slick12,
			altText: 'image description',
		},
		{
			imageUrl: slick13,
			altText: 'image description',
		},
		{
			imageUrl: slick14,
			altText: 'image description',
		},
		{
			imageUrl: slick15,
			altText: 'image description',
		},
		{
			imageUrl: slick16,
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
					<title>Portfolio Home Theater Installation</title>
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