import { RouterProvider } from "react-router-dom";
import { routes } from "./components/Routes/Routes.jsx";
import "./App.scss";
import ReactGA from "react-ga4";

function App() {
	ReactGA.initialize("G-EK7F31XSVJ");
	return <RouterProvider router={routes} />;
}

export default App;
