

const app = new Vue ({

   el: '#app',

    data: {

      movies: [], //inizializzo una variabile come array vuoto per mettere i movies ottenuti dal db
      search: '', //v-model sulla barra di ricerca per filtrare i risultati
      
    },

    methods: {

      filterMovie() {

        axios.get('https://api.themoviedb.org/3/search/movie?', {
          params: {
            api_key: '8c77d5df1eea7f2bd6be310c611fe245',
            query: this.search
          }
        })
        .then(response => {
          console.log(response.data.results);
          this.movies = response.data.results
        })
        .catch(error => {
          console.log(error);
        })
        
      } 

    } 

})