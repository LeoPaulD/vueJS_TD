
<template>
  <div id="app">
    
      
              
              <h2>Nombre de films enregistrés : {{movies.length}}</h2>
            
           
          
              <v-text-field class="mb-3" color="teal" prepend-inner-icon="search" v-model="search" single-line
                placeholder="Rechercher..."></v-text-field>
            
          
           
            <movie-item v-for="(movie,index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie"
              v-on:remove="remove(index)"></movie-item>
        
   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
        movies: window.shared_data.movies,
        movie: window.shared_data.movies[this.$route.params.id],
        
        search: "",
      }
    },

    methods: {
      
      remove: function (index) {
        this.movies.splice(index, 1)
      },
    },

    computed: {
      movies_search: function () {
        
        return this.movies.filter(m => {
          
          if (m.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
            return true;
          }
         
          if (m.genre.toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
            return true;
          }
          
          if (m.director.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
            return true;
          }
        });
      }
    },
  }
</script>