import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const Navigation = (props) => {
	return (
		<nav className={styles.navigation}>
			<ul>
				{props.links.map((link, index) => {
					return (
						<li key={index}>
							<NavLink to={link.link}>{link.name}</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
