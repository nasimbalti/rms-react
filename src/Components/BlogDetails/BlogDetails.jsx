import React from 'react';
import { useParams } from 'react-router-dom';

import FrontLayout from '../../Layout/front';
import BreadCrumbs from '../../Components/Breadcrumbs/Breadcrumbs';

import './BlogDetails.css';
import { Container, Row, Col } from 'react-bootstrap';

import BlogData from '../../Data/BlogData';
import BlogCategory from '../BlogCategory/BlogCategory';

function BlogDetails (props) {

	const { title } = useParams();
	// Find the blog post with the matching title
	const selectedPost = BlogData.find(post => post.title === title);
	if (!selectedPost) {
	  // Handle the case when the post is not found
		return <div>Post not found</div>;
	}

	const currentCategory = selectedPost.category; // Set the current category

	// Function to extract unique categories from blogPosts
	const getUniqueCategories = () => {
		const categories = new Set();
		BlogData.forEach(post => {
			categories.add(post.category);
		});
		return Array.from(categories);
	};

	const categories = getUniqueCategories(); // Set the categories variable


	const getContent=()=>{
		return (
			<>
				<BreadCrumbs title="Blog Details" />
				<div className="blog-details">
					<Container className="py-sm-3 py-md-5">
						<Row>
							<Col lg={8}>
								<div className="img">
									<img src={selectedPost.imageUrl} alt={selectedPost.title} className="img-fluid" loading="lazy" />
								</div>
								<time dateTime={selectedPost.date}>{selectedPost.date}</time>
								<h2>{selectedPost.title}</h2>
								{selectedPost.description.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
								{selectedPost.content.map((section, index) => (
								<div key={index}>
									<h3>{section.heading}</h3>
									{Array.isArray(section.text) ? (
									// Handle paragraphs as arrays
									section.text.map((paragraph, i) => <p key={i}>{paragraph}</p>)
								) : (
								// Handle single paragraph as string
								<p>{section.text}</p>
								)}
								</div>
								))}
							</Col>
							<Col lg={4}>
								<BlogCategory currentCategory={currentCategory} categories={categories} />
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
};
export default BlogDetails;