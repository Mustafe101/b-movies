
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


// creating the import 
import AmericanMovies from './components/AmericanMovies.vue'
import FrenchMovies from './components/FrenchMovies.vue'
import LastMovies from './components/LastMovies.vue'
import MovieDetails from './components/MovieDetails.vue'
import SearchMovies from './components/SearchMovies.vue'
import TopRatedMovies from './components/TopRatedMovies.vue'

// Define some routes
// Each route should map to a component.
const routes = [
  { path: '/', component: App },
  { path: '/AmericanMovies', component: AmericanMovies },
  { path: '/FrenchMovies', component: FrenchMovies },
  { path: '/LastMovies', component: LastMovies },
  { path: '/MovieDetails/:id', component: MovieDetails },
  { path: '/SearchMovies', component: SearchMovies },
  { path: '/TopRatedMovies', component: TopRatedMovies },
]

const router = createRouter({
 
  history:createWebHashHistory(),
  routes, 
})

createApp(App).use(router).mount('#app')