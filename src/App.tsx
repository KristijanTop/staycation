import Main from "./components/main/Main";
import { Routes, Route } from "react-router-dom";
import AccommodationDetails from "./components/accommodation-details/AccommodationDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/accommodation-details"
          element={<AccommodationDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
