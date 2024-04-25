import style from "./AboutPage.module.scss";

export const AboutPageComponent = () => {
	return (
		<div className={style.aboutWrapper}>
			<div className={style.about}>
				<h2>About Page</h2>
				<p>Some text about us</p>
			</div>
		</div>
	);
};
