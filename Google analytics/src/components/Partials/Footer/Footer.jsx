import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import { FaInstagram, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

export function Footer() {
	return (
		<footer className={style.Footer}>
			<div>
				<FaInstagram className={style.icon} />
				<FaGithub className={style.icon} />
				<FaTwitter className={style.icon} />
				<FaFacebook className={style.icon} />
			</div>
			<div>
				<Link to="/home" className={style.link}>
					Home
				</Link>
				<Link className={style.link}>Services</Link>
				<Link to="/About" className={style.link}>
					About
				</Link>
				<Link className={style.link}>Terms</Link>
				<Link className={style.link}>Privacy policy</Link>
				<p>Future Coders &copy; 2024</p>
			</div>
		</footer>
	);
}
