import { images } from "../components/ImageLinker";

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((element) => {
            images.forEach((image) => {
              if (image.id === element.id) {
                element.imgUrl = image.url;
              }
            });
            state.push(element);
          });
        });
      return state;

    default:
      return state;
  }
};

export default moviesReducer;
