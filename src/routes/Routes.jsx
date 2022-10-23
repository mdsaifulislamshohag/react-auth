import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ShopPage from "../pages/Shop/Shop";
const LoginPage = lazy(() => import("../pages/Auth/Login/Login"));
const RegistrationPage = lazy(() => import("../pages/Auth/Registration/Registration"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const RoutePagesComponent = ({ history, location }) => {
	
	const unlisten = history.listen(() => {
		if (!history.location.hash) {
		window.scrollTo(0, 0);
		}
	});

	useEffect(() => {
		unlisten();
	}, []);

	return (
		<Suspense fallback={"Loading..."}>
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path="/" component={ShopPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/register" component={RegistrationPage} />

					<Route component={NotFound} />
				</Switch>
			</AnimatePresence>
		</Suspense>
	);
};

export default withRouter(RoutePagesComponent);
