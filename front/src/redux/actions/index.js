// import axios from "axios";
import hotelsApi from "../../api/hotelsApi";

export const actions = {
  setHotelList: "SET_HOTEL_LIST",
  setIsLoading: "SET_IS_lOADING",
  setSearchName: "SET_SEARCH_NAME",
};

export const setHotelList = (hotel) => ({
  type: actions.setHotelList,
  payload: hotel,
});

export const setSearchName = (searchName) => ({
  type: actions.setSearchName,
  payload: searchName,
});

export const setIsLoading = (isLoading) => ({
  type: actions.setIsLoading,
  payload: isLoading,
});

// Thunk

export const getHotelListThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));

    // try{
    //   const { data } = await hotelsApi.get("hotels")
    //   dispatch(setHotelList(res.data))
    // }catch(err){
    //   console.log(err)
    // }finally{
    //   setIsLoading(false)
    // }
    hotelsApi
      .get("http://localhost:4000/api/v1/hotels")
      .then((res) => dispatch(setHotelList(res.data)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};
