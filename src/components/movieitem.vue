<!-- // Utilisation du composant Card pour l'affichage des films // -->
<template>
  <!-- // Positionnement (responsive) // -->
  
  <v-flex xs12 sm6 md6 lg4>
    <v-card class="ml-4 mr-4 mt-2 mb-4">
      <v-hover>
       
        <v-img  v-bind:src="movie.poster" height="auto" aspect-ratio="0.75" 
          @click="show = !show" title="Afficher les informations">
        </v-img>
      </v-hover>
      <v-card-title teal-title >
        <div>
    
          <div class="headline teal--text">{{ movie.title }}</div>
          
          <span class="black--text">{{ movie.release_date }} - {{ movie.genre }}</span>
        </div>
       
        <div class="text-xs-center">
          
          <v-rating v-model="rating" size="18" dense color="yellow darken-3" background-color="grey darken-1"
            empty-icon="$vuetify.icons.ratingFull" half-increments hover></v-rating>
          <span class="caption">
            {{ rating }} / 5
          </span>
        </div>
      </v-card-title>
      <v-btn icon @click="show = !show" class="pt-0">
        <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
      <v-slide-y-transition>
        <v-card-text v-show="show" class="grey--text pt-0 text-xs-justify">
          {{ movie.synopsys }}<br><br>
          <p class="font-italic"> - Réalisé par {{ movie.director.name }}</p>
          <div></div>
        </v-card-text>
      </v-slide-y-transition>
      <v-divider></v-divider>
      <v-card-actions>
        <router-link :to="{name:'editMovie',params:{id:movie.id}}" tag="button">
          <v-btn flat color="green">Editer</v-btn>
        </router-link>
        <v-btn flat color="red" v-on:click="removeItem">Supprimer</v-btn>        
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
  export default {
    data: () => ({
      /* -- Etablie les valeurs par défaut au chargement de la page -- */
      rating: 0,
      fav: false,
      show: false,
    }),
    props: ['movie'],
    methods: {
      /* -- Méthode permettant de supprimer un film -- */
      removeItem() {
        this.$emit('remove')
      },
      /* -- Méthode permettant d'éditer un film -- */
      editItem() {
        this.$emit('edit', this.movie)
      },
    }
  }
</script>

