import "./Search.styles.css";
import { FaBed } from "react-icons/fa";
import StarChecked from "../../../components/starChecked";

const Search = ({
  setSearchName,
  searchName,
  handleCheckBox,
  starSelected,
}) => {
  const searchPathImg = "./assets/icons/filters/";

  return (
    <div className="search-container">
      <div className="img-container">
        <img src={searchPathImg + "search.svg"} alt="search" />
        <h3>Nombre del Hotel </h3>
      </div>
      <div className="input-container">
        <label htmlFor="Hotel">
          <FaBed />
        </label>
        <input
          placeholder="Hotel"
          type="text"
          id="Buscar"
          onChange={(e) => setSearchName(e.target.value)}
          value={searchName}
        />
      </div>

      <div className="stars-filter-container">
        <div className="input-all-starts">
          <input
            type="radio"
            onChange={({ target }) => handleCheckBox(target, 6)}
            checked={starSelected === 6}
            name="star"
          />
          Todas las estrellas
        </div>
        {starsArray.map((star, index) => (
          <StarChecked
            quantity={star.quantity}
            key={index}
            handleCheckBox={handleCheckBox}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;

const starsArray = [
  {
    quantity: 1,
    value: 1,
  },
  {
    quantity: 2,
    value: 2,
  },
  {
    quantity: 3,
    value: 3,
  },
  {
    quantity: 4,
    value: 4,
  },
  {
    quantity: 5,
    value: 5,
  },
];
