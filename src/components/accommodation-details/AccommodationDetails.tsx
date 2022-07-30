import "./style/accommodationDetails.css";
import Poseidon from "../../assets/Poseidon.png";
import star from "../../assets/star.svg";
import calendar from "../../assets/Calendar.svg";
import PropertyInfo from "./PropertyInfo";
import Footer from "../common/Footer";
import Navigation from "../common/Navigation";

const AccommodationDetails = () => {
  type Details = {
    title: String;
    subtitle: String;
    description: String;
    type: String;
    categorization: Number;
    personCount: Number;
    imageUrl: String;
    freeCancelation: Boolean;
    price: Number;
    location: String;
    postalCode: String;
  };

  const details: Details = {
    title: "Poseidon Hotel Suites",
    subtitle: "Stay in the heart of Mýkonos City",
    description:
      "This property is 3 minutes walk from the beach. Overlooking Mykonos Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos Beach. The 3-star hotel offers a freshwater pool, and bright rooms with air conditioning and fan. Each of the Cycladic rooms opens to a private balcony with across to Mykonos Town, the sea and Delos. A fridge, satellite TV and safe are standard. Free two-way transfer from the airport or port is offered. Poseidon provides free Wi-Fi in public areas, and on-site parking is also free. Guests can hire Poseidon’s motor yacht and discover the magnificent beaches of Mykonos. At the breakfast room and its cool patio, guests can taste homemade local delicacies, fresh fruit and good quality coffee. The Alley Bay serves exclusive cocktails, a few steps from the Poseidon. The Poseidon is just 200 m from the famous Mykonos Windmills. Right next to the hotel, guests will find small sandy coves and a pathway that leads to the picturesque chapel of Agios Charalambis. This is our guests' favourite part of Mýkonos City, according to independent reviews. Couples particularly like the location — they rated it 9.6 for a two-person trip.",
    type: "Room",
    categorization: 5,
    personCount: 2,
    imageUrl: "",
    freeCancelation: true,
    price: 500,
    location: "Mýkonos City",
    postalCode: "846 00",
  };

  let stars = [];

  for (let i = 0; i < details.categorization; i++) {
    stars.push(<img src={star} alt="star" key={i} />);
  }

  return (
    <div>
      <Navigation/>
      <img
        src={Poseidon}
        alt="backgroundImg"
        className="accommodation-header"
      />
      <div className="accommodation-content">
        <div>
          <div className="accommodation-title">
            <p>{details.title}</p>
            {stars}
          </div>
          <p className="accommodation-subtitle">{details.subtitle}</p>
          <div className="accommodation-cancelation">
            <img src={calendar} alt="calendar" />
            <p>
              {details.freeCancelation
                ? "Free cancellation available"
                : "Free cancellation isn't available"}
            </p>
          </div>
          <p className="accommodation-description">{details.description}</p>
        </div>
        <PropertyInfo
          personCount={details.personCount}
          type={details.type}
          price={details.price}
          location={details.location}
          postalCode={details.postalCode}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default AccommodationDetails;
