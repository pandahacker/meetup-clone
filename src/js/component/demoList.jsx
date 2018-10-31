import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

function DemoList(props) {
	return (
		<ul>
			<Context.Consumer>
				{({ store }) => {
					return store.meetups.map((item, index) => {
						return <li key={index}>{item.post_title}</li>;
					});
				}}
			</Context.Consumer>
		</ul>
	);
}

DemoList.propTypes = {
	items: PropTypes.array
};

export default DemoList;
