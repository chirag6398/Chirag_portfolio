export const initialState = {
  onDarkMode: false,
};
export const reducer = (state, action) => {
  if (action.type === "CHANGE_MODE") {
    const newState = {
      onDarkMode: action.payload,
    };
    return newState;
  }
  return state;
};
