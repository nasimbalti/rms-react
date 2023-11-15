import '../../Components/UltraBrightProjectors/UltraBrightProjectors.css';
import { Container, Row, Col } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

const UltraBrightProjectors = () => {
	return (
		<>
			<article className="article">
				<Container className="pt-5">
					<Row>
						<Col sm={12}>
							<h3>Ultra-Bright Projectors</h3>
						</Col>
					</Row>
					<Row className="flex-md-row-reverse">
						<Col lg={4}>
							<div className="img">
								<img src={require('../../img/front/dual-lamp-new.jpg')} alt="Dual Lamp" loading="lazy" />
							</div>
						</Col>
						<Col lg={8}>
							<p>Dual-lamp technology provides Intelligent switching of lamps, which can double the operation time between lamp changes for those hard-to-reach installations. Also, should one lamp fail, dual lamp technology enables uninterrupted services with fall-over redundancy.</p>
							<p>It provides nearly double the brightness of single lamp projectors, can produce exceptional brightness for large visual displays, and can compensate for higher ambient light conditions within venues.</p>
						</Col>
					</Row>
				</Container>
			</article>
			<article className="article">
				<Container>
					<Row>
						<Col lg={6}>
							<div className="img">
								<img src={require('../../img/front/ultra-bright-projectors.jpg')} alt="Ultra Bright Projectors" loading="lazy" />
							</div>
						</Col>
						<Col lg={6}>
							<p>With our expertise in control systems, we can automate the entire multi-media ecosystem from different sources switching to the creation of a streamlined collaboration environment that enables wireless presentations in a user-friendly way.</p>
							<p>Multiple presenters can simultaneously connect and display their content, making it perfect for sermons, Bible studies, and group discussions. With features like cross-platform compatibility, secure streaming, and a built-in whiteboard, our integrated solutions make it easy to share ideas and connect with your congregation on different scales:</p>
							<ul className="list">
								<li><FontAwesomeIcon icon={faCircleRight} /> Easily reach a seating capacity of 2,500 with clear and even sound throughout the entire sanctuary.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /> Use a digital signage system to display announcements, sermon series themes, and scripture readings.</li>
								<li><FontAwesomeIcon icon={faCircleRight} /> Empower the church staff with the capability to easily create and update content from a central location, eliminating the need for manual updates every week.</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</article>
		</>
	)
}
export default UltraBrightProjectors;