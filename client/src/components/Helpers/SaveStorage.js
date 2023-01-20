export const saveStorage = (favorite) => {
  let favorites = [];
  // Verifica si hay favoritos en el localStorage
  if (localStorage.getItem("favorites")) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  } 
  const exist = favorites.some((fav) => fav.id === favorite.id);
  if(!exist || favorites.length === 0) {
    favorites.push(favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  //delete 
  if(exist) {
    favorites = favorites.filter((fav) => fav.id !== favorite.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  return favorites;
};
