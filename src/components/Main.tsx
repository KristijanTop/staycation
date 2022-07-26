import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import CityCard from "./CityCard";
import AccommodationCard from "./AccommodationCard";
import PlaceCard from "./PlaceCard";

const Main = () => {
  return (
    <div>
        <Navigation/>
        <Header/>
        <CityCard/>
        <AccommodationCard/>
        <PlaceCard/>
        <Footer/>
    </div>
  )
}

export default Main