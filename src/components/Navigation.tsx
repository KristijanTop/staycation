import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <p className="logo">Staycation</p>
      <ul className="navigation-links">
        <li>Locations</li>
        <li>My Places</li>
        <li>My Bookings</li>
      </ul>
      <p className="logout">LOGOUT</p>
    </div>
  );
};

export default Navigation;
