<template>

<h1>Movie Details</h1>

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
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{overview}}</p>
        <p class="card-text"><small class="text-muted">{{release_date}}</small></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
    name: "MovieDetails",

data() {
  return{
    id:this.$route.params.id,
    preUrl: "https://image.tmdb.org/t/p/original/",
  }
  
},
created (){
  console.log(this.id)
}
}
</script>
