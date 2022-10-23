import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Helmet} from "react-helmet";
import Routes from "./routes/Routes";
import Manifest from "./manifest";

// Node plugins
import 'bootstrap/scss/bootstrap.scss';

// Theme styles
import "./styles/style.scss";
import Header from "./components/Header/Header";

const App = () => {

	return (
		<BrowserRouter>
			<Helmet>
				<title>{Manifest.title}</title>
				<meta name="description" content={Manifest.description} />
				<meta name="keywords" content={Manifest.keywords} />
				<meta name="author" content={Manifest.author} />
            </Helmet>
			<Header />
			<main className="main">
				<Routes />
			</main>
		</BrowserRouter>
	);
}
export default App;

