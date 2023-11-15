import React from 'react';
import { Link } from 'react-router-dom';

import './BlogListing.css';
import { Container, Row, Col } from 'react-bootstrap';
import BlogData from '../../Data/BlogData';
import BlogCategory from '../BlogCategory/BlogCategory';

const BlogListing = () => {

	return(
		<>
			<div className="blog-listing">
				<Container>
					<Row>
						<Col lg={8}>
							{BlogData.map((blogPost) => (
								<div className="post" key={blogPost.id}>
									<Row>
										<Col md={5}>
											<div className="img">
												<img src={blogPost.imageUrl} alt={blogPost.title} className="img-fluid" loading="lazy" />
											</div>
										</Col>
										<Col md={7}>
											<div className="txt">
												<time dateTime={blogPost.date}>{blogPost.date}</time>
												<h2>
													<Link to={`/blog/${encodeURIComponent(blogPost.title)}`}>
														{blogPost.title}
													</Link>
												</h2>
												{blogPost.description.map((paragraph, index) => (
												<p key={index}>{paragraph}</p>
												))}
												<div className="btn">
													<Link to={`/blog/${encodeURIComponent(blogPost.title)}`}>Read More</Link>
												</div>
											</div>
										</Col>
									</Row>
								</div>
							))}
						</Col>
						<Col lg={4}>
							<BlogCategory />
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default BlogListing;