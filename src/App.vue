<template>
  <NavBar />
  <Carousel />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Carousel from './components/CarouselOne.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Carousel
} 
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
