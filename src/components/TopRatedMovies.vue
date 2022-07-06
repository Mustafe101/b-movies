<template>
  <div>
    <h1>Top Rated <span> Movies</span></h1>
    <SortButtons :movies="movies" @sort-movies="sortMovies" />
    <MoviesList :movies="movies" />
  </div>
</template>


<script>
import MoviesList from "./utils/MoviesList.vue";
import SortButtons from "./utils/SortButtons.vue";
import axios from "axios";

export default {
  name: "TopRatedMovies",
  components: {
    MoviesList,
    SortButtons
  },

  data() {
    return {
      movies: null,
    };
  },

  created() {
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=79171e57a92274a59243874f8c89c98e&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000&include_adult=false&include_video=false&page=1&vote_count.gte=11000")
      .then((reponseOne) => {
        this.movies = reponseOne.data.results;
        console.log(this.movies);
      })

    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=79171e57a92274a59243874f8c89c98e&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate")
      .then((responseTwo) => {
        responseTwo.data.results.forEach(movies => {
          this.movies.push(movies);
        }),
        console.log(this.movies);
      })

    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=79171e57a92274a59243874f8c89c98e&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate")
      .then((responseThree) => {
        responseThree.data.results.forEach(movies => {
          this.movies.push(movies);
        }),
        this.movies.splice(10, 10)
        console.log(this.movies);
        
      })
  },
}
</script>


<style>
</style>