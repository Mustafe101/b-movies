<template>

<div>
<input v-model="search" @keyup="getSearch(search)" />
</div>
<MoviesList :movies="movies" :loading="loading" :errored="errored" />
</template>

<script>
import axios from "axios"
import MoviesList from "./utils/MoviesList.vue"
export default {
  name: "SearchMovies",
  components: {
    MoviesList,
  },

 
methods: {
        sortMovies(movies) {
            this.movies = movies
        },

        getSearch(search) {
            axios
                .get("https://api.themoviedb.org/3/search/movie?api_key=79171e57a92274a59243874f8c89c98e&language=en-US&include_adult=false&query=" + search)
                .then((responseFour) => {
                    this.movies = responseFour.data.results;
                });
        },
    },
  data(){
    return{
    movie: null,
    loading: true
  }
}





}
</script>

<style>
</style>
