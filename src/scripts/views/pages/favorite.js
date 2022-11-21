import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
      <h1> Favorite Restaurants </h1>
 <div id="restaurants" class="restaurants" tabindex="0">
 
     </div>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    const restaurantContainer = document.querySelector('#restaurants')
    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto)
    })
  }
}

export default Favorite
