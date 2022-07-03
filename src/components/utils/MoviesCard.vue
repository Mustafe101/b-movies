<template>
<div class="cards">
  
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
  export default {
    name: "MoviesCard",
    props:["id", "title", "poster_path", "release_date", "vote_average", "overview"],

  data() {
      return {
        preUrl: "https://image.tmdb.org/t/p/original/",
      };
    },
  }

</script>

<style>
body{
  background-color: rgb(255, 149, 20);
  margin: 0%;
  padding: 0%;
}
.card{
  display: flex;
  background-color: #2c3e50;
  width: 100vw;
  padding: 5px;
  margin: 10px;
  color: white;
}
li{
    text-decoration: none;
    list-style: none;
}
h5{
  color: white;
  font-family: 'Titan One', cursive;
  height: 10vh;
}


</style>