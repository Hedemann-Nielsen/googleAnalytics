import { Outlet } from "react-router-dom";
import { Footer } from "../Partials/Footer/Footer.jsx";
import { Navigation } from "../Partials/Navigation.jsx";

export const Layout = () => {
	const links = [
		{ name: "Home", link: "home" },
		{ name: "About", link: "about" },
		{ name: "Gallery", link: "gallery" },
	];
	return (
		<>
			<Navigation links={links} />
			<Outlet />
			<Footer />
		</>
	);
};
