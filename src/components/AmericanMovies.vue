<template>
  <h1>American <span> Movies</span></h1>

  <div>
    <ul>
      
      <li class="american_movies" v-for="movie in movies" v-bind:key="movie.id">
        <MovieCard
          :id="movie.id"
          :title="movie.title"
          :poster_path="movie.poster_path"
          :release_date="movie.release_date"
          :vote_average="movie.vote_average"
          :overview="movie.overview"
        />
      </li>
    </ul>
  </div>
</template>


<script>
import MovieCard from "./utils/MovieCard.vue";
import axios from "axios";

export default {
  name: "AmericanMovies",
  components: {
    MovieCard
  },

  data() {
    return {
      movies: null    };
  },

  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=79171e57a92274a59243874f8c89c98e&language=en-US&certification_country=us&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate"
      )
      .then((reponseOne) => {
        this.movies = reponseOne.data.results;
        console.log(this.movies);
      });
  },
};
</script>




<style>
</style>
