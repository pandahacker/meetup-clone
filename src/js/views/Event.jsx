import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import moment from "moment";

export class Event extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<div className="jumbotron">
							<h1 className="display-4">
								This will show the demo element:{" "}
								{
									store.events[this.props.match.params.theid]
										.post_title
								}
							</h1>

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
				}}
			</Context.Consumer>
		);
	}
}

Event.propTypes = {
	match: PropTypes.object
};
