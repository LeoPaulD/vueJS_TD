
<template>
  <div class="text-xs-center pb-5">
    <h1 class="pa-3 pt-4">Modifier le film</h1>
    <v-layout justify-center>
      
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form">
          <v-card-text>
            
            <b class="left">Film</b><br>

            
            <v-text-field ref="title" color="teal" v-model="movie_to_edit.title" 
              label="Titre" type="text">
            </v-text-field>
            
            <v-text-field ref="relase_date" color="teal" v-model="movie_to_edit.release_date" 
              label="Date de sortie" type="text">
            </v-text-field>
            
            
            <v-text-field ref="genre" color="teal" v-model="movie_to_edit.genre" 
              label="Genre du film" type="text">
            </v-text-field>
          
            
            <v-text-field ref="language" color="teal" v-model="movie_to_edit.release_language" 
              label="Origine film" type="text">
            </v-text-field>
           
            <b class="left">Liens</b><br>

            
            <v-text-field ref="poster" color="teal" v-model="movie_to_edit.poster" 
              label="Affiche du film" type="text">
            </v-text-field>
            
          
            <b class="left">Réalisateur</b><br>

            
            <v-text-field ref="director.name" color="teal" v-model="movie_to_edit.director.name" 
              label="Nom" type="text">
            </v-text-field>
            
            <v-text-field ref="director.nationality" color="teal" v-model="movie_to_edit.director.nationality" 
              label="Nationalité" type="text">
            </v-text-field>
            
            <v-text-field ref="director.birth_date" color="teal" v-model="movie_to_edit.director.birth_date" 
              label="Date de naissance" type="text">
            </v-text-field>

            
            
            
              <b class="left">Informations complémentaires</b><br>
              <v-textarea ref="synopsys" color="teal" auto-grow v-model="movie_to_edit.synopsys" 
                label="Synopsys" type="text" height="auto">
              </v-textarea>
            
          </v-card-text>
          <v-card-actions>
            <router-link :to="{name:'home'}" tag="button">
              <v-btn color="success" flat v-on:click="save">Sauvegarder</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        
        movies: window.shared_data.movies,
        movie: window.shared_data.movies[this.$route.params.id],
      
      }
    },

    methods: {
     
      save: function () {
        this.movie_to_edit = null
      },
    },

    computed: {
      
      movie_to_edit: function () {
        return this.movies.find(obj => {
          return obj.id == this.$route.params.id;
        })
      },
    }
  }
</script>
