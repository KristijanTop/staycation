import "./header.css";
import background from "../assets/Background.png";

const Header = () => {
  return (
    <div className="header">
      <img src={background} alt="background" className="background-img" />
      <h1 className="title1">Enjoy your travels</h1>
      <h2 className="title2">with Staycation and collect rewards</h2>
      <h3 className="title3">Book now and save 10% or more today</h3>
    </div>
  );
};

export default Header;
