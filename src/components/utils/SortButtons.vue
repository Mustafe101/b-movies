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
      const moviesClone = this.movies
      moviesClone.sort((a, b) => {
        if (a.release_date < b.release_date) {
          return 1;
        }
        if (a.release_date > b.release_date) {
          return -1;
        }
        return 0;
      });
      console.log(moviesClone)
    },


    sortByRating() {
      const moviesClone = this.movies
      moviesClone.sort((a, b) => {
        if (a.vote_average < b.vote_average) {
          return 1;
        }
        if (a.vote_average > b.vote_average) {
          return -1;
        }
        return 0;
      });
      console.log(moviesClone)
    },


    sortByTitle() {
       const moviesClone = this.movies
      moviesClone.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });
      console.log(moviesClone)
    },


  data() {
    return {
      sortedByDate: false,
      sortedByRating: false,
      sortedByTitle: false,
    };
  },
}
}
</script>
