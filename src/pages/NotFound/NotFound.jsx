import React from "react";
import FadeTransition from "../../components/common/FadeTransition/FadeTransition";
import "./NotFound.scss";

const NotFound = () => {
	return (
		<FadeTransition>
            <div className="notFound">
                <h1>404 Not Found</h1>
            </div>
        </FadeTransition>
	);
};

export default NotFound;
