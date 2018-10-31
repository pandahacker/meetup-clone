import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			fetch("https://assets.breatheco.de/apis/fake/meetup/meetups")
				.then(response => response.json())
				.then(data => this.setState({ meetups: data }));

			// var xhr = new XMLHttpRequest();
			//
			// xhr.onreadystatechange = function () {
			// 	if (xhr.readyState === 4){
			//
			// 	}
			// }

			// Set your fetchs/Ajax requests here.
			// make sure you're using the store: this.state.store
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
