import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.meetups.map((item, index) => {
								return (
									<li
										key={index}
										className="list-group-item d-flex justify-content-between">
										<Link to={"/Meetup/" + index}>
											<span>
												Link to: {item.post_title}{" "}
												{item.ID}
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
								);
							});
						}}
					</Context.Consumer>
				</ul>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
