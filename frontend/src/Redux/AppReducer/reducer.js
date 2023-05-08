

import * as types from "./actionType"


const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state, isLoading: true,
      }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state, isLoading: false,
        data: payload,
        isError: false
      }
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state, isLoading: false,
        isError: true
      }
   







    default: return state;
  }

};


export { reducer }