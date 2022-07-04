<template>
<div>
<h1>Last <span> Movies</span></h1>

<MoviesList :movies="lastMovies" />

</div>
</template>


<script>
import MoviesList from "./utils/MoviesList.vue";
import axios from "axios";

export default {
  name: "LastMovies",
  components: {
    MoviesList
  },

  data() {
    return {
      lastMovies: null,
    };
  },

  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=79171e57a92274a59243874f8c89c98e&language=en-US&certification_country=fr&include_adult=false&include_video=false&page=3&primary_release_year=2022"
      )
      .then((reponseOne) => {
        this.lastMovies = reponseOne.data.results;
        console.log(this.lastMovies);
      });
  },
};
</script>
