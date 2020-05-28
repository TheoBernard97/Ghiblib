let initialState = {
  visible: false,
  imgUrl: "",
  title: "",
  director: "",
  release: "",
  description: "",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      state.visible = true;
      return state;

    case "CLOSE_MODAL":
      state.visible = false;
      return state;

    default:
      return state;
  }
};

export default modalReducer;
