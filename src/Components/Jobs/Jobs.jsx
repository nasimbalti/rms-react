import React from "react";
import { Link } from "react-router-dom";

import '../Jobs/Jobs.css';
import { Container, Row, Col } from 'react-bootstrap';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import JobData from '../../Data/JobData.js';

// Helper function to truncate the description to a specified word count
const truncateDescription = (description, wordCount) => {
	const words = description.split(' ');
	if (words.length > wordCount) {
		const truncatedText = words.slice(0, wordCount).join(' ');
		return `${truncatedText}...`;
	}
	return description;
};

const Jobs = () => {
	return(
		<>
			<div className="career-area">
					<Container>
						<Row>
							<Col sm={12}>
								<ul className="job-listing">
									{JobData.map((job, index) => (
										<li key={index}>
											<h3><Link to={`/careers/${encodeURIComponent(job.title)}`}>{job.title}</Link></h3>
											{job.salary && <span className="salary">{job.salary}</span>}
											<p>{truncateDescription(job.description, 200)}</p>
											{job.info.length > 0 && (
												<ul className="list-info">
													{job.info.map((item, itemIndex) => (
													<li key={itemIndex}>
														<FontAwesomeIcon icon={item.icon} /> <span>{item.text}</span>
													</li>
													))}
												</ul>
											)}
											<div className="btn-area">
												<a href="/" className="apply"> <FontAwesomeIcon icon={faFileLines} /> <span>Apply Now</span></a>
												<Link to={`/careers/${encodeURIComponent(job.title)}`} className="view"> <FontAwesomeIcon icon={faPaperPlane} /> <span>View Details</span></Link>
											</div>
										</li>
									))}
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
		</>
	)
}

export default Jobs;