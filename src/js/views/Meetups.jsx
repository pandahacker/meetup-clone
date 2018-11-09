import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";
import moment from "moment";

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
												<h3>
													{moment(
														item.meta_keys.day
													).format("LL")}
												</h3>
											</div>
											<div className="card-body">
												<div className="container">
													<div className="row">
														<h4 className="col-4 card-text">
															{moment(
																item.meta_keys
																	.time,
																"HH:mm:ss"
															).format("LT")}
														</h4>
														<div className="col-8 card-text text-center">
															<Link
																to={
																	"/event/" +
																	item.ID
																}>
																<h4>
																	{
																		item.post_title
																	}
																</h4>
															</Link>
															<Link
																to={
																	"/meetup/" +
																	item
																		.meta_keys
																		._meetup
																}>
																<h4>
																	{actions.findMeetupName(
																		item
																			.meta_keys
																			._meetup
																	)}
																</h4>
															</Link>
														</div>
													</div>
												</div>
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
