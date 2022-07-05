<template>

<h1><span>Movie </span>Details</h1>

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img
        v-if="poster_path"
        v-bind:src="preUrl + poster_path"
        alt="moviePoster"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>
        <p class="card-text">{{movie.overview}}</p>
        <p class="card-text"><small class="text-muted">{{movie.release_date}}</small></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "MovieDetails",

data() {
  return{
    id:this.$route.params.id,
    preUrl: "https://image.tmdb.org/t/p/original/",
    movie: null,
    loading: true
  }
},
created (){
  axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=79171e57a92274a59243874f8c89c98e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((responseOne) => {
        this.movie = responseOne.data.results;
        this.loading = false
        console.log(this.movie);
      });
}
}
</script>

<style>

</style>