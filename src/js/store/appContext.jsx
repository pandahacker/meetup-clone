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
				.then(response => {
					response.json().then(data => {
						let store = this.state.store;
						store.meetups = data;
						this.setState({ store });
					});
				})
				.catch(error => console.log("Fetch Error:", error));

			fetch("https://assets.breatheco.de/apis/fake/meetup/session")
				.then(response => {
					response.json().then(data => {
						let store = this.state.store;
						store.session = data;
						this.setState({ store });
					});
				})
				.catch(error => console.log("Fetch Error:", error));

			fetch("https://assets.breatheco.de/apis/fake/meetup/events")
				.then(response => {
					response.json().then(data => {
						let store = this.state.store;
						store.events = data;
						this.setState({ store });
					});
				})
				.catch(error => console.log("Fetch Error:", error));

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
