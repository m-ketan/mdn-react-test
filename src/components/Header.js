import React, { Component } from 'react';

class Header extends Component {
	render() {
		const rStyle = {
			margin: 0
		};
		return (
				<div className="row" style={rStyle}>
	        <div className="top-bar">
	            <ul className="top-nav">
	                <li>
	                	<img src="movingdneedle-logo2x.png" alt="mdnlogo" id="mdnlogo" />
	                </li>
	                <li>
	                	<input type="text" name="search" placeholder="Search for Accounts, Resources, SBUs" id="search-box" />
	                	<img src="assets-png/ic-search-black-24-px.png" id="search-img" />
	                </li>
	                <li>
	                	<img src="assets-png/ic-notifications-white-24-px.png" id="img-notif" />
	                	<img src="assets-png/oval-3.png" id="img-oval" />
	                	<img src="assets-png/oval-2.png" id="img-user" />
	                </li>
	            </ul>
	        </div>
        </div>
			);
	}
}

export default Header;