import { Link } from "react-router-dom";
import style from "./FallbackComponent.module.scss";

export const FallbackComponent = () => {
	return (
		<div className={style.FallbackComponent}>
			<div className={style.FallbackContentWrapper}>
				<h1>404 - Page Not Found</h1>
				<p>
					Sorry, the page you are looking for could not be found. Please try
					again later.
				</p>
				<Link to="/home" className={style.link}>
					Back to Home
				</Link>
			</div>
		</div>
	);
};
