import actionTypes from './actionTypes';

const initialState = {
  data: [],
};

const setProdList = (state, payload) => {

  return {
    ...state,
    data: payload.data,
  };
};

const prodlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODLIST_SUCCESS:
      return setProdList(state, action.payload);
    default:
      return state;
  }
};

export default prodlistReducer;
