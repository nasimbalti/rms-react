import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../Components/TVProInstallationPackages/TVProInstallationPackages.css';
const TVProInstallationPackages = (Props) => {
	const [activeTab, setActiveTab] = useState('tab-1');
	const handlePackage = () => {
		setActiveTab('tab-2');
	};
	const backToParent = () => {
		setActiveTab('tab-1');
	};

	return (
		<>
			<div className="tv-packages-wrap" id="tv-installation-packages">
				<div className={`tab-1 ${activeTab === 'tab-1' ? 'active' : 'hidden'}`}>
					<Container className="bounceIn">
						<Row>
							<Col sm={12}>
								<div className="holder">
									<div className="align-left">
										<div className="head">
											<h2>RMS Custom TV Pro Installation Package</h2>
										</div>
										<div className="frame">
											<div className="col">
												<h3>Build your Own Project</h3>
												<div className="form-area">
													<div className="form-row">
														<h4>Your TV Size:</h4>
														<ul className="choose-tv list-inline">
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="TvSizeBy" id="42to65" />
																<label htmlFor="42to65">Up to 65"</label>
															</li>
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="TvSizeBy" id="65to85" />
																<label htmlFor="65to85">Up to 85"</label>
															</li>
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="TvSizeBy" id="85ormore" />
																<label htmlFor="85ormore">More than 85"</label>
															</li>
														</ul>
														<ul className="audio-box list-inline">
															<li className="list-inline-item">
																<input type="radio" name="tv_frame_selection" className="tv_frame_selection" id="frametv" />
																<label htmlFor="frametv">On Wall</label>
															</li>
															<li className="list-inline-item">
																<input type="radio" name="tv_frame_selection" className="tv_frame_selection" id="tabletop" />
																<label htmlFor="tabletop">Table Top</label>
															</li>
														</ul>
														<h4>Location:</h4>
														<ul className="audio-box list-inline">
															<li className="list-inline-item">
																<input type="radio" name="tvlocationby" className="tv_set_location" id="indoor" />
																<label htmlFor="indoor">Indoor</label>
															</li>
															<li className="list-inline-item">
																<input type="radio" name="tvlocationby" className="tv_set_location" id="outdoor" />
																<label htmlFor="outdoor">Outdoor</label>
															</li>
														</ul>
														<ul className="choose-tv list-inline">
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="locationset" id="wall" />
																<label htmlFor="wall">Wall</label>
															</li>
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="locationset" id="fireplace" />
																<label htmlFor="fireplace">Fireplace</label>
															</li>
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="locationset" id="ceiling" />
																<label htmlFor="ceiling">Ceiling</label>
															</li>
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="locationset" id="mantleMount" />
																<label htmlFor="mantleMount">Mantle Mount</label>
															</li>
														</ul>
													</div>
													<div className="checkbox-holder">
														<div className="check-box">
															<input type="checkbox" className="input-check more_than_one_room" name="more_than_one_room" id="morethanoneroom" />
															<label htmlFor="morethanoneroom">
																<strong>More Than one Room</strong>
																<span>We will ask you later about other TV(s) details</span>
															</label>
														</div>
													</div>
												</div>
											</div>
											<div className="col">
												<i class='semi-circle-left'></i>
												<div className="img">
													<img src={require('../../img/front/tv-install-step-1.jpg')} alt="TV Installation Step 1" loading="lazy" />
												</div>
												<div className="btn-area">
													<button className='next' onClick={handlePackage}>Next</button>
												</div>
											</div>
										</div>
									</div>
									<div className="align-right">
										<div className="head">
											<h2>Deinstallation Package</h2>
										</div>
										<div className="col">
											<ul className="pkg-list">
												<li>
													<input type="radio" name="deinstallation" id="no-deinstallation" />
													<label htmlFor="no-deinstallation">No Deinstallation</label>
												</li>
												<li>
													<input type="radio" name="deinstallation" id="deinstallation" />
													<label htmlFor="deinstallation">Deinstallation &amp; Reinstall</label>
												</li>
												<li>
													<input type="radio" name="deinstallation" id="deinstallation-only" />
													<label htmlFor="deinstallation-only">
														<strong>Deinstallation Only</strong>
														<span>Hauling services are not currently being provided. Deinstalled TV will be left on the floor against a wall in the designated spot.</span>
													</label>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<div className={`tab-2 ${activeTab === 'tab-2' ? 'active' : 'hidden'}`}>
					<Container className="bounceIn">
						<Row>
							<Col sm={12}>
								<div className="head single">
									<button className="btn-back" onClick={backToParent}></button>
									<h2>RMS Custom TV Pro Installation Package</h2>
								</div>
								<div className="holder">
									<div className="align-left">
										<div className="frame">
											<div className="col">
												<h3>Up to 65" TV | Wall | Indoor</h3>
												<div className="form-area">
													<div class="checkbox-holder">
														<div class="check-box mb-3">
															<input type="checkbox" class="input-check" name="frame_active" id="samsungframetv" />
															<label for="samsungframetv">
																<strong>This is a Samsung Frame TV</strong>
																<span>Special team required</span>
															</label>
														</div>
													</div>
													<div className="form-row">
														<h4>Mounting Surface:</h4>
														<ul className="choose-tv list-inline">
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="mountain-surface" id="dry-wall2" />
																<label htmlFor="dry-wall2">Drywall</label>
															</li>
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="mountain-surface" id="wood-2" />
																<label htmlFor="wood-2">Wood</label>
															</li>
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="mountain-surface" id="brick-2" />
																<label htmlFor="brick-2">Brick</label>
															</li>
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="mountain-surface" id="stone-2" />
																<label htmlFor="stone-2">Stone</label>
															</li>
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="mountain-surface" id="cement-2" />
																<label htmlFor="cement-2">Cement</label>
															</li>
														</ul>
														<h4>Services:</h4>
														<ul className="choose-tv list-inline">
															<li className="list-inline-item">
																<input className="radio-hide" type="radio" name="choose_services" id="270" />
																<label htmlFor="270">TV Install Drywall | Non Fireplace | Sizes 42'-65' | $199.99</label>
															</li>
														</ul>
														<h3>External Videos Sources:</h3>
														<Row>
															<Col lg={6}>
																<ul className="audio-box list-inline">
																	<li className="list-inline-item">
																		<input type="radio" name="external_videos" id="external-videos-hdmi-2" />
																		<div className="box">
																			<input type="number" value="1" name="connected_htmi" class="number connected_htmi" />
																			<label htmlFor="external-videos-hdmi-2">Connected HDMI Inputs</label>
																		</div>
																	</li>
																</ul>
															</Col>
															<Col lg={6}>
																<ul className="audio-box list-inline">
																	<li className="list-inline-item">
																		<input type="radio" name="external_videos" id="external-videos-hdmi-no-2" />
																		<div className="box">
																			<label htmlFor="external-videos-hdmi-no-2"><strong>None</strong> <span>Used only for streaming</span></label>
																		</div>
																	</li>
																</ul>
															</Col>
														</Row>
													</div>
												</div>
											</div>
											<div className="col add">
												<h3>Available Mounts:</h3>
												<ul className="choose-tv list-inline">
													<li class="list-inline-item">
														<input class="radio-hide" type="radio" name="Mounts" id="full-motion" />
														<label for="full-motion">Full Motion</label>
													</li>
													<li class="list-inline-item">
														<input class="radio-hide" type="radio" name="Mounts" id="tilt" />
														<label for="tilt">Tilt</label>
													</li>
												</ul>
												<div className="sub-title">
													<span>Articulating</span>
												</div>
												<div className="product-detail">
													<div className="product-img">
														<img src={require('../../img/front/sanus-full-motion-mount-42-90.jpg')} alt="Sanus Full Motion Mount 42-90" loading="lazy" />
													</div>
													<div className="product-title">
														<strong className="title">Sanus Full Motion Mount 42-90"</strong>
													</div>
												</div>
												<ul class="audio-box list-inline">
													<li class="text-end">
														<input type="radio" name="amount_available" class="radio_product_selected is-checked" id="product_3935" />
														<label for="product_3935">Select</label>
													</li>
												</ul>
												<i className="ico-arrow"></i>
											</div>
										</div>
									</div>
									<div className="align-right">
										<div className="col">
											<i class="semi-circle-left"></i>
											<div class="checkbox-holder">
												<div class="check-box mb-3">
													<input type="checkbox" class="input-check" name="include_extra_services[]" id="power_add_on_lobor" />
													<label for="power_add_on_lobor">
														<strong>Include Power Outlet install</strong>
														<span>Required behind TV on desired location</span>
													</label>
												</div>
												<div class="check-box mb-3">
													<input type="checkbox" class="input-check" name="include_extra_services[]" id="incCabelconceal" />
													<label for="incCabelconceal">
														<strong>Include Cable Concealing</strong>
													</label>
												</div>
												<div class="check-box mb-3">
													<input type="checkbox" class="input-check" name="include_extra_services[]" id="soundbar_installation" />
													<label for="soundbar_installation">
														<strong>Include Soundbar Installation</strong>
													</label>
												</div>
											</div>
											<div className="btn-area">
												<a href="/" className="book-now">Book Now for $569.98!</a>
											</div>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</>
	)
}
export default TVProInstallationPackages;