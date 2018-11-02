import React from "react";
import { Context } from "../store/appContext.jsx";

function DemoProducts(props) {
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				return (
					<div className="row">
						<div className="col-6">
							<h3>Click to add to cart</h3>
							<ul className="list-group">
								{store.meetups.map((item, index) => {
									return (
										<li
											key={index}
											className="list-group-item">
											{item.post_title}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
}

export default DemoProducts;
