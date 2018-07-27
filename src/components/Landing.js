import React from 'react';
import './Landing.css';


const Landing = () => (
	<section className="landing">
		<div className="image-wrapper">
			<img src= "https://i2.wp.com/www.audioschurke.de/wp-content/uploads/2018/06/kopfh%C3%B6rer_header.jpg?fit=1920%2C1279&ssl=1" alt="A women wearing headphones" className='image-headphones' />
		 		<h1 className="hero-title">Turn the music up!</h1>
		</div>
		<section className="selling-points">
			<div className="container-points">
			<div className="point">
				<span className="icon ion-md-musical-notes"></span>
				<h2 className="point-title">Choose your music</h2>
				<p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
			</div>
			<div className="point">
				<span className="icon ion-md-wifi"></span>
				<h2 className="point-title">Unlimited, streaming, ad-free</h2>
				<p className="point-description">No arbitrary limits. No distractions</p>
			</div>
			<div className="point">
				<span className="icon ion-md-phone-portrait"></span>
				<h2 className="point-title">Mobile enabled</h2>
				<p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
			</div>
			</div>
		</section>	
	</section>
);

export default Landing; 

