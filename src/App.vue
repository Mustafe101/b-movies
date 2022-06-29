<template>
  <div id="app">
    <HeaderOne />
      <h1 class="pt-5 font-weight-light">
        Vos films préférés sont sur Happy Movies!
      </h1>
    


    <div v-if="$route.path == '/'">
      <!-- if the route is this one  / -->


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

export default {
  name: "App",
  
  components: {
    FooterOne,
    HeaderOne,
    MovieList
  },
  

    el: '#app',
    data() {
    return {
       movies: null,
       loading: true,
       errored: false
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
}

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
