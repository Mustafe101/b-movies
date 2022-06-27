<template>
  <NavBar />
  <Slider />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Slider from './components/SliderOne.vue'

export default {
components:{
    NavBar,
    Slider
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
