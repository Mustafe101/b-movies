<template>
  <div id="app">
    <HeaderOne />

    <div v-if="$route.path == '/'">
      <!-- if the route is this one  / -->
      <SortButtons :movies="movies" @sort-movies="sortMovies" />
      <MovieList :movies="movies" :loading="loading" :errored="errored" />
      
    </div>

    <div v-else>
      <!-- if the route is not this one  / -->
      <router-view v-bind:key="$route.fullPath"></router-view>
    </div>

    <FooterOne />
  </div>
  <div v-bind:class="{ responseOne }"></div>
</template>


<script>
import axios from "axios";
import HeaderOne from "./components/HeaderOne.vue";
import FooterOne from "./components/FooterOne.vue";
import MovieList from "./components/utils/MoviesList.vue";
import SortButtons from "./components/utils/SortButtons.vue";


export default {
  name: "App",

  components: {
    FooterOne,
    HeaderOne,
    MovieList,
    SortButtons,
  },
  data() {
    return {
      movies: null,
      loading: true,
      errored: false,
    };
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
body {
  background-color: rgb(255, 149, 20);
  margin: 0%;
  padding: 0%;
}
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-family: "Titan One", cursive;
  margin: 20px;
}
span {
  color: red;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
