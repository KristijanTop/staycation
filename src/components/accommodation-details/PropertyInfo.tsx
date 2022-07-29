import "./style/propertyInfo.css";

const PropertyInfo: React.FC<{
  personCount: Number;
  type: String;
  price: Number;
  location: String;
  postalCode: String;
}> = (props) => {
  return (
    <div className="property-info">
      <p className="property-title">Property Info</p>
      <p className="property-detail">{props.personCount.toString()} guests</p>
      <p className="property-detail">{props.type}</p>
      <p className="property-detail">EUR {props.price.toString()} per night</p>
      <p className="property-detail">{props.location}</p>
      <p className="property-detail">{props.postalCode}</p>
      <button className="property-btn">BOOK YOUR STAY</button>
    </div>
  );
};

export default PropertyInfo;
