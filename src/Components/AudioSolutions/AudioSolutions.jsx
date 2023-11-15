import 'react-slick/dist/react-slick.min';
import Slider from "react-slick";

import '../../Components/AudioSolutions/AudioSolutions.css';
import { Container, Row, Col } from 'react-bootstrap';

const AudioSolutions = () => {
	// Slick Settings
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 3000,
		autoplay: true,
		draggable: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<>
			<article className="article-holder">
				<Container>
					<Row>
						<Col sm={12}>
							<h3>Audio Solutions</h3>
						</Col>
					</Row>
					<Row>
						<Col lg={6}>
							<div className="txt">
								<p>We offer a range of audio solutions to provide clear and natural sound to your congregation. Our professional-grade speakers, amplifiers, and mixers can deliver high-quality sound throughout your worship space. Our experienced team can design and install systems that ensure even sound distribution and eliminate feedback, distortion, or other issues that may disrupt your worship experience. We can also integrate your audio with video and lighting systems to create a seamless experience.</p>
							</div>
							<Slider {...settings}>
								<div>
									<img src={require('../../img/front/client-logos/akg.png')} alt="AKG" />
								</div>
								<div>
									<img src={require('../../img/front/client-logos/amx.png')} alt="AMX" />
								</div>
								<div>
									<img src={require('../../img/front/client-logos/bss.png')} alt="BSS" />
								</div>
								<div>
									<img src={require('../../img/front/client-logos/crown.png')} alt="CROWN" />
								</div>
								<div>
									<img src={require('../../img/front/client-logos/dbx.png')} alt="DBX" />
								</div>
								<div>
									<img src={require('../../img/front/client-logos/jbl.png')} alt="JBL" />
								</div>
								<div>
									<img src={require('../../img/front/client-logos/lexicon.png')} alt="Lexicon" />
								</div>
								<div>
									<img src={require('../../img/front/client-logos/martin.png')} alt="Martin" />
								</div>
								<div>
									<img src={require('../../img/front/client-logos/soundcraft.png')} alt="sound craft" />
								</div>
								<div>
									<img src={require('../../img/front/client-logos/studer.png')} alt="studer" />
								</div>
							</Slider>
						</Col>
						<Col lg={6}>
							<div className="img">
								<img src={require('../../img/front/qscMixer.jpg')} alt="QSC Mixer" loading="lazy" />
							</div>
							<div className="box">
								<p>Multiple devices can be connected for easy access to additional mixer screens or as individual monitor controllers.</p>
							</div>
						</Col>
					</Row>
				</Container>
			</article>
		</>
	)
}
export default AudioSolutions;