<template>
  <router-link :to="`/MovieDetails/${id}`">
    <div class="card">
      <p v-once v-if="$route.path == '/TopRatedMovies'"><span v-once>{{ index +1}}</span></p>
      <h5 class="card-title">{{ title }}</h5>
      <img
        v-if="poster_path"
        v-bind:src="preUrl + poster_path"
        alt="moviePoster"
      />
      <div class="card-body">
        <p>{{ release_date }}</p>
        <p class="card-text">{{ vote_average }}</p>
        <p class="card-text">{{ overview }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["id", "title", "poster_path", "release_date", "vote_average", "overview", "index"
  ],

  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
};
</script>

<style>
.card {
  display: flex;
  background-color: #2c3e50;
  width: 25rem;
  padding: 5px;
  margin: 10px;
  color: white;
  font-family: sans-serif;
  font-size: 1rem;
  min-height: 100vh;
}

@media screen and (max-width: 700px) {
  .card{
    width: 18rem;
    font-size: 1.2rem;
    height: fit-content;
    min-height: 20vh;
  }
}



li {
  text-decoration: none;
  list-style: none;
}
h5 {
  color: white;
  font-family: "Titan One", cursive;
  height: 7vh;
}
</style>