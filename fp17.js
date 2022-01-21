function getRating(watchList){
    var averageRating;
    const rating = watchList
      .filter(obj => obj.Director === "Christopher Nolan")
      .map(obj => Number(obj.imdbRating));
    averageRating = rating.reduce((accum, curr) => accum + curr)/rating.length;
    return averageRating;
  }