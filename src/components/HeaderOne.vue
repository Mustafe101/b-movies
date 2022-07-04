<template>
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <router-link to="/"><h1><span>B-</span>Movies</h1></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/AmericanMovies">American Movies</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FrenchMovies">French Movies</router-link>
        </li>
        <li class="nav-item dropdown">
        </li>
        <li class="nav-item">
          <router-link to="/LastMovies">Last Movies</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/TopRatedMovies">Top Rated Movies</router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>



<script>
export default {
    name: "HeaderOne",
}
</script>





<style>
nav{
  position: fixed;
}
li{
  padding: 20px;
  }

a{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.3rem;
  text-decoration: none;
  list-style: none;
  color: white;
  transition: 0.5s;
}

a:hover{
  color: rgb(56, 218, 218);
  transition-duration: 0.5s 0.5s;
}

.form-control{
  border-radius: 50px;
  width: 20vw;
}

.btn{
  border: 1px solid rgb(56, 218, 218);
  color: rgb(56, 218, 218);
  transition: 0.5s;
}

.btn:hover{
  background-color: rgb(56, 218, 218);
  transition-duration: 0.5s 0.5s;
}

</style>

