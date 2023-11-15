import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import MedicalMonitors from '../Components/MedicalMonitors/MedicalMonitors';
import TeleMedicine from '../Components/TeleMedicine/TeleMedicine';
import Articles from '../Components/Articles/Articles';
import GetAQuote from '../Components/GetAQuote/GetAQuote';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

// Banner Top Img Path
import healthImg from '../img/front/healthcare-banner.jpg';

import SlickWithCaption from "../Components/SlickWithCaption/SlickWithCaption";

//Slick First Img Path
import MedicalMonitorsImage from '../img/front/MedicalMonitors.png';
import MedicalMonitorsSurgicalImage from '../img/front/MedicalMonitors-surgical.png';
import MedicalMonitorsClinicalReviewImage from '../img/front/MedicalMonitors-clinicalreview.png';
import MedicalMonitorsDiagnosticImage from '../img/front/MedicalMonitors-diagnostic.png';

//Slick Second Img Path
import Plan1 from '../img/front/pans-1.jpg';
import Plan2 from '../img/front/pans-2.jpg';
import Plan3 from '../img/front/pans-3.jpg';
import Plan4 from '../img/front/pans-4.jpg';

// Medical Monitors Img Path
import SurgicalMonitorImg from '../img/front/surgical-monitor.jpg';
import DiagnosticMonitorsImg from '../img/front/diagnostic-monitors.jpg';
import ClinicalReviewMonitorsImg from '../img/front/clinical-review-monitors.jpg';

function HealthCare() {
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: healthImg,
		altText: 'Health Care',
		captions: (
			<>
				<h2>
					<span>ENHANCE THE</span>
					<strong>HEALTHCARE EXPERIENCE</strong>
				</h2>
			</>
		)
	};


	// Slick First Slides
	const slides1 = [
		{
			images: [MedicalMonitorsImage],
			captions: ['Diagnostic Monitors provide accurate colors helping medical professionals to better distinguish delicate details.']
		},
		{
			images: [MedicalMonitorsSurgicalImage],
			captions: ['Surgical Monitors offer crisp image quality, wide viewing angles, and technology you can trust.']
		},
		{
			images: [MedicalMonitorsClinicalReviewImage],
			captions: ['Diagnostic Monitors provide accurate colors helping medical professionals to better distinguish delicate details.']
		},
		{
			images: [MedicalMonitorsDiagnosticImage],
			captions: ['Auto brightness, 178-wide viewing angles, and consistent color reproduction deliver precise medical images in Clinical Revie Monitors.']
		}
	]

	// Slick Seond Slides
	const slides2 = [
		{ images: [Plan1] },
		{ images: [Plan2] },
		{ images: [Plan3] },
		{ images: [Plan4] }
	]

	// Medical Monitors
	const monitorsData = [
		{
			title: 'Surgical Monitor',
			image: SurgicalMonitorImg,
			alt: 'Surgical Monitor'
		},
		{
			title: 'Diagnostic Monitors',
			image: DiagnosticMonitorsImg,
			alt: 'Diagnostic Monitors'
		},
		{
			title: 'Clinical Review Monitors',
			image: ClinicalReviewMonitorsImg,
			alt: 'Clinical Review Monitors'
		}
	];

	return (
			<>
				<Helmet>
					<title>Healthcare Business Solutions</title>
				</Helmet>
				<BreadCrumbs title="Healthcare Business Solutions" />
				<BannerTop {...bannerProps} />
				<Container className="pt-md-5">
					<Row>
						<Col sm={12}>
							<p>We understand the unique requirements of healthcare facilities when it comes to technology integration. Whether you're looking to provide patient entertainment, Public Address, notification systems, telemedicine services, or enhance the overall patient experience while keeping centralized control of relevant and opportune information, we offer comprehensive solutions that meet your specific needs.</p>
							<p>Our team of experienced professionals works with leading brands, such as LG, Control4, Binary, Vivitek, Packedge, and Araknis, to design and install strong and secure networks as the foundation of state-of-the-art AV, telecommunications, and control systems that are reliable, easy to use, and cost-effective. Here are some of the solutions we offer:</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="text-center">
							<h3>Medical Monitors</h3>
							<p>Our medical monitors provide high-quality images and accurate diagnostic information to healthcare professionals, enabling them to provide better patient care. We offer various options, from high-resolution displays to multi-modality monitors designed to meet healthcare facilities' specific requirements:</p>
						</Col>
					</Row>
					<MedicalMonitors monitors={monitorsData} />
				</Container>
				<Container>
					<Row>
						<Col sm={12}>
							<SlickWithCaption slides={slides1} />
						</Col>
					</Row>
				</Container>
				<Container className="pt-md-4">
					<Row>
						<Col sm={12}>
							<h3>Digital Signage</h3>
							<p>Our digital signage solutions can help healthcare facilities provide real-time information, entertainment, and education to patients and visitors, helping them navigate through the facility while reducing stress and anxiety. With features like remote content management, scheduling, and emergency messaging, our solutions can also help healthcare facilities provide better communication and safety.</p>
						</Col>
					</Row>
					<Row>
						<Col lg={6}>
							<SlickWithCaption slides={slides2} />
						</Col>
						<Col lg={6}>
							<h3>Public Address and Notification Systems</h3>
							<p>Our public address and notification systems can help healthcare facilities communicate critical information to staff and patients promptly and effectively. Our systems are designed to provide clear and concise announcements, alerts, and instructions, even in noisy or crowded environments. We can also integrate our public address systems with other communication systems, such as nurse call systems, to provide a comprehensive and cohesive solution.</p>
						</Col>
					</Row>
				</Container>
				<TeleMedicine />
				<Articles />
				<GetAQuote />
				<WhyChooseUs />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default HealthCare;