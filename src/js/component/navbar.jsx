import React from "react";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar">
				<a className="navbar-brand" href="#">
					<img src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-white.png" />
				</a>

				<ul className="nav justify-content-end">
					<li className="nav-item">
						<button className="btn btn-primary " type="button">
							Login
						</button>
					</li>
				</ul>
			</nav>
		);
	}
}
