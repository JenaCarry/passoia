import banner from "../../assets/banner.png";
import "./banner.scss";

export function Banner() {
    return (
        <section className="banner">
            <img className="banner__image" src={banner} alt="Banner" />
        </section>
    );
}
