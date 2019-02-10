<template>
  <v-app>
    <div>
  
      <v-toolbar dark color="teal">
        
        <v-toolbar-title class="white--text"><router-link :to="{name:'home'}" tag="button">Netflux</router-link></v-toolbar-title>
        
        <router-link :to="{name:'newMovie'}" tag="button"><v-btn color="success" class="white--text">Ajouter un film</v-btn></router-link>
      </v-toolbar>
      <router-view></router-view>
      
      <v-footer height="auto">
       
      </v-footer>
    </div>
  </v-app>
</template>

