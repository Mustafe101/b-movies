<template>

<h1><span>Movie </span>Details</h1>

<div class="moviedetails">
    <div class="row g-1">
      <div class="col">
        <div class = "imagebox" v-if="movie.poster_path">
          <img v-bind:src="preUrl + movie.poster_path" alt="moviePoster" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <div class="mt-5 col-md-3 p-5" id="trailer" v-if="video[0]">
      <iframe
        width="500" height="300" v-bind:src="'https://www.youtube.com/embed/' + video[0].key" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="shadow"></iframe>
    </div>
          <h2 class="card-title">{{ movie.title }}</h2>
          <p class="card-text1">{{ movie.tagline }}</p>
          <p class="card-text2">{{ movie.overview }}</p>
          <p class="card-text3">language: {{ movie.original_language }}</p>
          <p class="card-text3">rating: {{ movie.vote_average}}</p>
          <p class="card-text3">duration: {{ movie.runtime }}min</p>
          <p class="card-text3" v-for="(genre, index) in movie.genres" v-bind:key="genre.id"> {{ index+1 + " " + genre.name  }}  </p>
          <p class="card-text">
            <small class="text-muted" style="width: 30vw">Release Date: {{movie.release_date}}</small>
          </p>
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
    return {
      id: this.$route.params.id,
      preUrl: "https://image.tmdb.org/t/p/original/",
      movie: "",
      video: "",
      loading: true,
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "?api_key=79171e57a92274a59243874f8c89c98e&language=en-US"
      )
      .then((responseOne) => {
        this.movie = responseOne.data;
        this.loading = false;
        console.log(this.movie);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "/videos?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr"
      )
      .then((response) => {
        this.video = response.data.results;
        console.log(this.video);
      });
  },
};
</script>

<style>
.moviedetails {
  display: flex;
}
.moviedetails img {
  width: 500px;
  height: 700px;
}
.card-body {
  display: flex ;
  flex-direction: column;
  position: relative;
  text-align: start;
}

@media screen and (max-width: 1024px) {
  .moviedetails{
    display: flex;
    flex-wrap: wrap;
  }
  .moviedetails img {
    width: 400px;
    height: 600px;
  }
}



@media screen and (max-width: 769px) {
  .card-body{
  text-align: center;
  justify-content: center;
  width: 100%;
  
}

  .card-text2 {
    text-align: center;
    padding: 5vw;
  }

}


h2 {
  font-size: 3rem;
  font-family: "Titan One", cursive;
  color: white;
}
.card-text1 {
  font-size: 2rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.card-text2 {
  font-size: 1.2rem;
}
.card-text3 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.text-muted {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.col-md-7 {
  width: fit-content;
}

.col-md-4 {
  width: 50%;
}
.mt-5 {
  width: fit-content;
  padding: 0%;
}
.row{
  width: 100%;
}

.imagebox{
  width: 40vw;
}

.col{
  width: fit-content;
}

#trailer{
  padding: 0%;
}

iframe{
  width: 40vw;
  height: 20vh;
  padding: 0%;
  }
</style>