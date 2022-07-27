import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import AccommodationDetails from "./components/AccommodationDetails";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/accommodation-details"
          element={<AccommodationDetails />}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
