
<template>

  
  <v-flex xs12 sm6 md6 lg4>
    <v-card class="ml-4 mr-4 mt-2 mb-4">
      <h2 class="text-lg-center"> {{ movie.title }}</h2>
       <v-rating v-model="rating" size="18" dense color="yellow darken-3" background-color="grey darken-1"
            empty-icon="$vuetify.icons.ratingFull" half-increments hover></v-rating>
          <span class="caption">
            {{ rating }} / 5
          </span>
      
       
        <v-img  v-bind:src="movie.poster" height="auto" aspect-ratio="0.80">
        </v-img>
     
        <v-card-text>
          <p>Sorti en {{movie.release_date}}, ce long métrage {{movie.language}} est un film {{movie.genre}} </p>
          <p>{{ movie.synopsys }}</p>
          <p> Réalisé par {{ movie.director.name }}</p>
          <p>Réalisateur {{movie.director.nationality}} né le {{movie.director.birth_date}}</p>
          <div></div>
        </v-card-text>
      <v-card-actions>
        <router-link :to="{name:'editMovie',params:{id:movie.id}}" tag="button">
          <v-btn flat color="success">Editer</v-btn>
        </router-link>
        <v-btn flat color="red" v-on:click="removeItem">Supprimer</v-btn>        
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
  export default {
    data: () => ({
      
      rating: 3.5,
    }),
    props: ['movie'],
    methods: {
      
      removeItem() {
        this.$emit('remove')
      },
      
      editItem() {
        this.$emit('edit', this.movie)
      },
    }
  }
</script>

