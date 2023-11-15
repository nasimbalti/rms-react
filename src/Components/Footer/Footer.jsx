import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import '../../Components/Footer/Footer.css';

import AprImg from '../../img/front/apr.png';
import ChipIcon from '../../img/front/chip_icon.png';

import logo from '../../img/rms_logo.png';
import ControlLogo from '../../img/module/footer-logo/control4-logo.png';
import AngiesLogo from '../../img/module/footer-logo/AngiesList_SSA_2019_HighRes.png';
import CediaLogo from '../../img/module/footer-logo/cedia.png';
import AtlantaLogo from '../../img/module/footer-logo/ghaba.png';
import BBBLogo from '../../img/module/footer-logo/bbb-logo.png';

import paymentLogo from '../../img/front/logos/payicons.png';

const Footer = () => {
	return(
		<>
			<div className="footer-area">
				<div className="explore-area">
					<Container>
						<Row>
							<Col xl={3} md={2}>
								<div className="img-apr">
									<img src={AprImg} alt="apr" loading="lazy" />
								</div>
							</Col>
							<Col md={6}>
								<div className="txt">
									<h3>Explore 0%* APR financing for your project</h3>
									<p>*0% interest is for promotional period only.</p>
								</div>
							</Col>
							<Col xl={3} md={4}>
								<div className="btn-area">
									<a href="/" target="_blank" className="btn">See Options</a>
									<div className="sub-title">
										<i className="ico">
											<img src={ChipIcon} alt="chip_icon" />
										</i>
										<span>Hearth</span>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<footer id="footer">
					<div className="footer-t">
						<Container>
							<Row className="border-bottom">
								<Col lg={3} md={7}>
									<strong className="logo">
										<Link to="/"><img src={logo} alt="RMS installs" className="img-fluid" loading="lazy" /></Link>
									</strong>
									<ul class="info">
										<li>
											<i className="ico">
												<FontAwesomeIcon icon={faHouseChimney} />
											</i>
											<div className="txt">
												<address><a className="address" href="/">220 Heritage Walk, Ste 205 <br /> Woodstock GA 30188, United States</a></address>
											</div>
										</li>
										<li>
											<i className="ico">
												<FontAwesomeIcon icon={faEnvelope} />
											</i>
											<div className="txt">
												<a href="mailto:&#105;&#110;&#102;&#111;&#064;&#114;&#109;&#115;&#105;&#110;&#115;&#116;&#097;&#108;&#108;&#115;&#046;&#099;&#111;&#109;">&#105;&#110;&#102;&#111;&#064;&#114;&#109;&#115;&#105;&#110;&#115;&#116;&#097;&#108;&#108;&#115;&#046;&#099;&#111;&#109;</a>
											</div>
										</li>
										<li>
											<i className="ico">
												<FontAwesomeIcon />
											</i>
											<div className="txt">
												<p><a href="/">Click Here</a> to Fill The Form Online or Call us at:</p>
											</div>
										</li>
										<li className="tel">
											<i className="ico">
												<FontAwesomeIcon icon={faPhone} />
											</i>
											<div className="txt">
												<a href="tel:4704563108">(470) 456-3108</a>
											</div>
										</li>
									</ul>
								</Col>
								<Col lg={3} md={5}>
									<h4>Business Hours</h4>
									<dl>
										<dt>Monday</dt>
										<dd><time datetime="08:00">08:00 AM</time> - <time datetime="18:00">06:00 PM</time></dd>
										<dt>Tuesday</dt>
										<dd><time datetime="08:00">08:00 AM</time> - <time datetime="18:00">06:00 PM</time></dd>
										<dt>Wednesday</dt>
										<dd><time datetime="08:00">08:00 AM</time> - <time datetime="18:00">06:00 PM</time></dd>
										<dt>Thursday</dt>
										<dd><time datetime="08:00">08:00 AM</time> - <time datetime="18:00">06:00 PM</time></dd>
										<dt>Friday</dt>
										<dd><time datetime="10:00">10:00 AM</time> - <time datetime="17:00">05:00 PM</time></dd>
										<dt>Saturday</dt>
										<dd><time datetime="08:00">08:00 AM</time> - <time datetime="18:00">06:00 PM</time></dd>
										<dt>Sunday</dt>
										<dd>(Closed)</dd>
									</dl>
								</Col>
								<Col lg={6}>
									<Row>
										<Col md={5}>
											<h4>Residential</h4>
											<ul className="links">
												<li><a href="/">Wireless Network &amp; Ethernet</a></li>
												<li><a href="/">Home Automation</a></li>
												<li><a href="/">Home Theater Installation</a></li>
												<li><a href="/">TV Installation</a></li>
												<li><a href="/">Audio Installation</a></li>
												<li><a href="/">Multi Room Audio</a></li>
												<li><a href="/">Video Distribution</a></li>
												<li><a href="/">Outdoor Entertainment</a></li>
												<li><a href="/">Surveillance Installation</a></li>
											</ul>
										</Col>
										<Col md={4}>
											<h4>Business Solutions</h4>
											<ul className="links">
												<li><a href="/">Worship</a></li>
												<li><a href="/">Healthcare</a></li>
												<li><a href="/">Retail</a></li>
												<li><a href="/">Corporate</a></li>
												<li><a href="/">Hospitality</a></li>
												<li><a href="/">Education</a></li>
												<li><a href="/">Government</a></li>
											</ul>
										</Col>
										<Col md={3}>
											<h4>Services Areas</h4>
											<ul className="links">
												<li><a href="/">Acworth</a></li>
												<li><a href="/">Kennesaw</a></li>
												<li><a href="/">Dallas</a></li>
												<li><a href="/">Cartersville</a></li>
												<li><a href="/">Marietta</a></li>
												<li><a href="/">Woodstock</a></li>
												<li><a href="/">Canton</a></li>
												<li><a href="/">More Areas</a></li>
											</ul>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row className="py-3 align-items-center ">
								<Col lg={8}>
									<ul className="footer-logo">
										<li><a href="/"><img src={ControlLogo} alt="Control 4" className="img-fluid" loading="lazy" /></a></li>
										<li><a href="/"><img src={AngiesLogo} alt="AngiesList_SSA_2019_HighRes" loading="lazy" /></a></li>
										<li><a href="/"><img src={CediaLogo} alt="Cedia" className="img-fluid" loading="lazy" /></a></li>
										<li><a href="/"><img src={AtlantaLogo} alt="Atlanta Home Builders Association" className="img-fluid" loading="lazy" /></a></li>
										<li><a href="/"><img src={BBBLogo} alt="Better Business Bureau" className="img-fluid" loading="lazy" /></a></li>
									</ul>
								</Col>
								<Col lg={4}>
									<div className="payment-mode">
										<img src={paymentLogo} alt="Discover Master Card Visa American Express Apple Pay" className="img-fluid" loading="lazy" />
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="footer-b">
						<Container>
							<Row>
								<Col md={6}>
									<p>Copyright &copy; 2023 RMS Installs All Rights Reserved.</p>
								</Col>
								<Col md={6}>
									<ul className="links">
										<li><a href="/">Privacy Policy</a></li>
										<li><a href="/">Terms of Use</a></li>
									</ul>
								</Col>
							</Row>
						</Container>
					</div>
				</footer>
			</div>
		</>
	)
}
export default Footer;