import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";

export class Meetups extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron text-center">
					<h1 className="display-4">The Meetup Clone</h1>
					<p className="lead">
						This is a mini project created by 4GeeksAcadamy
					</p>
					<p>
						Using: ReactJS, Bootstrap, @Fontawesome, Moment,
						React-router
					</p>
				</div>
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.events.map((item, index) => {
								return (
									<div key={index} className="container">
										<li className="list-group-item d-flex justify-content-between">
											<Link to={"/Meetup/" + item.ID}>
												<span>
													Link to: {item.post_title}
												</span>
											</Link>
											<p>{item.post_content}</p>
											<button
												className="btn btn-success"
												onClick={() =>
													actions.changeColor(
														index,
														"orange"
													)
												}>
												Register
											</button>
										</li>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</ul>
			</div>
		);
	}
}
