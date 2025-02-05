import toast from 'react-hot-toast'

const getAllFavorites = () => {
  const all = localStorage.getItem('favorites')
  if (all) {
    const favorites = JSON.parse(all)
    console.log(favorites)
    return favorites
  } else {
    console.log([])
    return []
  }
}
const addFavorite = coffee => {
  const favorites = getAllFavorites()
  const isExist = favorites.find(item => item.id == coffee.id)
  if (isExist) return toast.error('Coffee already exists!')
  favorites.push(coffee)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  toast.success('Successfully added!')
}

const removeFavorite = id => {
  const favorites = getAllFavorites()
  const remaining = favorites.filter(coffee => coffee.id != id)
  localStorage.setItem('favorites', JSON.stringify(remaining))
  toast.success('Successfully Removed!')
}

export { addFavorite, getAllFavorites, removeFavorite }
