async function fetchRecipes() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
      const jsonData = await response.json();
      const movies = jsonData.results;
      movies.forEach(movie => {
        const { poster_path, title, release_date, vote_average } = movie; 
        const posterUrl = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://via.placeholder.com/500x750?text=No+poster';

      });
      return movies
    } catch (error) {
      console.error("Erreur lors du chargement des films:", error);
    }
  }
