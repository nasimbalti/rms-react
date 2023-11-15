import React from 'react';
import { Link } from 'react-router-dom';

import './BlogCategory.css';
import BlogData from '../../Data/BlogData';

const BlogCategory = ({ currentCategory }) => {
	// Extract unique category names from blogPosts
	const categories = [...new Set(BlogData.map(post => post.category))];

	return(
		<>
			<div className="categories-widget">
				<h4>Categories</h4>
				<ul className="cat">
					{categories.map((category, index) => {
					const relatedPost = BlogData.find(post => post.category === category);
					return (
						<li key={index}>
						<Link to={`/blog/${encodeURIComponent(relatedPost.title)}`} className={category === currentCategory ? 'active' : ''}>
							{category}
						</Link>
						</li>
					);
					})}
				</ul>
			</div>
		</>
	)
}
export default BlogCategory;