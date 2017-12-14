import React, { Component } from 'react';

import './FirstSection.css';

class FirstSection extends Component {
	render() {
		return (
			<section id="first_block">
			
			<div class="sign_scroll">
				scroll
			</div>

			<section id="main_page">
				<div class="main_logo">
					<embed id="logo_svg" type="image/svg+xml" src="img/quantal_favicon.svg" width="100%" height="100%">
						
					</embed>
				</div>
				<div class="main_banner">
					<div class="first_line">hello</div>
					<div class="second_line">we are quantal</div>
					<div class="third_line">app developers team</div>
				</div>
				<div class="social">
					<ul class="social_links">
						<li><a href="#" class="fb">facebook</a></li>
						<li><a href="#" class="inst">instagram</a></li>
						<li><a href="#" class="mail">hello@quantal.com</a></li>
					</ul>
				</div>
			</section> <!-- endof main_page -->

			<section id="about">
				<div class="about_us_shadow">
					About
				</div>
				<div class="about_us">
					About us
				</div>

				<div class="scroll_line">
				</div>
				<div class="scroll_line_vertical">
					<div class="sign_scroll_vert">
						s<br>c<br>r<br>o<br>l<br>l
					</div>
				</div>

				<!-- about_cards -->
				<div class="about_cards left_block">
					<div class="about_card">
						<h3>Agile Methodology</h3>
						<div class="about_card_text">
							Development is adapted to client needs <br>due to modern approaches in project <br>management.
						</div>
					</div>

					<div class="about_card">
						<h3>Continuous Integration</h3>
						<div class="about_card_text">
							Client can always check current solution status due to <br>automated system which creates new release after each change <br>submitted by developers.
						</div>
					</div>

					<div class="about_card">
						<h3>Bleeding-Edge Technologies</h3>
						<div class="about_card_text">
							To differentiate from other solutions our products are <br>based on the newest recommended technologies offered <br>by Google and Apple.
						</div>
					</div>
				</div>
				<div class="about_cards right_block">
					<div class="about_card">
						<h3>Professional team</h3>
						<div class="about_card_text">
							Our team uses its expertise in mobile apps to provide <br>our clients with topmost service.
						</div>
					</div>

					<div class="about_card">
						<h3>Quality Assurance</h3>
						<div class="about_card_text">
							Our solutions are verified using both manual and <br>automatic testing before sending end result to <br>clients.
						</div>
					</div>

					<div class="about_card">
						<h3>Extended Support</h3>
						<div class="about_card_text">
							To ensure that our clients meet their business goals <br>we support delivered products during market entry <br>period.
						</div>
					</div>
				</div>
				<!-- endof about_cards -->
			</section> <!-- endof about -->
			
			<section id="about_position">
				<!-- Crutch  -->
			</section>
		);
	}
}

export default FirstSection;