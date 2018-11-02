import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Meetup extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<Context.Consumer>
					{({ store }) => {
						return (
							<h1 className="display-4">
								This will show the demo element:{" "}
								{
									store.events[this.props.match.params.ID]
										.post_title
								}
							</h1>
						);
					}}
				</Context.Consumer>

				<hr className="my-4" />

				<Link to="/">
					<span
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}

Meetup.propTypes = {
	match: PropTypes.object
};
