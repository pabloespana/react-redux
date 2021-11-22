export const increment = () => {
  return {
    type: "INCREMENT_VALUE",
    payload: 1,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT_VALUE",
    payload: 1,
  };
};
