import HeaderImage from "../../assets/images/Header-image.jpg";
import style from "./Caption.module.scss";

export const Caption = () => {
	return (
		<div className={style.Caption}>
			<img src={HeaderImage} alt="" />
			<h2>
				Lad os sammen nå nye højder og overskride grænserne for innovation og
				vækst.
			</h2>
		</div>
	);
};
