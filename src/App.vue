<template>
  <div id="app">
    <HeaderOne />
    <div v-if="$route.path == '/'">
      <!-- if the route is this one  / -->

      <h1 class="pt-5 font-weight-light">
      Watch Movies With B-movies
      </h1>
      

      <MovieList :movies="movies" :loading="loading" :errored="errored" />
    </div>

    <div v-else>
      <!-- if the route is not this one  / -->

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img v-bind:src="img + images" class="d-block w-100" alt="moviePoster" />
    </div>
    <div class="carousel-item">
      <img v-bind:src="img + images" class="d-block w-100" alt="moviePoster" />
    </div>
    <div class="carousel-item">
      <img v-bind:src="img + images" class="d-block w-100" alt="moviePoster" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>  

      <router-view v-bind:key="$route.fullPath"></router-view>
    </div>

    <FooterOne />
  </div>

</template>

<script>
import axios from "axios";
import HeaderOne from "./components/HeaderOne.vue";
import FooterOne from "./components/FooterOne.vue";
import MovieList from "./components/utils/MoviesList.vue";

export default {
  name: "App",
  components: {
    FooterOne,
    HeaderOne,
    MovieList
  },
  
//put v-for with v bind to display theapi content

  data() {
    return { movies: null };
  },

  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=79171e57a92274a59243874f8c89c98e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((responseOne) => {
        this.movies = responseOne.data.results;
        console.log(this.movies);
      });
  },
};


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
