import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Meetups } from "./views/Meetups.jsx";
import { Event } from "./views/Event.jsx";
import { Meetup } from "./views/Meetup.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Meetups} />
						<Route path="/meetup/:theid" component={Meetup} />
						<Route path="/event/:theid" component={Event} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
