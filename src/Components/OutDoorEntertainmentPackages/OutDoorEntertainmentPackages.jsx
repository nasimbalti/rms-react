import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../Components/OutDoorEntertainmentPackages/OutDoorEntertainmentPackages.css';
const OutDoorEntertainmentPackages = (Props) => {

	return (
		<>
			<div className="outdoor-entertainment" id="outdoor-entertainment">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="outdoor-wrap">
								<div className="head">
									<h2>Outdoor Entertainment Installation Packages</h2>
								</div>
								<div className="holder">
									<div className="col">
										<div className="radio-holder">
											<div className="input-row">
												<input className="radio-hide" type="radio" name="stonespeaker" id="granite2" />
												<label htmlFor="granite2">Granite</label>
											</div>
											<div className="input-row">
												<input className="radio-hide" type="radio" name="stonespeaker" id="sandstone2" />
												<label htmlFor="sandstone2">Sandstone</label>
											</div>
										</div>
										<div className="spkr-img">
											<img src={require('../../img/front/granite-speaker.jpg')} alt="stones" loading="lazy" />
										</div>
										<div className="num-holder">
											<Row>
												<Col xs={4}>
													<input type="number" value={4} name="rock_satellite_speaker" className="form-control rock_satellite_speaker" id="rock_satellite_speaker" />
												</Col>
												<Col xs={8}>
													<label htmlFor="rock_satellite_speaker">Rock Series 6 Satellite Speakers</label>
												</Col>
											</Row>
										</div>
										<div className="check-box-holder">
											<div className="check-box">
												<input type="checkbox" name="rockchooseseries[]" id="rockseries" value="rock_serie_subwoofer" />
												<label htmlFor="rockseries">1 Rock Series 8" Subwoofer</label>
											</div>
											<div className="check-box">
												<input type="checkbox" name="rockchooseseries[]" id="amplifierwatts" value="rock_serie_subwoofer" />
												<label htmlFor="amplifierwatts"> 1 Amplifier 250 Watts, with embeded Wireless Streamer</label>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="spkr-img">
											<img src={require('../../img/front/outdoor-landscape.jpg')} alt="stones" loading="lazy" />
										</div>
										<div className="num-holder">
											<Row>
												<Col xs={4}>
													<input type="number" value={8} name="land_satellite_speaker" className="form-control land_satellite_speaker" id="land_satellite_speaker" />
												</Col>
												<Col xs={8}>
													<label htmlFor="land_satellite_speaker">Landscape 4" Satellite Speakers</label>
												</Col>
											</Row>
										</div>
										<div className="check-box-holder">
											<div className="check-box">
												<input type="checkbox" name="landchooseseries[]" id="1landscape" value="land_serie_subwoofer" />
												<label htmlFor="1landscape">1 Landscape 8" Subwoofer</label>
											</div>
											<div className="check-box">
												<input type="checkbox" name="landchooseseries[]" id="1amplifier1000" value="land_serie_amplifier" />
												<label htmlFor="1amplifier1000">1 Amplifier 1000 Watts</label>
											</div>
											<div className="check-box">
												<input type="checkbox" name="landchooseseries[]" id="1wireless" value="land_serie_streamer" />
												<label htmlFor="1wireless">1 Wireless Streamer</label>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="radio-holder">
											<div className="input-row">
												<input className="radio-hide" type="radio" name="choosecolor" id="black" value="black" />
												<label htmlFor="black">Black</label>
											</div>
											<div className="input-row">
												<input className="radio-hide" type="radio" name="choosecolor" id="white" value="white" />
												<label htmlFor="white">White</label>
											</div>
										</div>
										<div className="spkr-img">
											<img src={require('../../img/front/black-surface-mount-speakers.jpg')} alt="Mount Speakers" loading="lazy" />
										</div>
										<div className="num-holder">
											<Row>
												<Col xs={4}>
													<input type="number" value={4} name="surface_mount_speaker" className="form-control surface_mount_speaker" id="surface_mount_speaker" />
												</Col>
												<Col xs={8}>
													<label htmlFor="surface_mount_speaker">Surface Mount 6" Speakers</label>
												</Col>
											</Row>
										</div>
										<div className="check-box-holder">
											<div className="check-box">
												<input type="checkbox" name="surface_amplifier" id="1amp250watts" value="surface_amplifier" />
												<label htmlFor="1amp250watts">1 Amplifier 250 Watts, with embeded Wireless Streamer</label>
											</div>
										</div>
										<i className="ico-arrow"></i>
									</div>
									<div className="col">
										<i className="semi-circle-left"></i>
										<div className="box">
											<h3>Installation:</h3>
											<ul className="bullet-list">
												<li>Speakers Installation</li>
												<li>Wiring Concealing / Burial</li>
												<li>Amplifier Installation and Setup</li>
												<li>Wireless Media Streaming App Setup</li>
											</ul>
											<div className="btn-area">
												<button className="total_price">Book Now for <br /> $ 15,947.41</button>
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
export default OutDoorEntertainmentPackages;