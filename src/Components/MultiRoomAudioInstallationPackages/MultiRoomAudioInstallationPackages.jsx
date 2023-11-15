import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import '../../Components/MultiRoomAudioInstallationPackages/MultiRoomAudioInstallationPackages.css';
const MultiRoomAudioInstallationPackages = (Props) => {

	return (
		<>
			<div className="multiaudio-pkg" id="multiaudio-pkg">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="step-1">
								<div className="main-title">
									<h2>Distributed Multi-Room Audio Package</h2>
								</div>
								<div className="holder">
									<div className="multi-frame">
										<div className="left-heading">
											<input type="text" name="room_name" placeholder="Enter Your Room Name Here" class="form-control" id="room_name_custom" />
										</div>
										<div className="col-holder">
											<div className="col">
												<Row>
													<Col lg={4}>
														<div className="img">
															<img src={require('../../img/front/speaker-ins-icon.png')} alt="speaker icon" className="img-fluid" loading="lazy" />
														</div>
													</Col>
													<Col lg={8} className="input-rows">
														<Row className="mb-md-4 mb-2">
															<Col xs={8}>
																<label htmlFor="existing_speakers">Existing speakers</label>
															</Col>
															<Col xs={4}>
																<input type="number" className="form-control" id='existing_speakers' value={0} min={0} step={2} />
															</Col>
														</Row>
														<Row className="mb-md-4 mb-2">
															<Col xs={8}>
																<label htmlFor="additional_speakers">Install additional speakers</label>
															</Col>
															<Col xs={4}>
																<input type="number" className="form-control" id='additional_speakers' value={0} min={0} step={2} />
															</Col>
														</Row>
														<Row className="mb-md-4 mb-2">
															<Col xs={8}>
																<label htmlFor="room_volume_control">Add In-Wall Room Volume Control</label>
															</Col>
															<Col xs={4}>
																<input type="checkbox" id='room_volume_control' />
															</Col>
														</Row>
													</Col>
												</Row>
												<div className="gray-bg">
													<Row>
														<Col lg={5}>
															<strong className="title">Wiring Scenario for New Speakers</strong>
														</Col>
														<Col lg={7}>
															<div className="radio-box">
																<Row>
																	<Col lg={6}>
																		<div className="radio-holder">
																			<input type="radio" name="wiringSpeakers" value="Open_Walls" id="open-walls" />
																			<label htmlFor="open-walls">Open Walls</label>
																		</div>
																	</Col>
																	<Col lg={6}>
																		<div className="radio-holder">
																			<input type="radio" name="wiringSpeakers" value="Pre_Wired" id="prewired" />
																			<label htmlFor="prewired">Pre-Wired</label>
																		</div>
																	</Col>
																	<Col lg={12}>
																		<div className="radio-holder">
																			<input type="radio" name="wiringSpeakers" value="No_Wires" id="closedwalls" />
																			<label htmlFor="closedwalls">Closed Walls, No Wires</label>
																		</div>
																	</Col>
																</Row>
															</div>
														</Col>
													</Row>
												</div>
											</div>
											<div className="col">
												<div className="speakercountbox">
													<div className="spkcount">
														<div className="room_speaker_show">0 Spk</div>
													</div>
													<button className="spkaddlink add_new_room">
														<span>Add Room</span>
														<FontAwesomeIcon icon={faPlus} />
													</button>
												</div>
												<div class="roompricecount">
													<span>Sub-Total:</span>
													<span class="room_total_price">$0.00</span>
													<span class="sub_rooms_total_price">$0.00</span>
												</div>
											</div>
										</div>
									</div>
									<div className="multi-frame">
										<div className="right-heading">
											<h3>Rooms:</h3>
										</div>
										<div className="box-right">
											<div className="txt">
												<p>Add all the zones in your house where you want stereo audio, with as many pairs of speakers as you wish. Include a physical volume control where desired.</p>
												<p>You will see the room installation cost updated in real-time.</p>
											</div>
											<p>Then, we will guide you through the most convenient options for <strong>Speakers</strong>, <strong>Amplifying</strong>, and <strong>Switching</strong> souces.</p>
										</div>
										<i className="semi-circle-left"></i>
									</div>
								</div>
							</div>
							<div className="step-2 d-none">
								<div className="main-title">
									<h2>RMS Custom Multi-Room Audio Package Builder</h2>
								</div>
								<div className="col2-holder">
									<div className="col2">
										<div className="title2">
											<h2><button className="btn-back">Rooms</button></h2>
										</div>
										<div className="frame">
											<ul class="roomslist roomslist_p"></ul>
										</div>
									</div>
									<div className="col2">
										<div className="title2">
											<h2>Required Equipment</h2>
										</div>
										<div className="frame">
											<div className="go-back">
												<button className="btn">Go back to complete my order with required equipment</button>
											</div>
											<div className="check-box-holder">
												<div className="check-box">
													<input type="checkbox" name="required_equipment_info" id="additional_speakers1" value="additional_speakers" />
													<label htmlFor="additional_speakers1">I have all the additional Speakers I want to complete the installation</label>
												</div>
												<div className="check-box">
													<input type="checkbox" name="required_equipment_info" id="amplifying_system" value="amplifying_system" />
													<label htmlFor="amplifying_system">I have my own Amplifying System, capable of driving all the Speakers I want installed</label>
												</div>
											</div>
										</div>
										<i class="ico-arrow grey"></i>
									</div>
									<div className="col2">
										<div className="title2">
											<h2>Package Total</h2>
										</div>
										<div className="frame">
											<ul class="mltbullets step_two_three_content_1"></ul>
											<ul class="mltbullets step_two_three_content_2"></ul>
											<div className="tvstepbtn text-center">
												<button className="enableAfterChecked W_s_amplifier"></button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="step-3 d-none">
								<div className="main-title">
									<h2>RMS Custom Multi-Room Audio Package Builder</h2>
								</div>
								<div className="col2-holder">
									<div className="col2">
										<div className="title2">
											<h2><button className="btn-back">Rooms</button></h2>
										</div>
										<div className="frame">
											<ul class="roomslist roomslist_p"></ul>
										</div>
									</div>
									<div className="col2">
										<div className="title2">
											<h2>Speakers:</h2>
										</div>
										<div className="frame">
											<div className="para-3">
												<p>8 ohm | Polypropylene cone | Pivotable Teteron Tweeters</p>
											</div>
											<div className="multi-row row">
												<Col xs={9}>
													<label htmlFor="in_ceiling_bezel_less_grille_speakers">6” In-Ceiling Bezel-Less Grille Speakers</label>
												</Col>
												<Col xs={3}>
													<input type="number" className="form-control" name="in_ceiling_bezel_less_grille_speakers" id="in_ceiling_bezel_less_grille_speakers"  value="0" />
												</Col>
											</div>
											<div className="speaker-item">
												<img src={require('../../img/front/speakers-1.jpg')} alt="speaker" className="img-fluid" loading="lazy" />
												<p className="speaker_required_message"></p>
											</div>
											<div className="check-box-holder position">
												<div className="check-box">
													<input type="checkbox" id="select_speakers" name="select_speakers" value="select_speakers" />
													<label htmlFor="select_speakers">Select</label>
												</div>
											</div>
										</div>
										<i class="ico-arrow white"></i>
									</div>
									<div className="col2">
										<div className="title2">
											<h2>Package Total</h2>
										</div>
										<div className="frame">
											<ul class="mltbullets step_two_three_content_1"></ul>
											<ul class="mltbullets step_two_three_content_2"></ul>
											<div class="tvstepbtn text-center end_to_speaker d-none"><button class="buy_speaker_next process_end_speaker">Book now <br /> for $000 </button></div>
											<div class="tvstepbtn text-center end_to_amplifyer d-none"><button class="buy_speaker_next">Next</button></div>
										</div>
									</div>
								</div>
							</div>
							<div className="step-4 d-none">
								<div className="main-title">
									<h2>RMS Custom Multi-Room Audio Package Builder</h2>
								</div>
								<div className="col2-holder">
									<div className="col2">
										<div className="title2">
											<h2><button className="btn-back">Rooms</button></h2>
										</div>
										<div className="frame">
											<ul class="roomslist roomslist_p"></ul>
										</div>
									</div>
									<div className="col2">
										<div className="title2">
											<h2>Amplification System</h2>
										</div>
										<div className="frame">
											<div className="para-3">
												<p>One Amp per Room | Wireless Control</p>
											</div>
											<div className="multi-row row">
												<Col xs={9}>
													<label htmlFor="single_zone_amp">Single-Zone Amp</label>
												</Col>
												<Col xs={3}>
													<input type="number" className="form-control" name="single_zone_amp" id="single_zone_amp" value="0" />
												</Col>
											</div>
											<div className="speaker-item">
												<img src={require('../../img/front/amplification-system.jpg')} alt="amplification" className="img-fluid" loading="lazy" />
												<p className="speaker_required_message"></p>
											</div>
											<p class="text-end primarycolor amp_price_count">Sub Total <br /> $8,876</p>
										</div>
										<i class="ico-arrow white"></i>
									</div>
									<div className="col2">
										<div className="title2">
											<h2>Package Total</h2>
										</div>
										<div className="frame">
											<ul class="mltbullets zonses_content"></ul>
											<div class="check-box-holder d-none">
												<div class="check-box mb-3">
													<input type="checkbox" name="multi_source" id="add_multi_speaker" value="add_multi_speaker" class="check-box multi_source_system" />
													<label for="add_multi_speaker"> Add Multi-Source Distribution System (Audio Matrix)</label>
												</div>
											</div>
											<div class="tvstepbtn text-center mt-4">
												<button class="multi_source_book">Book Now <br /> for $XXX</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="step-5 d-none">
								<div className="main-title">
									<h2>RMS Custom Multi-Room Audio Package Builder</h2>
								</div>
								<div className="col2-holder">
									<div className="col2">
										<div className="title2">
											<h2><button className="btn-back">Rooms</button></h2>
										</div>
										<div className="frame">
											<ul class="roomslist roomslist_p"></ul>
										</div>
									</div>
									<div className="col2">
										<div className="title2">
											<h2>Distribution System</h2>
										</div>
										<div className="frame">
											<div className="para-3">
												<p>Any Source to Any Room | Automation System required for Wireless Control</p>
											</div>
											<div className="multi-row row">
												<Col xs={9}>
													<label htmlFor="16_source">16-Source, 16-Zone Audio Matrix</label>
												</Col>
												<Col xs={3}>
													<input type="number" className="form-control" name="16_source" id="16_source"  value="0" />
												</Col>
											</div>
											<div className="speaker-item">
												<img src={require('../../img/front/amplifier-2.jpg')} alt="amplifier" className="img-fluid" loading="lazy" />
												<p className="speaker_required_message"></p>
											</div>
											<div className="check-box-holder position">
												<div className="check-box">
													<input type="checkbox" id="16_zones_select_speakers_check" name="16_zones_select_speakers_check" value="16_zones_select_speakers_check" />
													<label htmlFor="16_zones_select_speakers_check">Select</label>
												</div>
											</div>
										</div>
										<i class="ico-arrow white"></i>
									</div>
									<div className="col2">
										<div className="title2">
											<h2>Package Total</h2>
										</div>
										<div className="frame">
											<ul class="mltbullets zonses_content"></ul>
											<div class="check-box-holder d-none">
												<div class="check-box mb-3">
													<input type="checkbox" name="multi_source" id="add_multi_speaker" value="add_multi_speaker" class="check-box multi_source_system" />
													<label for="add_multi_speaker"> Add Multi-Source Distribution System (Audio Matrix)</label>
												</div>
											</div>
											<div class="tvstepbtn text-center mt-4">
												<button class="multi_source_book">Book Now <br /> for $XXX</button>
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
export default MultiRoomAudioInstallationPackages;