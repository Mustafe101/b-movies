<template>
  <div class="d-grid gap-2 d-md-block">
    <button @click="sortByDate" class="btn btn-primary" type="button">
      Sort by date
    </button>
    <button @click="sortByRating" class="btn btn-primary" type="button">
      Sort by rating
    </button>
    <button @click="sortByTitle" class="btn btn-primary" type="button">
      Sort by title
    </button>
  </div>
</template>


<script>
export default {
  name: "SortButtons",
  props: ["movies"],

  methods: {
    sortByDate() {
      let moviesClone = this.movies
    if (this.sortByData == true) {
      moviesClone.sort((a, b) => {
        if (a.release_date < b.release_date) {
          return 1;
        }else
        if (a.release_date > b.release_date) {
          return -1;
        }
        return 0;
      })
      
    return this.sortByData = false
    }

///////////

     if (this.sortByData == false) {

      moviesClone.sort((a, b) => {
        if (a.release_date > b.release_date) {
          return 1;
        }else
        if (a.release_date < b.release_date) {
          return -1;
        }
        return 0;
      })
      console.log(moviesClone)
    }
    return this.sortByData = true
    },

//||||||||||||||||||||||||||||||||||||||||||||||||

           sortByRating() {
      let moviesClone = this.movies
    if (this.sortByData == true) {
      moviesClone.sort((a, b) => {
        if (a.vote_average < b.vote_average) {
          return 1;
        }else
        if (a.vote_average > b.vote_average) {
          return -1;
        }
        return 0;
      })
      
    return this.sortByData = false
    }
        
////////////

     if (this.sortByData == false) {

      moviesClone.sort((a, b) => {
        if (a.vote_average > b.vote_average) {
          return 1;
        }else
        if (a.vote_average < b.vote_average) {
          return -1;
        }
        return 0;
      })
      return this.sortByData = true
    }
        },

  


//||||||||||||||||||||||||||||||||||||||



        sortByTitle() {
      let moviesClone = this.movies
    if (this.sortByData == true) {
      moviesClone.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }else
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      })
      
    return this.sortByData = false
    }
    

    ///////////////
    
 if (this.sortByTitle == false) {

      moviesClone.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }else
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
        return this.sortByData = true

    }
       },
  },




  data() {
    return {
      sortedByDate: false,
      sortedByRating: false,
      sortedByTitle: false,
    };
  },
}


</script>
