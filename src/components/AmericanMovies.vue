<template>    
   <H1>Last <span> Movies</span></h1>
 
    <div class="American_movies" v-for="movie in movies" v-bind:key="movie.id">

    <div class="card" style="width: 20rem;">
      <h5 class="card-title">{{title}}</h5>
       <img v-bind:src="preUrl + poster_path" alt="moviePoster" />
  <div class="card-body">
    <p>{{release_date}}</p>
    <p class="card-text">{{overview}}</p>
    <a href="#" class="btn btn-primary">watch</a>
  </div>
</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "AmericanMovies",
  props:["id", "title", "poster_path", "release_date", "vote_average", "overview"],
  data(){
    return{
    movies: null,
    preUrl: "https://image.tmdb.org/t/p/original/",
  }
},

mounted () {
    axios
    .get('https://api.themoviedb.org/3/movie/top_rated?api_key=79171e57a92274a59243874f8c89c98e&language=en-US&page=1')
    .then((reponseTwo) => {
    this.movies = reponseTwo;
    console.log(this.movies)
})
}
};
</script>

<style>


</style>
