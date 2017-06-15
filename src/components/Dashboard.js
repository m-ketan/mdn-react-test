import React, { Component } from 'react';

class Dashboard extends Component {
	render() {
        const pStyle = {
            float: 'left',
            paddingTop: '7px'
        };
		return (
		  <div>
                <div className="left-nav">
                    <ul>
                        <li>
                            <a href="#"><img src="assets-png/ic-home-black-24-px.png" /><br />Home</a>
                        </li>
                        <li>
                            <a href="#"><img src="assets-png/ic-recent-actors-black-24-px.png" /><br />SBUs</a>
                        </li>
                        <li>
                            <a href="#"><img src="assets-png/ic-account-balance-black-24-px-1.png" /><br />Accounts</a>
                        </li>
                        <li>
                            <a href="#"><img src="assets-png/ic-local-library-black-24-px.png" /><br />Contacts</a>
                        </li>
                        <li>
                            <a href="#"><img src="assets-png/ic-supervisor-account-black-24-px.png" /><br />Resources</a>
                        </li>
                    </ul>
                    </div>
                <div className="main-dash">
                    <div className="dash-content">
                        <p>All Accounts <span>></span> <strong>Create New Account</strong></p>
                        <hr />
                        <br />
                        <h4>Create New Account</h4><h5>STEP <span>3</span>/3</h5><br />
                        <div className="hr-mod"><hr /></div>
                        <div className="dash-details">
                            <p style={pStyle}>Assign SBU</p>
                            <select>
                              <option value="sbu1">Sreejith K.</option>
                              <option value="sbu2">Ramakrishnan</option>
                            </select><br /><br />
                            <div className="dash-btn">
                                <button className="btn btn1"><a href="#">BACK</a></button><button className="btn btn2"><a href="#">FINISH</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Dashboard;