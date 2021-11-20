import actionTypes from './actionTypes';

const initialState = {
  data: [],
  dataArea: {},
  dataSize: [],
  dataSorting: []
};

const setProdList = (state, payload) => {

  return {
    ...state,
    data: payload.data,
  };
};

const setArea = (state, payload) => {

  return {
    ...state,
    dataArea: payload.data,
  };
};

const setSize = (state, payload) => {
  return {
    ...state,
    dataSize: payload.data,
  };
};

const prodlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODLIST_SUCCESS:
      return setProdList(state, action.payload);
    case actionTypes.GET_AREA_SUCCESS:
      return setArea(state, action.payload);
    case actionTypes.GET_SIZE_SUCCESS:
      return setSize(state, action.payload);
    default:
      return state;
  }
};

export default prodlistReducer;
