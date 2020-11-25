

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
            query: this.search,
            language: 'it-IT'
          }
        })
        .then(response => {
          this.movies = response.data.results;
          this.movieVote = response.data.results.vote_average;
        })
        .catch(error => {
          console.log(error);
        })
        
      },
      
      
      getVote(vote) {
        return Math.round((vote / 2));
      }

    } 

})