import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "./components/loader/Loader";
import HotelCart from "./pages/card/HotelCard";
import Search from "./pages/form/filterName/Search";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const [searchName, setSearchName] = useState("");
  const [starSelected, setStarSelected] = useState(6);
  const [isOpen, setisOpen] = useState(true);

  const menuToggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="container">
      {isLoading && <Loader />}
      <div>
        <Header />
      </div>
      <div>
        <button onClick={menuToggle} className="btn-menu">
          Filtros
        </button>
      </div>
      <div className="pages-container">
        {isOpen && (
          <Search
            searchName={searchName}
            setSearchName={setSearchName}
            handleCheckBox={(t, q) => setStarSelected(q)}
            starSelected={starSelected}
          />
        )}

        <HotelCart searchName={searchName} starSelected={starSelected} />
      </div>
    </div>
  );
}

export default App;
