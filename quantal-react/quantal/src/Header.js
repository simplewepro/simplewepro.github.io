import React, { Component } from 'react';

import './Header.css';

function scrollToAbout() {
	var height = window.height();

	(document.html, document.body).animate({ scrollTop: height }, 600);
};

class Header extends Component {
	render() {
		return (
			<nav id="header">
				<div id="wrapper" className="wrapper">
					<div className="logo">
						Quantal
					</div>
					<ul className="menu">
						<li><a onClick="scrollToAbout()">about</a></li>
						<li><a>works</a></li>
						<li><a>contacts</a></li>
					</ul>
				</div>
				<div className="wrapper white">
					<div className="logo">
						Quantal
					</div>
					<ul className="menu">
						<li id="about_link"><a onClick="scrollToAbout()">about</a></li>
						<li id="work_link"><a>works</a></li>
						<li id="contact_link"><a>contacts</a></li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;