const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((element) => {
            state.push(element);
          });
        });
      return state;

    default:
      return state;
  }
};

export default moviesReducer;
