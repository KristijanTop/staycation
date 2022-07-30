import "./style/accommodationCard.css";
import Sugar from "../../assets/Sugar.png";
import star from "../../assets/star.svg";

const AccommodationCard = () => {

type Accommodation = {
    title: String,
    location: String,
    price: Number,
    categorization: Number
}

const accommodation: Accommodation = {
    title: "Sugar & Spice Apartments",
    location: "Split" , 
	price: 75,
	categorization: 3 
}

let stars = [];

for(let i = 0; i < accommodation.categorization; i++) {
    stars.push(<img src={star} alt="star" key={i}/>)
}

  return (
    <div className="accommodationCard">
        <img src={Sugar} alt="accomodationCardImg" className="card-img"/>
        <p className="title">{accommodation.title}</p>
        <p className="location">{accommodation.location}</p>
        <p className="price">EUR {accommodation.price.toString()}</p> 
        {stars}
    </div>
  )
}

export default AccommodationCard