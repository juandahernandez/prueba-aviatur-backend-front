import "./StarQuantitys.styles.css";
import Star from "../../icons/filters/star";

const StarQuantity = ({ stars }) => {
  const newArray = [];

  for (let i = 0; i < stars; i++) {
    newArray.push(i);
  }
  return (
    <div className="start-quantity">
      {newArray.map((_star, index) => (
        <Star key={index} color="#cf8b00" />
      ))}
    </div>
  );
};

export default StarQuantity;
