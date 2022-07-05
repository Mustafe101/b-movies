<template>
  <h1><span>Movie </span>Details</h1>

  <div class="moviedetails mb-4">
    <div class="row g-1">
      <div class="col-md-4">
        <div v-if="movie.poster_path">
          <img v-bind:src="preUrl + movie.poster_path" alt="moviePoster" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <h2 class="card-title">{{ movie.title }}</h2>
          <p class="card-text1">{{ movie.tagline }}</p>
          <p class="card-text2" style="width: 30vw">{{ movie.overview }}</p>
          <p class="card-text3">Popularity: {{ movie.popularity }}</p>

          <p class="card-text">
            <small class="text-muted" style="width: 30vw">Rating: {{movie.release_date}}</small>
          </p>
        </div>
      </div>
      <div class="mt-5 col-md-3 p-5" id="trailer" v-if="video[0]">
      <iframe
        width="500" height="300" v-bind:src="'https://www.youtube.com/embed/' + video[0].key" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="shadow"></iframe>
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












<style scope>
.moviedetails {
  display: flex;
}

.moviedetails img {
  width: 500px;
  height: 700px;
  padding: 5vh;
}

.card-body {
  position: relative;
  text-align: start;
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
  width: 30vw;
}

.mt-5 {
  width: 30vw;
}

.row{
  width: 100%;
}
</style>
