let initialState = {
  visible: false,
  renderMovie: 0,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      state.visible = true;
      state.renderMovie = action.payload;
      return state;

    case "CLOSE_MODAL":
      state.visible = false;
      return state;

    default:
      return state;
  }
};

export default modalReducer;
