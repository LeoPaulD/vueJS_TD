import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import app from './app.vue' //fichier app.vue local
import MovieItemComponent from './components/movieitem.vue'
import home from './pages/home.vue' 
import editMovie from './pages/edit.vue' 
import newMovie from './pages/new.vue' 
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.component('movie-item', MovieItemComponent);
Vue.use(VueRouter);
Vue.use(Vuetify)


window.shared_data = {
  movies : [
    {
        id: 0,
        title: "L'étrange noël de M. Jack",
        release_date: 1994,
        
        language: "Américain",
        
        director: { 
            name: "Henry Selick",
            nationality: "Américain",
            birth_date: "30/11/1952",
          },
        genre: "Fantastique",
        poster: "https://image.noelshack.com/fichiers/2019/06/6/1549740154-noel.jpeg",
        synopsys: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
    },
    {
      id: 1,
      title: "Interstellar",
      release_date: 2014,
      language: "Americain",
      director: { 
          name: "Christopher Nolan",
          nationality: "Américain",
          birth_date: "20/07/1970",
        },
      genre: "Action",
      poster: "https://image.noelshack.com/fichiers/2019/06/6/1549740217-inter.jpg",
      synopsys: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver."
  },
]
}

/* -- Routes -- */
const routes = [
  { path: '/', component: home, name: "home" },
  { path: '/new', component: newMovie, name: "newMovie" },
  { path: '/edit/:id', component: editMovie, name: "editMovie" },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  data: () => ({
    show: false
  }),
  render: h => h(app),
  router
})

