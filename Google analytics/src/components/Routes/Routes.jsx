import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../../pages/HomePage";
import { AboutPage } from "../../pages/AboutPage";
import { GalleryPage } from "../../pages/GalleryPage";
import { FallbackPage } from "../../pages/FallbackPage";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "home",
				element: <HomePage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "gallery",
				element: <GalleryPage />,
			},
			{
				path: "*",
				element: <FallbackPage />,
			},
		],
	},
]);
