import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import SlickWithCaption from "../Components/SlickWithCaption/SlickWithCaption";
import TabSet from "../Components/TabSet/TabSet";
import GetAQuote from "../Components/GetAQuote/GetAQuote";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs"

// Banner Top Img Path
import educationBannerImg from '../img/front/education-solutions-banner.jpg';

//Slick First Img Path
import touch1 from '../img/front/touch_1.jpg';
import touch2 from '../img/front/touch_2.jpg';
import touch3 from '../img/front/touch_3.jpg';

function Education() {
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: educationBannerImg,
		altText: 'education solution',
		captions: (
			<>
				<h2>
					<span>SHAPE BRIGHT FUTURES</span>
					<strong>WITH TRANSFORMATIVE TECH</strong>
				</h2>
			</>
		)
	};

	// Slick First Slides
	const slides1 = [
		{ images: [touch1] },
		{ images: [touch2] },
		{ images: [touch3] }
	]

	return (
			<>
				<Helmet>
					<title>Education Business Solutions</title>
				</Helmet>
				<BreadCrumbs title="Education Business Solutions" />
				<BannerTop {...bannerProps} />
				<Container className="eduBox">
					<Row className="py-md-5">
						<Col sm={12}>
							<p>We believe technology can support a more human education, enhancing the learning experience and enabling students and educators to connect, engage, and create. We offer a comprehensive range of solutions encompassing the latest advances in interactive displays, digital signage, 3D and interactive projectors, collaborative network solutions, and automation systems, all designed to provide an immersive, dynamic, and flexible learning environment that fosters creativity, critical thinking, and innovation.</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="text-center pb-md-4">
							<h3>Touch-boards</h3>
						</Col>
					</Row>
					<Row className="mb-md-3">
						<Col lg={6}>
							<SlickWithCaption slides={slides1} />
						</Col>
						<Col lg={6}>
							<p>Interactive displays have revolutionized the way teachers engage with their students, simplifying the display of information at the same time that new content is co-created with their students. Touch-boards are the perfect tool to foster collaborative learning, allowing for a dynamic and engaging environment tailored to each student's needs (see Collaborative Network Solutions below).</p>
							<p>Our touch-boards are designed to be user-friendly and feature a responsive, high-definition touchscreen, an excellent solution for displaying multimedia content, making presentations, and brainstorming ideas. Its annotation features enable educators and students alike to collaborate in real time, resulting in an immersive and engaging learning environment that fosters creativity and critical thinking.</p>
							<p>We offer an extensive range of sizes, from 65 to 86 inches, ensuring that there is an option for every classroom. With a slim and sleek design, these displays seamlessly integrate into any learning space, making them an ideal solution for modern classrooms. Including a powerful built-in Android OS, making it easy for educators to access a wide range of educational apps and tools that can further enhance their lessons.</p>
						</Col>
					</Row>
					<Row>
						<Col lg={6}>
							<div className="position-relative z-1">
								<h3>Digital Signage &amp; Video Walls</h3>
								<p>We offer digital signage displays optimized for different educational settings, providing clear, bright, and engaging content that captures your audience's attention. Our team can also assist you in creating custom content that reflects your institution's brand, values, and culture, tailoring the installation to meet your unique needs.</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<div className="img offset-top mb-3">
								<img className="img-fluid" src={require('../img/front/digital-signage-video-walls.jpg')} alt="digital signage video walls" loading="lazy" />
							</div>
							<p>RMS Installs provides state-of-the-art digital signage solutions for educational institutions of all sizes, including K-12 schools, colleges, and universities. Our digital signage solutions help schools communicate information to students, faculty, and visitors more effectively while also improving safety and security.</p>
						</Col>
					</Row>
				</Container>
				<TabSet />
				<Container>
					<Row>
						<Col sm={12} className="text-center my-md-5">
							<h3>3D and Interactive Projectors</h3>
							<p>RMS Installs offers a range of 3D and interactive projectors from leading brands like Vivitek that are perfect for classroom settings. These projectors enable educators to deliver immersive, interactive content that engages students and promotes critical thinking. Our projectors are designed to deliver bright, vivid images even in well-lit environments. With the latest in 3D technology, our projectors can bring complex concepts to life in a fun and engaging way for students.</p>
							<div className="img">
								<img className="d-block w-100" src={require('../img/front/3d-interactive-projectors.jpg')} alt="Interactive Projectors" loading="lazy" />
							</div>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="mb-md-4">
							<h3>Collaborative Network Solutions</h3>
							<p>Our collaborative network solutions utilize the latest in wireless display technology to enable teachers and students to connect, collaborate, and share content effortlessly. We work with industry leaders like Vivitek and offer cutting-edge products like the Novo Pro, a wireless presentation system that enables multiple users to share their screens simultaneously. Novo Pro also provides an easy-to-use interface that is perfect for both educators and students. With Bring Your Own Device (BYOD) capabilities, our network solutions can accommodate a variety of devices, from laptops and tablets to smartphones and more, enabling seamless collaboration regardless of the platform.</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="mb-md-4">
							<h3>Automation</h3>
							<p>At RMS Installs, we offer automation solutions that provide a flexible and intuitive control interface for lighting and shades, seamlessly integrated into the Control4 platform. Our automation systems help schools create a more comfortable and energy-efficient learning environment that adapts to the needs of students and faculty. With our advanced control features, you can adjust lighting levels, temperature, and shades to create the perfect atmosphere for learning. With our automation solutions, you can also schedule and control audio and video systems, providing a centralized and streamlined experience for both educators and students.</p>
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
export default Education;