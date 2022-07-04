<template>
  <div>
    <h1>French <span> Movies</span></h1>
    <MoviesList :movies="frenchMovies" />
  </div>
</template>


<script>
import MoviesList from "./utils/MoviesList.vue";
import axios from "axios";

export default {
  name: "FrenchMovies",
  components: {
    MoviesList,
  },

  data() {
    return {
      frenchMovies: null,
    };
  },

  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=79171e57a92274a59243874f8c89c98e&language=en-US&sort_by=popularity.desc&with_original_language=fr&include_adult=false&include_video=false&page=1"
      )
      .then((reponseOne) => {
        this.frenchMovies = reponseOne.data.results;
        console.log(this.frenchMovies);
      });
  },
};
</script>


<style>
</style>
