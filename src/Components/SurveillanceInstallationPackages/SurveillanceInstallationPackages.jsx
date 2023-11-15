import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../Components/SurveillanceInstallationPackages/SurveillanceInstallationPackages.css';
const SurveillanceInstallationPackages = (Props) => {

	return (
		<>
			<div className="surveillance-installation" id="surveillance-installation">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="surveillance-wrap">
								<div className="holder">
									<div className="left-align">
										<div className="head">
											<h2>Outdoor Entertainment Installation Packages</h2>
										</div>
										<div className="holder">
											<div className="col3">
												<div className="radio-toggle">
													<span className="label">Resolution:</span>
													<div>
														<input type="radio" name="resolutions" value="2mp" id="2mp" msg="2 MP Turret IP Cameras" className="radio-hide" checked />
														<label for="2mp">2 MP</label>
														<input type="radio" name="resolutions" value="4mp" id="4mp" msg="4 MP Turret IP Cameras" className="radio-hide" />
														<label for="4mp">4 MP</label>
														<input type="radio" name="resolutions" value="8mp" id="8mp" msg="8 MP Turret IP Cameras" className="radio-hide" />
														<label for="8mp">8 MP</label>
													</div>
												</div>
												<strong className="title">IP CAMERAS</strong>
												<div className="spkr-img">
													<img src={require('../../img/front/ip-cameras.png')} alt="IP Cameras" loading="lazy" />
												</div>
												<div className="radio-holder">
													<div className="input-row">
														<input className="radio-hide" type="radio" name="choosecolor" id="black2" checked />
														<label htmlFor="black2">Black</label>
													</div>
													<div className="input-row">
														<input className="radio-hide" type="radio" name="choosecolor" id="white2" />
														<label htmlFor="white2">White</label>
													</div>
												</div>
												<div className="check-box-holder">
													<div className="check-box">
														<input type="checkbox" name="ipcameraselect" id="ipcameraselect" />
														<label htmlFor="ipcameraselect">Select</label>
													</div>
												</div>
												<div className="num-holder">
													<Row>
														<Col className="col-4">
															<input type="number" name="" class="form-control rock_satellite_speaker" value="4" />
														</Col>
														<Col className="col-8">
															<label htmlFor="">2 MP Turret IP Cameras</label>
														</Col>
													</Row>
												</div>
												<ul className="bullet-list blue">
													<li>1080p, fixed lens</li>
													<li>16GB micro SD included</li>
												</ul>
											</div>
											<div className="col3">
												<div className="radio-toggle">
													<span className="label">Channels | HDD:</span>
													<div>
														<input type="radio" name="channels" value="4-1tb" id="4-1tb" msg="1K NVR, 4 PoE Ports, 1 TB Hard Drive" className="radio-hide" />
														<label for="4-1tb">4 | 1 TB</label>
														<input type="radio" name="channels" value="8-2tb" id="8-2tb" msg="2K NVR, 8 PoE Ports, 2 TB Hard Drive" className="radio-hide" />
														<label for="8-2tb">8 | 2 MP</label>
														<input type="radio" name="channels" value="16-4tb" id="16-4tb" msg="4K NVR, 16 PoE Ports, 4 TB Hard Drive" className="radio-hide" checked />
														<label for="16-4tb">16 | MP</label>
													</div>
												</div>
												<strong className="title">NETWORK VIDEO RECORDERS (NVR)</strong>
												<div className="spkr-img">
													<img src={require('../../img/front/network-video-recorder.png')} alt="Network Video Recorders" loading="lazy" />
												</div>
												<div className="check-box-holder">
													<div className="check-box">
														<input type="checkbox" name="networkselect" id="networkselect" />
														<label htmlFor="networkselect">Select</label>
													</div>
												</div>
												<div className="num-holder">
													<Row>
														<Col className="col-4">
															<input type="number" name="" class="form-control nvr_input" value="4" />
														</Col>
														<Col className="col-8">
															<label htmlFor="">4K NVR, 16 PoE Ports, 4 TB Hard Drive</label>
														</Col>
													</Row>
												</div>
												<ul className="bullet-list blue">
													<li>Supports visualization of up to 25 cameras</li>
													<li>Ready for Control4 full integration</li>
												</ul>
											</div>
											<div className="col3">
												<div className="radio-toggle">
													<span className="label">Capacity:</span>
													<div>
														<input type="radio" name="capacity" value="2tb" id="2tb" msg="2TB Surveillance HDD" className="radio-hide" />
														<label for="2tb">2 TB</label>
														<input type="radio" name="capacity" value="4tb" id="4tb" msg="4TB Surveillance HDD" className="radio-hide" />
														<label for="4tb">4 TB</label>
														<input type="radio" name="capacity" value="6tb" id="6tb" msg="6TB Surveillance HDD" className="radio-hide" checked />
														<label for="6tb">6 TB</label>
													</div>
												</div>
												<strong className="title">ADD STORAGE</strong>
												<div className="spkr-img">
													<img src={require('../../img/front/add-storage.png')} alt="Add Storage" loading="lazy" />
												</div>
												<div className="check-box-holder">
													<div className="check-box">
														<input type="checkbox" name="storageselect" id="storageselect" />
														<label htmlFor="storageselect">Select</label>
													</div>
												</div>
												<div className="num-holder">
													<Row>
														<Col className="col-4">
															<input type="number" name="capacity_input" class="form-control capacity_input" value="4" />
														</Col>
														<Col className="col-8">
															<label htmlFor="capacity_input">4TB Surveillance HDD</label>
														</Col>
													</Row>
												</div>
												<ul className="bullet-list">
													<li>Proactive Management</li>
													<li>Enhanced Workloads</li>
												</ul>
												<i className="ico-arrow"></i>
											</div>
										</div>
									</div>
									<div className="right-align">
										<div className="head">
											<h2>Package Total</h2>
										</div>
										<div className="frame">
											<i className="semi-circle-left"></i>
											<ul className="bullet-list white">
												<li>0 Turrent IP Cameras 2 MP</li>
												<li>0 NVR 16 PoE Ports, 4 TB HDD</li>
												<li>Camera mounting and setup for 0 cameras</li>
												<li>0 NVR setup &amp; configuration</li>
											</ul>
											<div className="btn-area">
												<button className="total_price disabled">Book now for <br /> $ 0.00 </button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default SurveillanceInstallationPackages;