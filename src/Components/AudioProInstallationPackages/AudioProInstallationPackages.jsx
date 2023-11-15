import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../Components/AudioProInstallationPackages/AudioProInstallationPackages.css';
const AudioProInstallationPackages = (Props) => {
	const [activeTab, setActiveTab] = useState(null);
	const [tab1Visible, setTab1Visible] = useState(false);
	const [tab2Visible, setTab2Visible] = useState(false);
	const [tab3Visible, setTab3Visible] = useState(false);
	const [tab4Visible, setTab4Visible] = useState(false);

	const handleTabClick = (tabNumber) => {
		setActiveTab(tabNumber);
		if (tabNumber === 1) {
			setTab1Visible(true);
			setTab2Visible(false);
			setTab3Visible(false);
			setTab4Visible(false);
		} else if (tabNumber === 2) {
			setTab1Visible(false);
			setTab2Visible(true);
			setTab3Visible(false);
			setTab4Visible(false);
		} else if (tabNumber === 3) {
			setTab1Visible(false);
			setTab2Visible(false);
			setTab3Visible(true);
			setTab4Visible(false);
		} else if (tabNumber === 4) {
			setTab1Visible(false);
			setTab2Visible(false);
			setTab3Visible(false);
			setTab4Visible(true);
		}
	};

	const handleBackButtonClick = () => {
		setActiveTab(null);
		setTab1Visible(false);
		setTab2Visible(false);
		setTab3Visible(false);
		setTab4Visible(false);
	};
	return (
		<>
			<div className="audio-wrapper" id="audio-wrapper">
				<>
				<div className={`audio-pkg-items bounceIn ${activeTab ? 'hidden' : ''}`}>
					<Container>
						<Row>
							<Col sm={12}>
								<div className="audio-pkg-title">
									<h4>RMS Audio Pro Installation Packages</h4>
								</div>
								<ul className="items-area">
									<li className="item" onClick={() => handleTabClick(1)}>
										<div className="main-title"><strong>1,</strong></div>
										<div className="box">
											<div className="img">
												<img src={require('../../img/front/soundbar-icon.png')} alt="soundbar" loading="lazy" />
											</div>
										</div>
									</li>
									<li className="item" onClick={() => handleTabClick(2)}>
										<div className="main-title"><strong>2,</strong></div>
										<div className="box">
											<div className="img">
												<img src={require('../../img/front/soundbar-icon-2.png')} alt="Speakers" loading="lazy" />
											</div>
										</div>
									</li>
									<li className="item" onClick={() => handleTabClick(3)}>
										<div className="main-title"><strong>3,</strong></div>
										<div className="box">
											<div className="img">
												<img src={require('../../img/front/soundbar-icon-3.png')} alt="Woofers" loading="lazy" />
											</div>
										</div>
									</li>
									<li className="item" onClick={() => handleTabClick(4)}>
										<div className="main-title"><strong>Surround</strong></div>
										<div className="box">
											<div className="img">
												<img src={require('../../img/front/sound-center-2.png')} alt="surround" loading="lazy" />
											</div>
										</div>
									</li>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
					{(tab1Visible || tab2Visible || tab3Visible || tab4Visible) && (
						<>
							{tab1Visible && (
								<div className="tab-1">
									<Container className="bounceIn">
										<Row>
											<Col sm={12}>
												<div className="audio-pkg-head">
													<button className="audio-btn-back" onClick={handleBackButtonClick}></button>
													<div class="audio-pkg-title"><h4>RMS Audio Pro Installation Packages</h4></div>
												</div>
												<div className="audio-pkg-holder">
													<div className="audio-pkg-head-b">
														<div class="main-title"><h4>1. Soundbar Installation Package</h4></div>
													</div>
													<div className="audio-pkg-body">
														<div className="audio-frame">
															<div className="img">
																<img src={require('../../img/front/soundbar-icon.png')} alt="soundbar" loading="lazy" />
															</div>
															<div className="audio-row">
																<strong className="sub-title">Mount:</strong>
																<ul className="list-inline label-radio">
																	<li className="list-inline-item">
																		<input className="radio-hide" type="radio" name="audio-mount" id="audio-wall" />
																		<label htmlFor="audio-wall">Wall</label>
																	</li>
																	<li className="list-inline-item">
																		<input className="radio-hide" type="radio" name="audio-mount" id="tv-attached" />
																		<label htmlFor="tv-attached">TV Attached</label>
																	</li>
																</ul>
															</div>
															<div className="audio-row">
																<div className="checkbox-holder">
																	<div className="checkbox-row">
																		<input type="checkbox" id="sonosbar" name="sonosbar" />
																		<label htmlFor="sonosbar">It is a SONOS Soundbar</label>
																	</div>
																</div>
															</div>
															<div className="audio-row">
																<ul className="list-inline label-radio">
																	<li className="list-inline-item">
																		<input className="radio-hide" type="radio" name="sonos_soundbar" id="sonos_soundbar-arc" />
																		<label htmlFor="sonos_soundbar-arc">ARC</label>
																	</li>
																	<li className="list-inline-item">
																		<input className="radio-hide" type="radio" name="sonos_soundbar" id="sonos_soundbar-beam" />
																		<label htmlFor="sonos_soundbar-beam">Beam</label>
																	</li>
																</ul>
															</div>
															<i class="ico-arrow"></i>
														</div>
														<div className="audio-frame bg-white">
															<div className="img">
																<img src={require('../../img/front/Sanus-Extendable-Mount-for-Sonos-Arc.jpg')} alt="Sanus Extendable Mount for Sonos Arc" loading="lazy" />
															</div>
															<div className="caption">
																<p>Sanus Extendable Mount for Sonos Arc</p>
															</div>
															<i class="ico-arrow white"></i>
														</div>
														<div className="audio-frame">
															<i className="semi-circle-left"></i>
															<div className="audio-row">
																<div className="checkbox-holder">
																	<div className="checkbox-row">
																		<input type="checkbox" id="sonos_soundbar_satellite" name="sonosbar" />
																		<label htmlFor="sonos_soundbar_satellite">Add SONOS Satellites Mount</label>
																	</div>
																</div>
															</div>
															<div className="audio-row">
																<ul className="list-inline radio-input row">
																	<li className="list-inline-item col-lg-6">
																		<input type="radio" name="sonos_soundbar_satellite_option" id="white_mount" />
																		<label htmlFor="white_mount">White Mount</label>
																	</li>
																	<li className="list-inline-item col-lg-6">
																		<input type="radio" name="sonos_soundbar_satellite_option" id="blackmount" />
																		<label htmlFor="blackmount">Black Mount</label>
																	</li>
																</ul>
																<div className="btn-area">
																	<a className='book-now' href="/">Book now <br /> for $299.98!</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</Col>
										</Row>
									</Container>
								</div>
							)}
							{tab2Visible && (
								<div className="tab-2">
									<Container className="bounceIn">
										<Row>
											<Col sm={12}>
												<div className="audio-pkg-head">
													<button className="audio-btn-back" onClick={handleBackButtonClick}></button>
													<div class="audio-pkg-title"><h4>RMS Audio Pro Installation Packages</h4></div>
												</div>
												<div className="audio-pkg-holder">
													<div className="audio-pkg-head-b">
														<div class="main-title"><h4>2. Audio Separates</h4></div>
													</div>
													<div className="audio-pkg-body">
														<div className="audio-frame">
															<div className="img">
																<img src={require('../../img/front/soundbar-icon-2.png')} alt="soundbar" loading="lazy" />
															</div>
															<i class="ico-arrow"></i>
														</div>
														<div className="audio-frame">
															<div className="audio-row">
																<ul className="radio-input add row">
																	<li>
																		<input type="radio" name="audio_seperates" id="floor_1" />
																		<label htmlFor="floor_1">Floor</label>
																	</li>
																	<li>
																		<input type="radio" name="audio_seperates" id="shelves_1" />
																		<label htmlFor="shelves_1">Shelves</label>
																	</li>
																	<li>
																		<input type="radio" name="audio_seperates" id="table_top_1" />
																		<label htmlFor="table_top_1">Table Top</label>
																	</li>
																</ul>
															</div>
															<div className="audio-row">
																<div class="checkbox-holder">
																	<div class="checkbox-row">
																		<input type="checkbox" id="include_cables_1" name="audio_seperates_include_cables" />
																		<label for="include_cables_1">Include Cables Concealing <small>Including Speaker Wire Up to 50 ft</small></label>
																	</div>
																</div>
															</div>
															<i class="ico-arrow white"></i>
														</div>
														<div className="audio-frame">
															<i className="semi-circle-left grey"></i>
															<div className="audio-row pt-md-5 pb-md-3">
																<div class="checkbox-holder">
																	<div class="checkbox-row">
																		<input type="checkbox" id="include_avr_setup_1" name="audio_seperates_include_avr_setup_one[]" />
																		<label for="include_avr_setup_1">Include AVR Setup</label>
																	</div>
																</div>
															</div>
															<div className="audio-row ps-md-4 pb-md-4">
																<div class="checkbox-holder">
																	<div class="checkbox-row">
																		<input type="checkbox" id="include_woofer_1" name="audio_seperates_include_avr_setup_one[]" />
																		<label for="include_woofer_1">Include Subwoofer <br /> Concealed Connection</label>
																	</div>
																</div>
															</div>
															<div className="audio-row">
																<div className="btn-area">
																	<a className='book-now' href="/">Book now <br /> for $199.98!</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</Col>
										</Row>
									</Container>
								</div>
							)}
							{tab3Visible && (
								<div className="tab-3">
									<Container className="bounceIn">
										<Row>
											<Col sm={12}>
												<div className="audio-pkg-head">
													<button className="audio-btn-back" onClick={handleBackButtonClick}></button>
													<div class="audio-pkg-title"><h4>RMS Audio Pro Installation Packages</h4></div>
												</div>
												<div className="audio-pkg-holder">
													<div className="audio-pkg-head-b">
														<div class="main-title"><h4>3. Left, Center, Right</h4></div>
													</div>
													<div className="audio-pkg-body">
														<div className="audio-frame">
															<div className="img">
																<img src={require('../../img/front/soundbar-icon-3.png')} alt="soundbar" loading="lazy" />
															</div>
															<i class="ico-arrow"></i>
														</div>
														<div className="audio-frame">
															<div className="audio-row">
																<ul className="radio-input add row">
																	<li>
																		<input type="radio" name="l_c_r_audio_seperates" id="floor_2" />
																		<label htmlFor="floor_2">Floor</label>
																	</li>
																	<li>
																		<input type="radio" name="l_c_r_audio_seperates" id="shelves_2" />
																		<label htmlFor="shelves_2">Shelves</label>
																	</li>
																	<li>
																		<input type="radio" name="l_c_r_audio_seperates" id="table_top_2" />
																		<label htmlFor="table_top_2">Table Top</label>
																	</li>
																	<li>
																		<input type="radio" name="l_c_r_audio_seperates" id="in_wall_2" />
																		<label htmlFor="in_wall_2">In Wall</label>
																	</li>
																</ul>
															</div>
															<div className="audio-row">
																<div class="checkbox-holder">
																	<div class="checkbox-row">
																		<input type="checkbox" id="include_cables_2" name="l_c_r_audio_seperates_include_cables" />
																		<label for="include_cables_2">Include Cables Concealing <small>Including Speaker Wire Up to 50 ft</small></label>
																	</div>
																</div>
															</div>
															<i class="ico-arrow white"></i>
														</div>
														<div className="audio-frame">
															<i className="semi-circle-left grey"></i>
															<div className="audio-row pt-md-5 pb-md-3">
																<div class="checkbox-holder">
																	<div class="checkbox-row">
																		<input type="checkbox" id="include_avr_setup_2" name="audio_seperates_include_avr_setup_one[]" />
																		<label for="include_avr_setup_2">Include AVR Setup</label>
																	</div>
																</div>
															</div>
															<div className="audio-row ps-md-4 pb-md-4">
																<div class="checkbox-holder">
																	<div class="checkbox-row">
																		<input type="checkbox" id="include_woofer_2" name="audio_seperates_include_avr_setup_one[]" />
																		<label for="include_woofer_2">Include Subwoofer <br /> Concealed Connection</label>
																	</div>
																</div>
															</div>
															<div className="audio-row">
																<div className="btn-area">
																	<a className='book-now' href="/">Book now <br /> for $199.98!</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</Col>
										</Row>
									</Container>
								</div>
							)}
							{tab4Visible && (
								<div className="tab-4">
									<Container className="bounceIn">
										<Row>
											<Col sm={12}>
												<div className="audio-pkg-head">
													<button className="audio-btn-back" onClick={handleBackButtonClick}></button>
													<div class="audio-pkg-title"><h4>RMS Audio Pro Installation Packages</h4></div>
												</div>
												<div className="audio-pkg-holder">
													<div className="audio-pkg-head-b">
														<div class="main-title"><h4>Surround</h4></div>
													</div>
													<div className="audio-pkg-body">
														<div className="audio-frame">
															<div class="audio-row">
																<strong class="title-top">Current Wiring Scenario:</strong>
																<ul class="list-inline radio-input">
																	<li class="list-inline-item me-md-4 mb-md-3">
																		<input type="radio" name="wiring_scenario" id="open_walls_4" />
																		<label for="open_walls_4">Open Walls</label>
																	</li>
																	<li class="list-inline-item me-md-4 mb-md-3">
																		<input type="radio" name="wiring_scenario" id="pre_wired_4" />
																		<label for="pre_wired_4">Pre-Wired</label>
																	</li>
																	<li class="list-inline-item me-md-4 mb-md-3">
																		<input type="radio" name="wiring_scenario" id="no_wires_4" />
																		<label for="no_wires_4">Closed Walls, No Wires</label>
																	</li>
																</ul>
															</div>
															<div class="audio-row">
																<strong class="sub-title">Satellite Speakers:</strong>
																<ul class="list-inline radio-input">
																	<li class="list-inline-item me-md-4 mb-md-3">
																		<input type="radio" name="satellite_speakers" id="satellite_speakers_5" />
																		<label for="satellite_speakers_5">5</label>
																	</li>
																	<li class="list-inline-item me-md-4 mb-md-3">
																		<input type="radio" name="satellite_speakers" id="satellite_speakers_7" />
																		<label for="satellite_speakers_7">7</label>
																	</li>
																	<li class="list-inline-item me-md-4 mb-md-3">
																		<input type="radio" name="satellite_speakers" id="satellite_speakers_9" />
																		<label for="satellite_speakers_9">9</label>
																	</li>
																	<li class="list-inline-item me-md-4 mb-md-3">
																		<input type="radio" name="satellite_speakers" id="satellite_speakers_11" />
																		<label for="satellite_speakers_11">11</label>
																	</li>
																</ul>
															</div>
															<div class="audio-row">
																<strong class="sub-title">Subwoofers:</strong>
																<ul class="list-inline radio-input">
																	<li class="list-inline-item me-md-4 mb-md-3">
																		<input type="radio" name="subwoofers" id="subwoofers_1" />
																		<label for="subwoofers_1">1</label>
																	</li>
																	<li class="list-inline-item me-md-4 mb-md-3">
																		<input type="radio" name="subwoofers" id="subwoofers_2" />
																		<label for="subwoofers_2">2</label>
																	</li>
																</ul>
															</div>
															<i class="ico-arrow"></i>
														</div>
														<div className="audio-frame">
															<div className="image">
																<img src={require('../../img/front/satellite-speaker-5.png')} alt="satellite speaker" loading="lazy" />
															</div>
															<i class="ico-arrow white"></i>
														</div>
														<div className="audio-frame">
															<i className="semi-circle-left grey"></i>
															<div className="audio-row pt-md-5 pb-md-3">
																<div class="checkbox-holder">
																	<div class="checkbox-row">
																		<input type="checkbox" id="include_avr_setup_4" name="audio_seperates_include_avr_setup_third[]" />
																		<label for="include_avr_setup_4">Include AVR Setup</label>
																	</div>
																</div>
															</div>
															<div className="audio-row pb-md-4">
																<div class="checkbox-holder">
																	<div class="checkbox-row">
																		<input type="checkbox" id="include_pre_amp_setup_4" name="audio_seperates_include_avr_setup_third[]" />
																		<label for="include_pre_amp_setup_4">Include Pre-Amp Setup</label>
																	</div>
																</div>
															</div>
															<div className="audio-row pb-md-4">
																<div class="checkbox-holder">
																	<div class="checkbox-row">
																		<input type="checkbox" id="include_amp_setup_4" name="audio_seperates_include_avr_setup_third[]" />
																		<label for="include_amp_setup_4">Include Amp Setup</label>
																	</div>
																</div>
															</div>
															<div className="audio-row">
																<div className="btn-area">
																	<a className='book-now' href="/">Book now <br /> for $824.98!</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</Col>
										</Row>
									</Container>
								</div>
							)}
						</>
					)}
				</>
			</div>
		</>
	)
}
export default AudioProInstallationPackages;