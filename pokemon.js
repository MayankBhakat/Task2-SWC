const API_KEY ='api_key=c2104a73a2f0e3e80b6da4d04ccbe68c';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL=BASE_URL +'/discover/movie?sort_by=popularity.desc&'+API_KEY
const IMG_URL='http://image.tmdb.org/t/p/w500';
const searchURL=BASE_URL +'/search/movie?'+API_KEY;


    for(let i=0;i<20;i++){
        fetch(API_URL)
            .then(response => response.json())
            .then(data => console.log(data.results[i].original_title));}

            

            

    