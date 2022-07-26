import London from "../assets/London.png";
import "./cityCard.css";

const CityCard = () => {

    type City = {
        name: String,
        count: String
    }

    const city: City = {
        name: "London",
        count: "5,102"
    }

  return (
    <div className="city-card">
        <img src={London} alt="London" className="city-background"/>
        <div className="rectangle"></div>
        <p className="city-name">{city.name}</p>
        <p className="city-count">{city.count} properties</p>
    </div>
  )
}

export default CityCard