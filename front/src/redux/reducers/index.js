import { actions } from "../actions";

const INICIAL_STATE = {
  hotelList: [],
  isLoading: false,
  searchName: "",
};

const reducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case actions.setHotelList:
      return {
        ...state,
        hotelList: action.payload,
      };

    case action.setIsLoading:
      return {
        ...state,
        isLoading: action.payload,
      };

    case action.setSearchName: {
      return {
        ...state,
        searchName: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
