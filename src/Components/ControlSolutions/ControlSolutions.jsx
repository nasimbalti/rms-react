import 'react-slick/dist/react-slick.min';
import Slider from "react-slick";

import '../../Components/ControlSolutions/ControlSolutions.css';
import { Container, Row, Col } from 'react-bootstrap';

const ControlSolutions = () => {
	// Slick Settings
	const settings = {
		fade: true,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 400,
		autoplaySpeed: 5000,
		useTransform: true,
		autoplay: true,
		draggable: true,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<>
			<section className="control-solutions">
				<Container>
					<Row>
						<Col sm={12}>
							<h3>Control Solutions</h3>
							<p>Our control systems can help you manage all your audio, video, and lighting systems from a central interface. We work with Control4, a leading automation and control solutions provider, to create a fully integrated and customized system that can streamline your operations and save you time and energy. With Control4, you can control your entire worship system using a smartphone, tablet, or remote control, even from a remote location.</p>
							<Slider {...settings}>
								<div>
									<img src={require('../../img/front/exterior.jpg')} alt="exterior" />
								</div>
								<div>
									<img src={require('../../img/front/classroom.jpg')} alt="classroom" />
								</div>
								<div>
									<img src={require('../../img/front/lobby.jpg')} alt="lobby" />
								</div>
								<div>
									<img src={require('../../img/front/control.jpg')} alt="control" />
								</div>
								<div>
									<img src={require('../../img/front/auditorium.jpg')} alt="auditorium" />
								</div>
							</Slider>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}
export default ControlSolutions;