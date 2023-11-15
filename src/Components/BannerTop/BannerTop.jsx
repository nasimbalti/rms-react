import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import '../../Components/BannerTop/BannerTop.css';
import { Container, Row, Col } from 'react-bootstrap';

const BannerTop = (Props) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImageLoaded(true);
		};
		img.src = Props.imageUrl;
	}, [Props.imageUrl]);

	return (
		<>
			<section className="banner-area">
				<Container fluid>
					<Row>
						<Col sm={12} className="px-0">
							<div style={{ display: imageLoaded ? 'none' : 'inline' }}>
								<Blurhash
									hash = "LMH3UL{t1A$b.6x0x[ROQ-XSxafS"
									width = {1583}
									height = {495}
									resolutionX = {32}
									resolutionY = {32}
									punch = {1}
								/>
							</div>
							<img
								src={Props.imageUrl}
								style={{ display: !imageLoaded ? 'none' : 'inline' }}
								alt={Props.altText}
								width={1583}
								height={495}
								/>
							{Props.captions && (
							<div className="holder">
								<Container>
								<Row>
									<Col sm={12}>{Props.captions}</Col>
								</Row>
								</Container>
							</div>
							)}
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default BannerTop;
