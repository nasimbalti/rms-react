import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faCheck } from '@fortawesome/free-solid-svg-icons';

import GetAQuote from '../GetAQuote/GetAQuote';
import QuoteScenario from '../QuoteScenario/QuoteScenario';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

import '../../Components/NetworkInstall/NetworkInstall.css';

const NetworkInstall = () => {
	return(
		<>
			<div className="network-install pt-3">
				<Container>
					<Row>
						<Col sm={12}>
							<p>At RMS Installs, we offer comprehensive network installation services for residential and commercial customers:</p>
							<ul className="list">
								<li><FontAwesomeIcon icon={faCircleRight} /><strong>Wired and Wireless Network Installation:</strong> Solutions that fit your needs and budget. Our team will work with you to design a network that meets your requirements and provides the reliability and security you need —ethernet drops, structured cabling, fiber connections, outdoor Wi-Fi, etc.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /><strong>Network Configuration and Optimization:</strong> Our team can design, configure, and optimize your network to ensure it runs at peak performance. This can include creating heat maps, optimizing wireless coverage, configuring routers and switches, and securing your network against external threats.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /><strong>Network Troubleshooting and Support:</strong> Whether you are experiencing slow speeds, connectivity issues, or other problems, our team can help diagnose and resolve the issue quickly and efficiently. We offer on-site and remote support services to ensure your network is always up and running. We Provide Network Installation Services A reliable and secure network is essential for all companies and organizations. The same is true for almost every house today, where more than one person simultaneously requires good Internet speed and a stable connection for a great entertainment experience or to achieve their learning or remote job goals. You may have already hired the best Internet connection available. How is it possible your family or employees are still complaining about it? Your provider support line is not giving you the best or more understandable answers? Has the problem taken a week already? In any case, we are here to assist you.</li>
							</ul>
						</Col>
					</Row>
					<Row className="mb-md-5">
						<Col lg={6}>
							<div className="txt">
								<h3>We Provide Network Installation Services</h3>
								<p>A reliable and secure network is essential for all companies and organizations. The same is true for almost every house today, where more than one person simultaneously requires good Internet speed and a stable connection for a great entertainment experience or to achieve their learning or remote job goals.</p>
								<p>You may have already hired the best Internet connection available. How is it possible your family or employees are still complaining about it? Your provider support line is not giving you the best or more understandable answers? Has the problem taken a week already? In any case, we are here to assist you.</p>
							</div>
						</Col>
						<Col lg={6}>
							<div className="img d-lg-flex justify-lg-content-end">
								<img src={require('../../img/front/about-network-installation.jpg')} alt="network installation" loading="lazy" />
							</div>
						</Col>
					</Row>
					<div className='basic'>
						<Row>
							<Col lg={7} className="pe-md-5">
								<h3><span>You don't need to understand more than</span> The Basics</h3>
								<p>You are here because you plan for the best results and want to know everything you need about it, fast and easy. As you may already know, the problem is not as simple as hiring the highest speed. Multiple variables are at stake, and every case is a different scenario. Let's start with the most general scenarios and the essential variables in a nutshell:</p>
							</Col>
							<Col lg={5}>
								<div className="img">
									<img src={require('../../img/front/scenario-1-animation.png')} alt="Home map" loading="lazy" />
								</div>
							</Col>
						</Row>
					</div>
				</Container>
				<div className="basic-scenario">
					<Container>
						<Row className="justify-content-lg-end">
							<Col lg={6}>
								<div className="frame">
									<h3><span>Basic Scenario:</span> The Internet Service Provider | Their Gateway</h3>
									<p>Every ISP installs or gives their customers a gateway device, which connects to their terminal in the street, at your building, through a coaxial or fiberoptic connector ending at your home or office. A Gateway converts one type of data signal into another signal carrying the same data differently. Light pulses or voltage are converted into a low-voltage signal, which will travel using Ethernet cables or through the air on the Wi-Fi spectrum.</p>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="scenario-1">
					<Container>
						<Row className="flex-md-row-reverse">
							<Col lg={6}>
								<div className="img grayscale">
									<img src={require('../../img/front/scenario-1-animation.png')} alt="Combo Router" loading="lazy" />
									<i className="pulse"></i>
									<i className="pulse2"></i>
								</div>
							</Col>
							<Col lg={6}>
								<h3><span>Scenario 1:</span> Small Apartment | The Combo Router</h3>
								<p>The combo gateway, often called a combo router, is a single box containing three devices: a modem, a router, and a Wi-Fi access point. We will talk separately about those in a few. But if you are looking for the best Internet solution for a single or 2-bedroom apartment, with 2 or 3 devices (or persons) connected simultaneously, the combo gateway is enough for you. The only variables you must consider here are bandwidth, speed, and traffic.</p>
							</Col>
						</Row>
						<Row className="mt-md-5">
							<Col lg={4}>
								<div className="icon">
									<i className="ico band"></i>
								</div>
								<h4>Bandwidth</h4>
								<p>It is often confused with speed because bandwidth determines speed, and both are measured using the same unit, Megabits-per-second or Mbps. Bandwidth refers to how much data you can transfer in a second through the ISP connection. You will have a broader or a narrower channel depending on the plan you get.</p>
							</Col>
							<Col lg={4}>
								<div className="icon">
									<i className="ico speed"></i>
								</div>
								<h4>Speed</h4>
								<p>Speed is the amount of data you are transferring when you measure it. Here is the problem: on a regular plan, no matter the hired “speed,” your bandwidth is shared with other customers, and your actual speed will always be a percentage of the bandwidth you hire.</p>
							</Col>
							<Col lg={4}>
								<div className="icon">
									<i className="ico traffic"></i>
								</div>
								<h4>Traffic &amp; Rebooting</h4>
								<p>Speed depends on multiple variables; we had the bandwidth and now have the traffic. The bandwidth-sharing system prioritizes the latest user connection. That's one of the reasons disconnecting, waiting for 30 seconds, and reconnecting your gateway feels like solving the speed issue.</p>
							</Col>
						</Row>
						<Row>
							<Col sm={12}>
								<div className="box text-center border-top pt-md-4 mt-md-4">
									<p>There are two different speed measurements: download and upload. For a shared connection, the download is always going to be higher. It makes sense, as this type of user is more of a content consumer. With current video technology, Full HD video streaming consumes around 5 Mbps; 4K around 25 Mbps. Multiply that by the number of people consuming content simultaneously to know how much bandwidth you need from your Internet plan. By the way, anticipating the last scenario, internet video gaming can consume much more bandwidth.</p>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
			<GetAQuote />
			<div className="scenario-1 bg">
				<Container>
					<Row>
						<Col lg={6}>
							<div className="img">
								<img src={require('../../img/front/scenario-1-animation.png')} alt="Combo Router" loading="lazy" />
								<i className="pulse"></i>
								<i className="pulse2"></i>
							</div>
						</Col>
						<Col lg={6}>
							<h3><span>Scenario 2:</span> A bigger household | Extending the range</h3>
							<p>With more than two rooms, a combo gateway can struggle to deliver a good Wi-Fi signal to every corner of the house or the office. It is like a combo meal, which can be delightful, sometimes including the best french fries ever, but combos are generally suspicious.</p>
							<p>A combo gateway includes three devices in one, but their quality is never the best. The bandwidth concept not only applies to your ISP connection plan; devices also have their own bandwidths, and the communication between the modem and the router included in a combo gateway is way lower than the most capable modems and routers in the market.</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<p>Let's focus on the weakest link for good WiFi coverage: the Access Point, also called the antenna. These are the most relevant variables:</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<ul className="tick-list">
								<li>
									<i className="ico"><FontAwesomeIcon icon={faCheck} /></i>
									<h4>The WiFi Standard</h4>
									<p>WiFi standards, like WiFi 5, 6, and 6E, progress over time, each bringing enhancements and different compatibility levels. While WiFi 6 provides better speeds than its predecessor and maintains backward compatibility, WiFi 6E, the latest, isn't compatible with older devices. However, compatibility with these newer standards will follow as your computers and ISP equipment inevitably upgrade.</p>
								</li>
								<li>
									<i className="ico"><FontAwesomeIcon icon={faCheck} /></i>
									<h4>TX Power</h4>
									<p>Transmission power, usually referred to as the antenna's range, is crucial but not always straightforward. It's not really about distance—physical obstacles and certain materials in walls or furniture can reduce signal strength. Use a free app like Airport Utility or WiFi Analyzer to assess signal strength in your home. You're good if it falls between -30 and -67 dBm; below -70 dBm, that zone needs attention.</p>
								</li>
								<li>
									<i className="ico"><FontAwesomeIcon icon={faCheck} /></i>
									<h4>WiFi Extenders</h4>
									<p>An antenna can double up as an extender, positioned away from your gateway, to receive and repeat its WiFi reach. Despite being marketed as an intermediate solution, extenders typically underperform. They clumsily create additional network names (SSIDs), leading to unnecessary noise and confusion for your devices.</p>
								</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col md={5}>
							<div className="img">
								<img src={require('../../img/front/mesh-network.jpg')} alt="Mesh Network" loading="lazy" />
							</div>
						</Col>
						<Col md={7}>
							<div className="text">
								<h4>The Mesh Network</h4>
								<p>Just like WiFi extenders, the nodes in a Mesh Network will not improve the speed, just the WiFi range, but they do it smartly, consistently keeping the same and unified network credentials and finding the best paths between various of them to lose the least speed possible. Because of the additional smart messaging between the nodes, there is bandwidth loss and, consequently, less speed than the one originally provided by the gateway.</p>
								<p>You can directly add some nodes to your existing combo gateway. Still, the best mesh systems nowadays work better when you use a complete kit, which includes a wired Mesh Router and some wireless nodes, offering 2.4 GHz, 5 GHz, and new 6 GHz band connections.</p>
							</div>
						</Col>
					</Row>
					<Row className="mt-3">
						<Col sm={12}>
							<p>Every ISP installs or gives their customers a gateway device, which connects to their terminal in the street, at your building, through a coaxial or fiberoptic connector ending at your home or office. A Gateway converts one type of data signal into another signal carrying the same data differently. Light pulses or voltage are converted into a low-voltage signal, which will travel using Ethernet cables or through the air on the Wi-Fi spectrum.</p>
						</Col>
					</Row>
				</Container>
				<QuoteScenario />
			</div>
			<div className="scenario-1">
				<Container>
					<Row className="flex-md-row-reverse">
						<Col lg={6}>
							<div className="img">
								<img src={require('../../img/front/secure-environment.jpg')} alt="Combo Router" loading="lazy" />
								<i className="pulse add"></i>
							</div>
						</Col>
						<Col lg={6}>
							<h3><span>Scenario 3:</span> A secure environment | Router + Access Points</h3>
							<p>Let's switch gears from size to security, a headline concern no matter the scale of your setup. The information ahead is crucial whether you're operating from a tiny studio or an expansive mansion.</p>
							<p>Think of a stand-alone router as your network's security officer, specialized and superior in handling data flow with maximum safety. Firewalls, VPNs, Access Control Lists, encryption - all these security tools come into play. While these features can be installed on individual computers, having them at your network's entry point ensures peace of mind.</p>
							<div className="img py-md-3">
								<img src={require('../../img/front/router.jpg')} alt="Router" loading="lazy" />
								</div>
							<p>Now that we have a separate router, there are two options regarding the gateway: One, ou can disable the router and WiFi antenna on the ISP-provided combo gateway - a common request for ISP support agents. Or, two, purchase a separate modem for superior bandwidth on its ports.</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row className="wifi-extend">
						<Col lg={4}>
							<img src={require('../../img/front/wifi-extender.png')} alt="wifi extend" loading="lazy" />
						</Col>
						<Col lg={8}>
							<p><strong>Then, separate stand-alone Access Points are connected after the router through ethernet wires:</strong></p>
							<ul className="list">
								<li><FontAwesomeIcon icon={faCircleRight} /> There's a wide range of Access Points flavors, from indoor to outdoor rated form factors.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /> Combo gateways' antennas usually offer less than 80% of a standalone Access Point's transmission power. Mesh nodes usually provide half of the bandwidth of a regular Access Point (using the other half for the “smart” routing of the mesh).</li>
								<li><FontAwesomeIcon icon={faCircleRight} /> Using ethernet wires to broaden the signal strength minimizes complexity and bandwidth loss.</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="py-md-5 text-center">
							<p>It is essential to understand the implications of this type of connection, so let's complete our glossary of variables:</p>
						</Col>
					</Row>
					<Row className="text-center">
						<Col lg={4}>
							<div className="img mb-3">
								<img className="m-auto" src={require('../../img/front/ethernet-cables.jpg')} alt="ethernet cables" loading="lazy" />
							</div>
							<h4>Ethernet Standard</h4>
							<p>CAT6 cables are an improved version of earlier Ethernet cables, such as CAT5. They are designed to support Gigabit Ethernet, a high-speed internet connection ten times faster than traditional Ethernet. RMS Installs provide different CAT6 subcategories, from noise-shielded cables to outdoor, burial-protected cables.</p>
						</Col>
						<Col lg={4}>
							<div className="img mb-3">
								<img className="m-auto" src={require('../../img/front/power-injector.jpg')} alt="power injector" loading="lazy" />
							</div>
							<h4>Access Points</h4>
							<p>A stand-alone Access Point is a Wi-Fi antenna connected to the rest of the network through an ethernet cable, creating the bridge between wired and wireless devices. It has embedded software and hardware tools that provide intelligent connection diagnostics and advanced noise management features.</p>
						</Col>
						<Col lg={4}>
							<div className="img mb-3">
								<img className="m-auto" src={require('../../img/front/poe-switch.jpg')} alt="ethernet cables" loading="lazy" />
							</div>
							<h4>PoE Injectors</h4>
							<p>A separate power supply typically powers network devices like Access Points, IP cameras, and VoIP phones. But using a Power over Ethernet (PoE) Injector eliminates the need for a separate cable other than the very same Cat6 transporting data, making it easier to install and manage network devices in locations where power outlets are unavailable.</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="py-md-3 text-center">
							<p>With a dedicated Router, Access Points, and high-quality cables, full WiFi coverage is always achieved securely and with less bandwidth loss between devices.</p>
						</Col>
					</Row>
				</Container>
			</div>
			<QuoteScenario />
			<div className="scenario-1 add">
				<Container>
					<Row>
						<Col sm={12}>
							<h4 className="text-center pb-3"><span>Scenario 4:</span> The job site | Managed switches and structured cabling</h4>
							<div className="img mb-md-5">
								<img className="m-auto" src={require('../../img/front/scenario-3b-animation.png')} alt="Scenario animations" loading="lazy" />
								<i className="pulse-add-1"></i>
								<i className="pulse-add-2"></i>
								<i className="pulse-add-3"></i>
								<i className="pulse-add-4"></i>
								<i className="pulse-add-5"></i>
								<i className="pulse-add-6"></i>
							</div>
						</Col>
						<Col sm={12}>
							<p>After a certain point of complexity, which can be found in commercial facilities networks or the various systems interconnected for comfort in a luxury home, maintainability becomes the most desirable feature for a networking project. Sooner or later, being unable to grow or support a complex network will compromise its reliability, speed, or security. As a short glossary will not suffice at this level, we created a separate article explaining the required equipment's nuances to achieve consistent, professional-grade maintenance. RMS Installs provides certified installers, programmers, and a professional line of Layer 2 and Layer 3 network equipment.</p>
						</Col>
					</Row>
				</Container>
			</div>
			<QuoteScenario />
			<WhyChooseUs />
		</>
	)
}
export default NetworkInstall;