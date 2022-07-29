import "./style/placeCard.css";
import Treehouse from "../../assets/Treehouse.png";

const PlaceCard = () => {
  type Place = {
    title: String;
    location: String;
    subtitle: String;
  };

  const place: Place = {
    title: "Treehouse",
    location: "Hrusice",
    subtitle: "Renting the entire unit",
  };

  return (
    <div className="placeCard">
      <img src={Treehouse} alt="placeImg" className="card-img" />
      <p className="title">{place.title}</p>
      <p className="location">{place.location}</p>
      <p className="subtitle">{place.subtitle}</p>
      <button className="edit-btn">EDIT</button>
      <button className="delete-btn">DELETE PLACE</button>
    </div>
  );
};

export default PlaceCard;
