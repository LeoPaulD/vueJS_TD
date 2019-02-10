
<template>
  <div class="text-xs-center pb-5">
    <v-flex>
      <v-layout>
        <v-layout justify-center>
          <h1 class="pa-3 pt-4 mr-5">Ajouter un film</h1>
        </v-layout>
      </v-layout>
    </v-flex>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form">
          <v-card-text>
            
            <b class=" left">Film</b><br>

            
            <v-text-field ref="title" color="teal" v-model="movie_to_add.title" 
              label="Titre" type="text">
            </v-text-field>
            
            <v-text-field ref="release_date" color="teal" v-model="movie_to_add.release_date" 
              label="Date de sortie" type="text">
            </v-text-field>
            
            
            <v-text-field ref="genre" color="teal" v-model="movie_to_add.genre" 
              label="Genre du film" type="text">
            </v-text-field>
            
            
            <v-text-field ref="language" color="teal" v-model="movie_to_add.language" 
              label="Langue du film" type="text">
            </v-text-field>

            <b class=" left">Liens</b><br>
            
            <v-text-field ref="poster" color="teal" v-model="movie_to_add.poster" 
              label="Affiche du film" type="text">
            </v-text-field>
            

            <b class=" left">Réalisateur</b><br>

            
            <v-text-field ref="director.name" color="teal" v-model="movie_to_add.director.name" 
              label="Nom" type="text">
            </v-text-field>
            
            <v-text-field ref="director.nationality" color="teal" v-model="movie_to_add.director.nationality" 
              label="Nationalité" type="text">
            </v-text-field>
            
            <v-text-field ref="director.birth_date" color="teal" v-model="movie_to_add.director.birth_date" 
              label="Date de naissance" type="text">
            </v-text-field>

            
            
              <b class=" left">Informations complémentaires</b><br>
              <v-textarea ref="synopsys" color="teal" auto-grow v-model="movie_to_add.synopsys" 
                label="Synopsys" type="text" height="auto">
              </v-textarea>
  
          </v-card-text>
          <v-card-actions>

            <router-link :to="{name:'home'}" tag="button">
              <v-btn color="success" flat v-on:click="newmovie">Ajouter</v-btn>
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
        
        movie_to_add: {
          director: {}
        },
        
      }
    },

    methods: {
      
      newmovie: function () {
        
        this.movie_to_add.id = this.movies[this.movies.length - 1].id + 1
        this.movies.push(this.movie_to_add)
      },
      
      go_back: function () {
        this.$router.replace({
          name: "home"
        });
      },
      reset () {
      this.$refs.form.reset()
    }
    },

    computed: {
      
      movie_to_add: function () {
        return this.movies.find(obj => {
          return obj.id == this.$route.params.id;
        })
      }
    }
  }
</script>