import Header from "./Header";
import CityCard from "./CityCard";
import AccommodationCard from "./AccommodationCard";
import PlaceCard from "./PlaceCard";
import "./main.css";
import arrow from "../assets/arrow.svg";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="locations-title">
          <p>Popular locations</p>
          <button className="view-all-btn">
            VIEW ALL LOCATIONS <img src={arrow} alt="" />
          </button>
        </div>
        <CityCard />
        <div className="homes-title">
          <p>Homes guests love</p>
          <button className="view-all-btn">
            VIEW ALL HOMES <img src={arrow} alt="" />
          </button>
        </div>
        <AccommodationCard />
        <PlaceCard />
      </div>
    </div>
  );
};

export default Main;
