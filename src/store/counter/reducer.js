const initialState = {
  value: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_VALUE":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "DECREMENT_VALUE":
      if (state.value >= 1) {
        return {
          ...state,
          value: state.value - action.payload,
        };
      }
  }
  return state;
};
