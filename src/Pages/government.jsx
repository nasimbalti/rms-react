import React from "react";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BannerTop from '../Components/BannerTop/BannerTop';
import SlickWithCaption from "../Components/SlickWithCaption/SlickWithCaption";
import VideoSolutions from "../Components/VideoSolutions/VideoSolutions";
import GetAQuote from "../Components/GetAQuote/GetAQuote";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

// Banner Top Img Path
import governmentBannerImg from '../img/front/government-banner.jpg';

//Slick First Img Path
import TrainingImg1 from '../img/front/training_1.jpg';
import TrainingImg2 from '../img/front/training_2.jpg';
import TrainingImg3 from '../img/front/training_3.jpg';

// Court Room Solutions Img Path
import CourtRoomSolImg from '../img/front/courtRoom.jpg';

function Government() {
	const getContent=()=>{
	// Banner Props Settings
	const bannerProps = {
		imageUrl: governmentBannerImg,
		altText: 'education solution',
		captions: (
			<>
				<h2>
					<span>ADVANCING PUBLIC SERVICE</span>
					<strong>THROUGH SMART TECHNOLOGY</strong>
				</h2>
			</>
		)
	};

	// Slick First Slides
	const slides1 = [
		{ images: [TrainingImg1] },
		{ images: [TrainingImg2] },
		{ images: [TrainingImg3] }
	]

	// CourtRoom Solutions Props Settings
	const CourtRoomSolProps = {
		imageUrl: CourtRoomSolImg,
		altText: 'Courtroom Technology Solutions',
		heading: 'Courtroom Technology Solutions',
		caption: (
			<>
				<p>RMS Installs brings a wealth of experience and advanced products to address the unique needs of courtroom technology.</p>
			</>
		)
	}
	return (
			<>
				<Helmet>
					<title>Government Business Solutions</title>
				</Helmet>
				<BreadCrumbs title="Government Business Solutions" />
				<BannerTop {...bannerProps} />
				<Container>
					<Row>
						<Col sm={12} className="my-md-5">
							<p>RMS Installs proudly presents our Government Solutions sector, providing a wide range of services and products tailored to meet the specific needs of government institutions. From command and control centers to virtual training environments and courtroom technology solutions, RMS Installs brings together high-quality products, industry experience, and a dedicated team to ensure seamless installation and support.</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col sm={12} className="text-center mb-3">
							<h3>Command and Control Centers</h3>
						</Col>
					</Row>
					<Row className="mb-md-2 mb-lg-5">
						<Col lg={5}>
							<div className="img">
								<img src={require('../img/front/controlCenter1.jpg')} className="img-fluid" alt="Command and Control Centers" loading="lazy" />
							</div>
						</Col>
						<Col lg={7}>
							<p>In today's digital age, effective communication is integral to the smooth operation of any government facility. Digital signage provides a visually engaging platform for disseminating information rapidly and effectively. With RMS Installs, you can leverage our expertise in deploying digital signage solutions that offer superior display clarity, longevity, and energy efficiency.</p>
							<p>Our digital signage solutions provide clear and crisp display quality and have advanced features such as IPS screen technology for consistent color from all viewing angles. This technology is particularly effective for public displays where viewers view the screen from various angles.</p>
							<p>In addition, our digital signage solutions can be seamlessly integrated with Control4 systems, a leader in smart home and business automation. Control4 offers a unified and intuitive interface that can control multiple digital signs from a single location, allowing efficient content management. This integration brings a new level of control and convenience, turning your digital signage network into a powerful communication tool.</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col sm={12} className="text-center mb-3">
							<h3>Virtual Training and Meeting Environments</h3>
						</Col>
					</Row>
					<Row>
						<Col lg={7}>
							<p>The Novo Ecosystem provides a comprehensive solution for virtual training and meeting environments. This system supports interactive engagement, encouraging active participation and collaborative learning. The Novo Ecosystem can transform any government facility into a modern, dynamic learning environment with screen sharing, real-time annotation, and wireless connectivity.</p>
							<p>Moreover, RMS Installs also offer Pakedge Layer 3 Network solutions to support the Novo Ecosystem's high-bandwidth needs. These networking solutions provide robust, reliable, and high-speed connectivity, ensuring your virtual training and meeting environments run smoothly and efficiently.</p>
							<p>The combination of the Novo Ecosystem and Pakedge networking solutions provides a powerful tool for government institutions, enabling them to conduct effective virtual training and meetings, regardless of participants' geographical locations.</p>
						</Col>
						<Col lg={5}>
							<SlickWithCaption slides={slides1} />
						</Col>
					</Row>
				</Container>
				<VideoSolutions {...CourtRoomSolProps} />
				<Container className="my-sm-2 my-md-5">
					<Row>
						<Col sm={12}>
							<p>We understand technology's critical role in modern legal proceedings, where clear audio and video, reliable conferencing solutions, and robust security measures are paramount. Our integration of top-tier audio technology into your courtroom ensures crystal-clear audio feeds, facilitating the accurate recording of proceedings and effective communication among participants.</p>
							<p>Further enhancing the courtroom experience, RMS Installs also offers high-quality video conferencing solutions. These provide seamless interaction between remote and on-site participants, fostering effective communication while integrating effortlessly with your existing IT infrastructure. We provide a simple, multi-platform software interface that gives the podium full control of the hearing process, deciding who speaks at any time. This ensures that each speaker is clearly heard and prevents any feedback issues. Our solutions are designed to improve the courtroom experience for everyone involved, ensuring that justice is served smoothly and effectively.</p>
							<p>In addition, RMS Installs leverage state-of-the-art surveillance and security solutions to bolster courtroom security. With high-resolution cameras and advanced recording capabilities, we can help establish a secure and safe environment for all courtroom proceedings. Trust RMS Installs to provide a comprehensive courtroom technology solution to meet the specific needs of your judicial institution.</p>
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
export default Government;