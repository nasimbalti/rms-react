import '../MainHeading/MainHeading.css';

import HeadingLine from '../../img/heading_line.png';

const MainHeading = (Props) => {
	return(
		<>
			<div className="heading">
				<h2>{Props.title}</h2>
				<img src={HeadingLine} alt="Heading Line" width="130" height="24" loading="lazy" />
			</div>
		</>
	)
}
export default MainHeading;