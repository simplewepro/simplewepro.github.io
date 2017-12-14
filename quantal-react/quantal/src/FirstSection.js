import React, { Component } from 'react';

import './FirstSection.css';

class FirstSection extends Component {
	render() {
		return (
			<section id="first_block">
				
				<div className="sign_scroll">
					scroll
				</div>

				<section id="main_page">
					<div className="main_logo">
						
					</div>
					<div className="main_banner">
						<div className="first_line">hello</div>
						<div className="second_line">we are quantal</div>
						<div className="third_line">app developers team</div>
					</div>
					<div className="social">
						<ul className="social_links">
							<li><a href="#" className="fb">facebook</a></li>
							<li><a href="#" className="inst">instagram</a></li>
							<li><a href="#" className="mail">hello@quantal.com</a></li>
						</ul>
					</div>
				</section>

				<section id="about">
					<div className="about_us_shadow">
						About
					</div>
					<div className="about_us">
						About us
					</div>

					<div className="scroll_line">
					</div>
					<div className="scroll_line_vertical">
						<div className="sign_scroll_vert">
							s<br/>c<br/>r<br/>o<br/>l<br/>l
						</div>
					</div>

					<div className="about_cards left_block">
						<div className="about_card">
							<h3>Agile Methodology</h3>
							<div className="about_card_text">
								Development is adapted to client needs <br/>due to modern approaches in project <br/>management.
							</div>
						</div>

						<div className="about_card">
							<h3>Continuous Integration</h3>
							<div className="about_card_text">
								Client can always check current solution status due to <br/>automated system which creates new release after each change <br/>submitted by developers.
							</div>
						</div>

						<div className="about_card">
							<h3>Bleeding-Edge Technologies</h3>
							<div className="about_card_text">
								To differentiate from other solutions our products are <br/>based on the newest recommended technologies offered <br/>by Google and Apple.
							</div>
						</div>
					</div>
					<div className="about_cards right_block">
						<div className="about_card">
							<h3>Professional team</h3>
							<div className="about_card_text">
								Our team uses its expertise in mobile apps to provide <br/>our clients with topmost service.
							</div>
						</div>

						<div className="about_card">
							<h3>Quality Assurance</h3>
							<div className="about_card_text">
								Our solutions are verified using both manual and <br/>automatic testing before sending end result to <br/>clients.
							</div>
						</div>

						<div className="about_card">
							<h3>Extended Support</h3>
							<div className="about_card_text">
								To ensure that our clients meet their business goals <br/>we support delivered products during market entry <br/>period.
							</div>
						</div>
					</div>
				</section>
				
				<section id="about_position">

				</section>
			</section>
		);
	}
}

export default FirstSection;