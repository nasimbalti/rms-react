import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faBars, faCircle, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import '../../Components/CustomRMSPkg/CustomRMSPkg.css';

const CustomRMSPkg = () => {

	//First Package
	const [isPackageOpen, setIsPackageOpen] = useState(false);
	const handlePackage = () => {
		setIsPackageOpen(!isPackageOpen);
		setIsPackageInnerOpen(false);
		setIsPackageListTop(false);
	};
	const [isPackageInnerOpen, setIsPackageInnerOpen] = useState(false);
	const handleCamparison = () => {
		setIsPackageInnerOpen(!isPackageInnerOpen);
		setIsPackageOpen(false);
	}
	// Second package
	const [isPackageOpen2, setIsPackageOpen2] = useState(false);
	const handlePackage2 = () => {
		setIsPackageOpen2(!isPackageOpen2);
		setIsPackageInnerOpen2(false);
		setIsPackageListTop(false);
	};
	const [isPackageInnerOpen2, setIsPackageInnerOpen2] = useState(false);
	const handleCamparison2 = () => {
		setIsPackageInnerOpen2(!isPackageInnerOpen);
		setIsPackageOpen2(false);
	}
	// Third package
	const [isPackageOpen3, setIsPackageOpen3] = useState(false);
	const handlePackage3 = () => {
		setIsPackageOpen3(!isPackageOpen3);
		setIsPackageInnerOpen3(false);
		setIsPackageListTop(false);
	};
	const [isPackageInnerOpen3, setIsPackageInnerOpen3] = useState(false);
	const handleCamparison3 = () => {
		setIsPackageInnerOpen3(!isPackageInnerOpen);
		setIsPackageOpen3(false);
	}
	// Fourth package
	const [isPackageOpen4, setIsPackageOpen4] = useState(false);
	const handlePackage4 = () => {
		setIsPackageOpen4(!isPackageOpen4);
		setIsPackageInnerOpen4(false);
		setIsPackageListTop(false);
	};
	const [isPackageInnerOpen4, setIsPackageInnerOpen4] = useState(false);
	const handleCamparison4 = () => {
		setIsPackageInnerOpen4(!isPackageInnerOpen);
		setIsPackageOpen4(false);
	}

	const [isPackageListTop, setIsPackageListTop] = useState(true);

	const pkgBackBtn = () => {
		setIsPackageOpen(!isPackageOpen);
		setIsPackageInnerOpen(false);
	}
	const pkgBackBtn2 = () => {
		setIsPackageOpen2(!isPackageOpen);
		setIsPackageInnerOpen2(false);
	}
	const pkgBackBtn3 = () => {
		setIsPackageOpen3(!isPackageOpen);
		setIsPackageInnerOpen3(false);
	}
	const pkgBackBtn4 = () => {
		setIsPackageOpen4(!isPackageOpen);
		setIsPackageInnerOpen4(false);
	}

	const backBtnTop = () => {
		setIsPackageOpen(false);
		setIsPackageInnerOpen(false);
		setIsPackageOpen2(false);
		setIsPackageInnerOpen2(false);
		setIsPackageOpen3(false);
		setIsPackageInnerOpen3(false);
		setIsPackageOpen4(false);
		setIsPackageInnerOpen4(false);
		setIsPackageListTop(true);
	}

	return(
		<>
			<section className="rms-packges">
				<Container>
					<Row>
						<Col md={4}>
							<h3>Custom RMS Packages</h3>
						</Col>
						<Col md={8}>
							<ul className="logos">
								<li><img src={require('../../img/front/eero-logo.jpg')} alt="eero" loading="lazy" /></li>
								<li><img src={require('../../img/front/unifi.jpg')} alt="unifi" loading="lazy" /></li>
								<li><img src={require('../../img/front/luxul-logo.jpg')} alt="luxul" loading="lazy" /></li>
								<li><img src={require('../../img/front/araknis-logo.jpg')} alt="araknis" loading="lazy" /></li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							{isPackageListTop && (
								<ul className="pkgs-list bounceIn">
									<li>
										<div className="left-box">
											<div className="img">
												<img src={require('../../img/front/compact-abode.jpg')} alt="Compact Abode" loading="lazy" />
											</div>
										</div>
										<div className="right-box">
											<div className="top-bar">
												<div className="head">
													<h3><span>Compact Abode</span></h3>
												</div>
												<div className="desc">
													<p>Up to 2000 SqFt. - 1 or 2 floors</p>
												</div>
												<div className="btn-view">
													<button className="btn" onClick={handlePackage}>
														<span>View Compact Packages</span>
														<div className="ico">
															<FontAwesomeIcon icon={faBars} className="d-none d-sm-block d-md-none" />
															<FontAwesomeIcon icon={faCaretLeft} />
														</div>
													</button>
												</div>
											</div>
											<div className="bottom-bar row">
												<strong className="logo col-md-4">
													<img src={require('../../img/rms-grey-logo.png')} alt="RMS installs" loading="lazy" />
												</strong>
												<div className="col-md-8">
													<ul className="view-list">
														<li><button className="btn" onClick={handlePackage}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage}><FontAwesomeIcon icon={faCircle} /></button></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="left-box">
											<div className="img">
												<img src={require('../../img/front/spacious-heaven.jpg')} alt="Spacious Haven" loading="lazy" />
											</div>
										</div>
										<div className="right-box">
											<div className="top-bar">
												<div className="head">
													<h3><span>Spacious Haven</span></h3>
												</div>
												<div className="desc">
													<p>Up to 5000 SqFt. - 1,2 or 3 floors</p>
												</div>
												<div className="btn-view">
													<button className="btn" onClick={handlePackage2}>
														<span>View Spacious Packages</span>
														<div className="ico">
															<FontAwesomeIcon icon={faBars} className="d-none d-sm-block d-md-none" />
															<FontAwesomeIcon icon={faCaretLeft} />
														</div>
													</button>
												</div>
											</div>
											<div className="bottom-bar row">
												<strong className="logo col-md-4">
													<img src={require('../../img/rms-grey-logo.png')} alt="RMS installs" loading="lazy" />
												</strong>
												<div className="col-md-8">
													<ul className="view-list">
														<li><button className="btn" onClick={handlePackage2}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage2}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage2}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage2}><FontAwesomeIcon icon={faCircle} /></button></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="left-box">
											<div className="img">
												<img src={require('../../img/front/grand-estate.jpg')} alt="Grand Estate" loading="lazy" />
											</div>
										</div>
										<div className="right-box">
											<div className="top-bar">
												<div className="head">
													<h3><span>Grand Estate</span></h3>
												</div>
												<div className="desc">
													<p>Up to 10000 SqFt. - 4 floors or less</p>
												</div>
												<div className="btn-view">
													<button className="btn" onClick={handlePackage3}>
														<span>View Grand Packages</span>
														<div className="ico">
															<FontAwesomeIcon icon={faBars} className="d-none d-sm-block d-md-none" />
															<FontAwesomeIcon icon={faCaretLeft} />
														</div>
													</button>
												</div>
											</div>
											<div className="bottom-bar row">
												<strong className="logo col-md-4">
													<img src={require('../../img/rms-grey-logo.png')} alt="RMS installs" loading="lazy" />
												</strong>
												<div className="col-md-8">
													<ul className="view-list">
														<li><button className="btn" onClick={handlePackage3}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage3}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage3}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage3}><FontAwesomeIcon icon={faCircle} /></button></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="left-box">
											<div className="img">
												<img src={require('../../img/front/majestic-manor.jpg')} alt="Majestic Manor" loading="lazy" />
											</div>
										</div>
										<div className="right-box">
											<div className="top-bar">
												<div className="head">
													<h3><span>Majestic Manor</span></h3>
												</div>
												<div className="desc">
													<p>10000 SqFt. - 4 floors or less</p>
												</div>
												<div className="btn-view">
													<button className="btn" onClick={handlePackage4}>
														<span>View Majestic Packages</span>
														<div className="ico">
															<FontAwesomeIcon icon={faBars} className="d-none d-sm-block d-md-none" />
															<FontAwesomeIcon icon={faCaretLeft} />
														</div>
													</button>
												</div>
											</div>
											<div className="bottom-bar row">
												<strong className="logo col-md-4">
													<img src={require('../../img/rms-grey-logo.png')} alt="RMS installs" loading="lazy" />
												</strong>
												<div className="col-md-8">
													<ul className="view-list">
														<li><button className="btn" onClick={handlePackage4}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage4}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage4}><FontAwesomeIcon icon={faCircle} /></button></li>
														<li><button className="btn" onClick={handlePackage4}><FontAwesomeIcon icon={faCircle} /></button></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
								</ul>
							)}
							<div className="pkg-holder">
								{isPackageOpen && (
									<div className="pkg-open pkg-1 bounceIn">
										<Row>
											<Col xs={3}>
												<Button className="back-btn1" onClick={backBtnTop}>
													<FontAwesomeIcon icon={faCaretLeft} />
													<span>Back to Packages</span>
													<FontAwesomeIcon icon={faXmark} className="d-none d-sm-block d-md-none" />
												</Button>
											</Col>
											<Col xs={6}>
												<div className="title-open">
													<h3>Compact Abode</h3>
												</div>
											</Col>
											<Col xs={3}>
												<div className="desc">
													<p>Up to 2000 SqFt. - 1 or 2 floors</p>
												</div>
											</Col>
										</Row>
										<div className="pkg-bg">
											<Button className="comparison-btn" onClick={handleCamparison}><span>Packages Comparison</span> <FontAwesomeIcon icon={faCaretDown} /></Button>
											<Row>
												<Col lg={2} md={4} className="offset-lg-2">
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/labor-logo.jpg')} alt="RMS Install-Only" loading="lazy" />
														</div>
														<ul className="list">
															<li>Setup &amp; Configuration of 2 devices</li>
															<li>Connections &amp; Materials</li>
															<li>1 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$999.97</span>
														</button>
													</div>
												</Col>
												<Col lg={2} md={4}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/eero-model-1.jpg')} alt="eero Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>2 Mesh Nodes</li>
															<li>Setup &amp; Configuration of 2 devices</li>
															<li>Connections &amp; Materials</li>
															<li>1 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$1,297.97</span>
														</button>
													</div>
												</Col>
												<Col lg={2} md={4}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/unifi-model-1.jpg')} alt="UniFi Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 WiFi Router</li>
															<li>1 Access Point (AP)</li>
															<li>Setup &amp; Configuration of 2 devices</li>
															<li>Connections &amp; Materials</li>
															<li>1 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$1,297.97</span>
														</button>
													</div>
												</Col>
												<Col lg={2} md={4}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/luxul-model-1.jpg')} alt="Luxul Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>2 Mesh Nodes</li>
															<li>Setup &amp; Configuration of 2 devices</li>
															<li>Connections &amp; Materials</li>
															<li>1 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$1,297.97</span>
														</button>
													</div>
												</Col>
												<Col lg={2} md={4}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/araknis-model-1.jpg')} alt="Araknis Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 WiFi Router</li>
															<li>1 Access Point (AP)</li>
															<li>1 PoE Injector</li>
															<li>1 Power Conditioner 3P</li>
															<li>Setup &amp; Configuration of 3 devices</li>
															<li>Enclosure</li>
															<li>1 In-Wall Plastic Enclosure</li>
															<li>Install &amp; Wire Management</li>
															<li>1 In-Wall Install &amp; Power Run</li>
															<li>Connections &amp; Materials </li>
															<li>1 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$1,297.97</span>
														</button>
													</div>
												</Col>
											</Row>
										</div>
									</div>
								)}
								{isPackageInnerOpen && (
									<div className="pkg-open inner pkg-inner-1 bounceIn">
										<Row>
											<Col xs={3}>
												<Button className="back-btn1" onClick={backBtnTop}>
													<FontAwesomeIcon icon={faCaretLeft} />
													<span>Back to Packages</span>
													<FontAwesomeIcon icon={faXmark} className="d-none d-sm-block d-md-none" />
												</Button>
											</Col>
											<Col xs={6}>
												<div className="title-open">
													<h3>Compact Abode</h3>
												</div>
											</Col>
											<Col xs={3}>
												<div className="desc">
													<p>Up to 2000 SqFt. - 1 or 2 floors</p>
												</div>
											</Col>
										</Row>
										<div className="pkg-bg">
											<button className="comparison-btn" onClick={pkgBackBtn}><FontAwesomeIcon icon={faCaretLeft} /> <span>Back to Details</span></button>
											<Row>
												<Col lg={3} md={4} className="offset-lg-2">
													<div className="holder bg-black bg-opacity-75">
														<div className="img-box">
															<img src={require('../../img/front/labor-logo.jpg')} alt="RMS Install-Only" loading="lazy" />
														</div>
														<ul className="list first">
															<li>Extended Wireless Coverage</li>
															<li>Good Quality Audio Streaming</li>
															<li>Full HD Video Streaming***</li>
															<li>Hi-Fi Streaming****</li>
															<li>4K Streaming for more than 1 TV</li>
															<li>8K Streaming for more than 1 TV*****</li>
															<li>Up to 200 connected devices</li>
															<li>Up to 350 connected devices</li>
															<li>Home Theater Ready</li>
															<li>Media Distribution Ready</li>
															<li>Dual ISP Reliability</li>
															<li>Remote Support Ready</li>
														</ul>
														<h4>RMS Install-Only</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$999.97</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/eero-model-1.jpg')} alt="eero Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>eero Mesh</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$1,297.97</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/unifi-model-1.jpg')} alt="UniFi Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>UniFi Router + AP</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$1,327.97</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/luxul-model-1.jpg')} alt="Luxul Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>Luxul Mesh</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$1,247.97</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/araknis-model-1.jpg')} alt="Araknis Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>Araknis Router + AP</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$3,150.77</span>
														</button>
													</div>
												</Col>
											</Row>
											<Row>
												<Col className="offset-lg-2">
													<ul className="instruction bg-black bg-opacity-75 mt-3 rounded-4">
														<li>Dual ISP available for 1 Fiber connection and 1 Ethernet connection</li>
														<li>Only available for Ethernet connections</li>
														<li>Given the required bandwith the wireless sytem will deliver at least the 40%</li>
														<li>Given the required bandwith the wireless sytem will deliver at least the 60% (1 Gig)</li>
														<li>Given the required bandwith the wireless sytem is capable of multi-gig traffic</li>
													</ul>
												</Col>
											</Row>
										</div>
									</div>
								)}
								{isPackageOpen2 && (
									<div className="pkg-open pkg-1 bounceIn">
										<Row>
											<Col xs={3}>
												<Button className="back-btn1" onClick={backBtnTop}>
													<FontAwesomeIcon icon={faCaretLeft} />
													<span>Back to Packages</span>
													<FontAwesomeIcon icon={faXmark} className="d-none d-sm-block d-md-none" />
												</Button>
											</Col>
											<Col xs={6}>
												<div className="title-open">
													<h3>Spacious Haven</h3>
												</div>
											</Col>
											<Col xs={3}>
												<div className="desc">
													<p>Up to 2000 SqFt. - 1 or 2 floors</p>
												</div>
											</Col>
										</Row>
										<div className="pkg-bg sec">
											<Button className="comparison-btn" onClick={handleCamparison2}><span>Packages Comparison</span> <FontAwesomeIcon icon={faCaretDown} /></Button>
											<Row>
												<Col md={4} lg={2} className="offset-lg-2">
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/labor-logo.jpg')} alt="RMS Install-Only" loading="lazy" />
														</div>
														<ul className="list">
															<li>Setup &amp; Configuration of 3 devices</li>
															<li>Install &amp; Wire Management </li>
															<li>1 In-Wall Install &amp; Power Run</li>
															<li>Connections &amp; Materials</li>
															<li>2 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$2,949.93</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/eero-model-2.jpg')} alt="eero Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 Router</li>
															<li>2 WiFi6 APs</li>
															<li>Setup &amp; Configuration of 3 devices</li>
															<li>Enclosure</li>
															<li>1 In-Wall Plastic Enclosure</li>
															<li>Install &amp; Wire Management </li>
															<li>1 In-Wall Install &amp; Power Run</li>
															<li>Connections &amp; Materials</li>
															<li>2 Ethernet Drops</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$4,346.88</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/unifi-model-2.jpg')} alt="UniFi Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 WiFi6 Router</li>
															<li>1 WiFi6 AP</li>
															<li>Setup &amp; Configuration of 2 devices</li>
															<li>Enclosure</li>
															<li>1 In-Wall Plastic Enclosure</li>
															<li>Install &amp; Wire Management </li>
															<li>1 In-Wall Install &amp; Power Run</li>
															<li>Connections &amp; Materials</li>
															<li>1 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$3,127.90</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/luxul-model-2.jpg')} alt="Luxul Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 WiFi Router</li>
															<li>1 WiFi AP</li>
															<li>Setup &amp; Configuration of 2 devices</li>
															<li>Enclosure</li>
															<li>1 In-Wall Plastic Enclosure</li>
															<li>Install &amp; Wire Management </li>
															<li>1 In-Wall Install &amp; Power Run</li>
															<li>Connections &amp; Materials</li>
															<li>1 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$2,974.90</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/araknis-model-2.jpg')} alt="Araknis Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 Multi-Gig Router</li>
															<li>1 Switch 8P</li>
															<li>2 WiFi6 APs</li>
															<li>1 Power Conditioner 5P</li>
															<li>Setup &amp; Configuration of 5 devices</li>
															<li>Enclosure</li>
															<li>1 In-Wall Plastic Enclosure</li>
															<li>Install &amp; Wire Management</li>
															<li>1 In-Wall Install &amp; Power Run</li>
															<li>Connections &amp; Materials </li>
															<li>2 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$1,297.97</span>
														</button>
													</div>
												</Col>
											</Row>
										</div>
									</div>
								)}
								{isPackageInnerOpen2 && (
									<div className="pkg-open inner pkg-inner-1 bounceIn">
										<Row>
											<Col xs={3}>
												<Button className="back-btn1" onClick={backBtnTop}>
													<FontAwesomeIcon icon={faCaretLeft} />
													<span>Back to Packages</span>
													<FontAwesomeIcon icon={faXmark} className="d-none d-sm-block d-md-none" />
												</Button>
											</Col>
											<Col xs={6}>
												<div className="title-open">
													<h3>Spacious Haven</h3>
												</div>
											</Col>
											<Col xs={3}>
												<div className="desc">
													<p>Up to 5000 SqFt. - 1,2 or 3 floors</p>
												</div>
											</Col>
										</Row>
										<div className="pkg-bg sec">
											<button className="comparison-btn" onClick={pkgBackBtn2}><FontAwesomeIcon icon={faCaretLeft} /> <span>Back to Details</span></button>
											<Row>
												<Col lg={3} md={4} className="offset-lg-2">
													<div className="holder bg-black bg-opacity-75">
														<div className="img-box">
															<img src={require('../../img/front/labor-logo.jpg')} alt="RMS Install-Only" loading="lazy" />
														</div>
														<ul className="list first">
															<li>Extended Wireless Coverage</li>
															<li>Good Quality Audio Streaming</li>
															<li>Full HD Video Streaming***</li>
															<li>Hi-Fi Streaming****</li>
															<li>4K Streaming for more than 1 TV</li>
															<li>8K Streaming for more than 1 TV*****</li>
															<li>Up to 200 connected devices</li>
															<li>Up to 350 connected devices</li>
															<li>Home Theater Ready</li>
															<li>Media Distribution Ready</li>
															<li>Dual ISP Reliability</li>
															<li>Remote Support Ready</li>
														</ul>
														<h4>RMS Install-Only</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$2,949.93</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/eero-model-2.jpg')} alt="eero Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>eero Mesh</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$4,346.88</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/unifi-model-1.jpg')} alt="UniFi Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked star">
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>UniFi Router + AP</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$3,127.90</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/luxul-model-2.jpg')} alt="Luxul Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>Luxul Mesh</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$2,974.90</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/araknis-model-2.jpg')} alt="Araknis Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>Araknis Router + AP</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$4,968.77</span>
														</button>
													</div>
												</Col>
											</Row>
											<Row>
												<Col className="offset-lg-2">
													<ul className="instruction bg-black bg-opacity-75 mt-3 rounded-4">
														<li>Dual ISP available for 1 Fiber connection and 1 Ethernet connection</li>
														<li>Only available for Ethernet connections</li>
														<li>Given the required bandwith the wireless sytem will deliver at least the 40%</li>
														<li>Given the required bandwith the wireless sytem will deliver at least the 60% (1 Gig)</li>
														<li>Given the required bandwith the wireless sytem is capable of multi-gig traffic</li>
													</ul>
												</Col>
											</Row>
										</div>
									</div>
								)}
								{isPackageOpen3 && (
									<div className="pkg-open pkg-1 bounceIn">
										<Row>
											<Col xs={3}>
												<Button className="back-btn1" onClick={backBtnTop}>
													<FontAwesomeIcon icon={faCaretLeft} />
													<span>Back to Packages</span>
													<FontAwesomeIcon icon={faXmark} className="d-none d-sm-block d-md-none" />
												</Button>
											</Col>
											<Col xs={6}>
												<div className="title-open">
													<h3>Grand Estate</h3>
												</div>
											</Col>
											<Col xs={3}>
												<div className="desc">
													<p>Up to 10000 SqFt. - 4 floors or less</p>
												</div>
											</Col>
										</Row>
										<div className="pkg-bg thrd">
											<Button className="comparison-btn" onClick={handleCamparison3}><span>Packages Comparison</span> <FontAwesomeIcon icon={faCaretDown} /></Button>
											<Row>
												<Col md={4} lg={2} className="offset-lg-2">
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/labor-logo.jpg')} alt="RMS Install-Only" loading="lazy" />
														</div>
														<ul className="list">
															<li>Setup &amp; Configuration of 5 devices</li>
															<li>Install &amp; Wire Management </li>
															<li>1 Medium Rack</li>
															<li>Connections &amp; Materials</li>
															<li>3 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$5,099.91</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/eero-model-3.jpg')} alt="eero Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 Router</li>
															<li>3 WiFi6 APs</li>
															<li>1 Power Conditioner 5P</li>
															<li>Setup &amp; Configuration of 3 devices</li>
															<li>Enclosure</li>
															<li>1 In-Wall Plastic Enclosure</li>
															<li>Install &amp; Wire Management </li>
															<li>1 In-Wall Install &amp; Power Run</li>
															<li>Connections &amp; Materials</li>
															<li>3 Ethernet Drops</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$7,269.85</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/unifi-model-3.jpg')} alt="UniFi Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 Multi-Gig Router</li>
															<li>1 Switch 16 Ports</li>
															<li>3 WiFi6 APs</li>
															<li>1 Power Conditioner 12P</li>
															<li>1 UPS 1100 VA</li>
															<li>Setup &amp; Configuration of 6 devices</li>
															<li>Enclosure</li>
															<li>1 Rack 15U</li>
															<li>Install &amp; Wire Management</li>
															<li>1 Medium Rack</li>
															<li>Connections &amp; Materials</li>
															<li>3 Ethernet Drops</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$9,298.10</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/luxul-model-3.jpg')} alt="Luxul Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 Router</li>
															<li>1 WiFi Controller </li>
															<li>1 Switch 16 Ports</li>
															<li>3 APs</li>
															<li>1 Power Conditioner 12P</li>
															<li>1 UPS 1100 VA</li>
															<li>Setup &amp; Configuration of 7 devices</li>
															<li>Enclosure</li>
															<li>1 Rack 15U</li>
															<li>Install &amp; Wire Management </li>
															<li>1 Medium Rack</li>
															<li>Connections &amp; Materials</li>
															<li>3 Ethernet Drops</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$12,151.09</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/araknis-model-3.jpg')} alt="Araknis Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 Multi-Gig Router</li>
															<li>1 Switch 16 Ports</li>
															<li>3 WiFi6 APs</li>
															<li>1 Power Conditioner 12P</li>
															<li>1 UPS 1100 VA</li>
															<li>Setup &amp; Configuration of 6 devices</li>
															<li>Enclosure</li>
															<li>1 Rack 15U </li>
															<li>Install &amp; Wire Management </li>
															<li>1 Medium Rack</li>
															<li>Connections &amp; Materials</li>
															<li>3 Ethernet Drops</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$12,990.00</span>
														</button>
													</div>
												</Col>
											</Row>
										</div>
									</div>
								)}
								{isPackageInnerOpen3 && (
									<div className="pkg-open inner pkg-inner-1 bounceIn">
										<Row>
											<Col xs={3}>
												<Button className="back-btn1" onClick={backBtnTop}>
													<FontAwesomeIcon icon={faCaretLeft} />
													<span>Back to Packages</span>
													<FontAwesomeIcon icon={faXmark} className="d-none d-sm-block d-md-none" />
												</Button>
											</Col>
											<Col xs={6}>
												<div className="title-open">
													<h3>Grand Estate</h3>
												</div>
											</Col>
											<Col xs={3}>
												<div className="desc">
													<p>Up to 10000 SqFt. - 4 floors or less</p>
												</div>
											</Col>
										</Row>
										<div className="pkg-bg thrd">
											<button className="comparison-btn" onClick={pkgBackBtn3}><FontAwesomeIcon icon={faCaretLeft} /> <span>Back to Details</span></button>
											<Row>
												<Col lg={3} md={4} className="offset-lg-2">
													<div className="holder bg-black bg-opacity-75">
														<div className="img-box">
															<img src={require('../../img/front/labor-logo.jpg')} alt="RMS Install-Only" loading="lazy" />
														</div>
														<ul className="list first">
															<li>Extended Wireless Coverage</li>
															<li>Good Quality Audio Streaming</li>
															<li>Full HD Video Streaming***</li>
															<li>Hi-Fi Streaming****</li>
															<li>4K Streaming for more than 1 TV</li>
															<li>8K Streaming for more than 1 TV*****</li>
															<li>Up to 200 connected devices</li>
															<li>Up to 350 connected devices</li>
															<li>Home Theater Ready</li>
															<li>Media Distribution Ready</li>
															<li>Dual ISP Reliability</li>
															<li>Remote Support Ready</li>
														</ul>
														<h4>RMS Install-Only</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $5,099.91</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/eero-model-3.jpg')} alt="eero Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>eero Mesh</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $7,269.85</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/unifi-model-3.jpg')} alt="UniFi Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked star">
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>UniFi Router + AP</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $9,298.10</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/luxul-model-3.jpg')} alt="Luxul Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked star2">
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>Luxul Mesh</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $12,151.09</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/araknis-model-3.jpg')} alt="Araknis Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>Araknis Router + AP</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$4,968.77</span>
														</button>
													</div>
												</Col>
											</Row>
											<Row>
												<Col className="offset-lg-2">
													<ul className="instruction bg-black bg-opacity-75 mt-3 rounded-4">
														<li>Dual ISP available for 1 Fiber connection and 1 Ethernet connection</li>
														<li>Only available for Ethernet connections</li>
														<li>Given the required bandwith the wireless sytem will deliver at least the 40%</li>
														<li>Given the required bandwith the wireless sytem will deliver at least the 60% (1 Gig)</li>
														<li>Given the required bandwith the wireless sytem is capable of multi-gig traffic</li>
													</ul>
												</Col>
											</Row>
										</div>
									</div>
								)}
								{isPackageOpen4 && (
									<div className="pkg-open pkg-1 bounceIn">
										<Row>
											<Col xs={3}>
												<Button className="back-btn1" onClick={backBtnTop}>
													<FontAwesomeIcon icon={faCaretLeft} />
													<span>Back to Packages</span>
													<FontAwesomeIcon icon={faXmark} className="d-none d-sm-block d-md-none" />
												</Button>
											</Col>
											<Col xs={6}>
												<div className="title-open">
													<h3>Majestic Manor</h3>
												</div>
											</Col>
											<Col xs={3}>
												<div className="desc">
													<p>10000 SqFt. - 4 floors or less</p>
												</div>
											</Col>
										</Row>
										<div className="pkg-bg fourth">
											<Button className="comparison-btn" onClick={handleCamparison4}><span>Packages Comparison</span> <FontAwesomeIcon icon={faCaretDown} /></Button>
											<Row>
												<Col md={4} lg={2} className="offset-lg-2">
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/labor-logo.jpg')} alt="RMS Install-Only" loading="lazy" />
														</div>
														<ul className="list">
															<li>Setup &amp; Configuration of 5 devices</li>
															<li>Install &amp; Wire Management </li>
															<li>1 Medium Rack</li>
															<li>Connections &amp; Materials</li>
															<li>3 Ethernet Drop</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $7,199.88</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/eero-model-4.jpg')} alt="eero Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 Router</li>
															<li>4 WiFi6 APs</li>
															<li>1 Power Conditioner 5P</li>
															<li>Setup &amp; Configuration of 6 devices</li>
															<li>Enclosure</li>
															<li>1 In-Wall Plastic Enclosure</li>
															<li>Install &amp; Wire Management </li>
															<li>1 In-Wall Install &amp; Power Run</li>
															<li>Connections &amp; Materials</li>
															<li>4 Ethernet Drops</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$8,968.83</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/unifi-model-4.jpg')} alt="UniFi Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 Multi-Gig Router</li>
															<li>1 Switch 24 Ports</li>
															<li>4 WiFi6 APs</li>
															<li>1 Power Conditioner 12P</li>
															<li>1 UPS 1100 VA</li>
															<li>Setup &amp; Configuration of 7 devices</li>
															<li>Enclosure</li>
															<li>1 Rack 21U</li>
															<li>Install &amp; Wire Management</li>
															<li>1 Large Rack</li>
															<li>Connections &amp; Materials</li>
															<li>4 Ethernet Drops</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $13,030.28</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/luxul-model-4.jpg')} alt="Luxul Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 Router</li>
															<li>1 WiFi Controller </li>
															<li>1 Switch 24 Ports</li>
															<li>3 APs</li>
															<li>1 Power Conditioner 12P</li>
															<li>1 UPS 2000 VA</li>
															<li>Setup &amp; Configuration of 8 devices</li>
															<li>Enclosure</li>
															<li>1 Rack 21U</li>
															<li>Install &amp; Wire Management </li>
															<li>1 Large Rack</li>
															<li>Connections &amp; Materials</li>
															<li>4 Ethernet Drops</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $16,844.27</span>
														</button>
													</div>
												</Col>
												<Col md={4} lg={2}>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/araknis-model-4.jpg')} alt="Araknis Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li>Equipment</li>
															<li>1 Multi-Gig Router</li>
															<li>1 Switch 16 Ports</li>
															<li>3 WiFi6 APs</li>
															<li>1 Power Conditioner 12P</li>
															<li>1 UPS 2000 VA</li>
															<li>Setup &amp; Configuration of 7 devices</li>
															<li>Enclosure</li>
															<li>1 Rack 21U </li>
															<li>Install &amp; Wire Management </li>
															<li>1 Large Rack</li>
															<li>Connections &amp; Materials</li>
															<li>4 Ethernet Drops</li>
														</ul>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$17,293.18</span>
														</button>
													</div>
												</Col>
											</Row>
										</div>
									</div>
								)}
								{isPackageInnerOpen4 && (
									<div className="pkg-open inner pkg-inner-1 bounceIn">
										<Row>
											<Col xs={3}>
												<Button className="back-btn1" onClick={backBtnTop}>
													<FontAwesomeIcon icon={faCaretLeft} />
													<span>Back to Packages</span>
													<FontAwesomeIcon icon={faXmark} className="d-none d-sm-block d-md-none" />
												</Button>
											</Col>
											<Col xs={6}>
												<div className="title-open">
													<h3>Grand Estate</h3>
												</div>
											</Col>
											<Col xs={3}>
												<div className="desc">
													<p>Up to 10000 SqFt. - 4 floors or less</p>
												</div>
											</Col>
										</Row>
										<div className="pkg-bg fourth">
											<button className="comparison-btn" onClick={pkgBackBtn4}><FontAwesomeIcon icon={faCaretLeft} /> <span>Back to Details</span></button>
											<Row>
												<Col lg={3} md={4} className="offset-lg-2">
													<div className="holder bg-black bg-opacity-75">
														<div className="img-box">
															<img src={require('../../img/front/labor-logo.jpg')} alt="RMS Install-Only" loading="lazy" />
														</div>
														<ul className="list first">
															<li>Extended Wireless Coverage</li>
															<li>Good Quality Audio Streaming</li>
															<li>Full HD Video Streaming***</li>
															<li>Hi-Fi Streaming****</li>
															<li>4K Streaming for more than 1 TV</li>
															<li>8K Streaming for more than 1 TV*****</li>
															<li>Up to 200 connected devices</li>
															<li>Up to 350 connected devices</li>
															<li>Home Theater Ready</li>
															<li>Media Distribution Ready</li>
															<li>Dual ISP Reliability</li>
															<li>Remote Support Ready</li>
														</ul>
														<h4>RMS Install-Only</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $7,199.88</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/eero-model-4.jpg')} alt="eero Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>eero Mesh</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $8,968.83</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/unifi-model-4.jpg')} alt="UniFi Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked star">
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>UniFi Router + AP</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $13,030.28</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/luxul-model-4.jpg')} alt="Luxul Mesh" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li>
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>Luxul Mesh</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">for $16,844.27</span>
														</button>
													</div>
												</Col>
												<Col>
													<div className="holder">
														<div className="img-box">
															<img src={require('../../img/front/araknis-model-4.jpg')} alt="Araknis Router + AP" loading="lazy" />
														</div>
														<ul className="list">
															<li className="checked">
																<span class="title">Extended Wireless Coverage</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Good Quality Audio Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Full HD Video Streaming</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Hi-Fi Streaming***</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">4K Streaming for more than 1 TV</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">8K Streaming for more than 1 TV*****</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 200 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Up to 350 connected devices</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Home Theater Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Media Distribution Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Dual ISP Reliability</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
															<li className="checked">
																<span class="title">Remote Support Ready</span>
																<FontAwesomeIcon icon={faCircle} />
															</li>
														</ul>
														<h4>Araknis Router + AP</h4>
														<button className="btn">
															<span className="txt">Buy Now</span>
															<span className="price">$17,293.18</span>
														</button>
													</div>
												</Col>
											</Row>
											<Row>
												<Col className="offset-lg-2">
													<ul className="instruction bg-black bg-opacity-75 mt-3 rounded-4">
														<li>Dual ISP available for 1 Fiber connection and 1 Ethernet connection</li>
														<li>Only available for Ethernet connections</li>
														<li>Given the required bandwith the wireless sytem will deliver at least the 40%</li>
														<li>Given the required bandwith the wireless sytem will deliver at least the 60% (1 Gig)</li>
														<li>Given the required bandwith the wireless sytem is capable of multi-gig traffic</li>
													</ul>
												</Col>
											</Row>
										</div>
									</div>
								)}
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}
export default CustomRMSPkg;