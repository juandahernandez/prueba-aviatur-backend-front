import Star from "../../icons/filters/star";
import "./index.styles.css";

const StarChecked = ({ quantity, handleCheckBox }) => {
  const arrayStar = [];
  for (let i = 0; i < quantity; i++) {
    arrayStar.push(i);
  }

  return (
    <div className="inputs-radio">
      <input
        type="radio"
        onChange={({ target }) => handleCheckBox(target, quantity)}
        name="star"
      />
      {arrayStar.map((_star, index) => (
        <Star key={"start" + index} color="#cf8b00" />
      ))}
    </div>
  );
};

export default StarChecked;
