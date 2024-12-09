import instance from "./index";

// https://react-native-food-delivery-be.eapi.joincoded.com/api/category

const getCategories = async () => {
  try {
    // console.log("1");
    const response = await instance.get("/category");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getResturants = async () => {
  try {
    console.log(1);
    const response = await instance.get("/resturant");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getCategories, getResturants };

// https://react-native-food-delivery-be.eapi.joincoded.com/api/resturant
