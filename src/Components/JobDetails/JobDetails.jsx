import React from "react";
import { useParams, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';

import FrontLayout from '../../Layout/front';
import BreadCrumbs from '../../Components/Breadcrumbs/Breadcrumbs';

import '../JobDetails/JobDetails.css';
import { Container, Row, Col } from 'react-bootstrap';

import JobData from '../../Data/JobData.js';

function JobDetails() {
	const { title } = useParams();

	// Find the job object with the matching title
	const job = JobData.find(job => job.title === decodeURIComponent(title));

	if (!job) {
		return <div>Job not found</div>;
	}

	const renderList = (title, items) => {
		if (Array.isArray(items) && items.length > 0) {
			return (
			<div>
				<strong className="title">{title}: </strong>
				<ul>
					{items.map((item, index) => (
						<li key={index}>
							<span>{item.icon && <FontAwesomeIcon icon={item.icon} />} {item.text}</span>
						</li>
					))}
				</ul>
			</div>
			);
		}
		return null;
	};

	const getContent=()=>{

	return(
		<>
			<BreadCrumbs title="Careers"/>
			<div className="job-details">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="holder">
								<h2>{job.title}</h2>
								<a href="/" className="interest">I'm interested</a>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={8}>
							{job.salary && <p>Salary: {job.salary}</p>}
							<p>{job.description}</p>
							{renderList("Duties", job.duties)}
							{renderList("Requirements", job.requirements)}
							{renderList("Skills and abilities", job.skills)}
							{renderList("Education and Experience", job.education)}
							{renderList("Qualifications", job.qualification)}
							{renderList("Preferred Qualifications", job.preQualification)}
							{renderList("Experience", job.experience)}
							{renderList("License/Certification", job.license)}
							{job.opportunity && <p>{job.opportunity}</p>}
							{job.infoDetail && <p>{job.infoDetail}</p>}
							{job.infoText && <p>{job.infoText}</p>}
							{job.jobType && <p><strong className="title">Job Type: Full-time: </strong>{job.jobType}</p>}
							{job.schedule && <p><strong className="title">Schedule: </strong>{job.schedule}</p>}
							{job.location && <p><strong className="title">Work Location: </strong>{job.location}</p>}
							{job.working && <p><strong className="title">Working Conditions: </strong>{job.working}</p>}
							{job.physical && <p><strong className="title">Physical Requirements: </strong>{job.physical}</p>}
						</Col>
						<Col lg={4}>
							<div className="box">
								<h4>Job Overview</h4>
							</div>
							<div className="box">
								<h4>Share</h4>
								<ul className="socials">
									<li><a href="/" className="facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
									<li><a href="/" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
									<li><a href="/" className="google"><FontAwesomeIcon icon={faGoogle} /></a></li>
									<li><a href="/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
									<li><a href="/" className="pinterest"><FontAwesomeIcon icon={faPinterest} /></a></li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}

export default JobDetails;