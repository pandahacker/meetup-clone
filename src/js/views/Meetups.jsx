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
										<div className="card m-3">
											<div className="card-header">
												<Link to={"/meetup/" + item.ID}>
													<span>
														{item.post_title}
													</span>
												</Link>
											</div>
											<div className="card-body">
												<p className="card-text">
													{item.post_content}
												</p>
												<button className="btn btn-primary">
													Register
												</button>
											</div>
										</div>
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
