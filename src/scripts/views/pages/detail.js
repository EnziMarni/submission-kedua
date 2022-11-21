import UrlParser from '../../routes/url-parser'
import TheRestaurantDbSource from '../../data/therestaurantdb-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const Detail = {
  async render () {
    return `
      <div id="detailRestaurant" class="restaurantDetail"  tabindex="0"></div>
      <div id=likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id)
    const restaurantContainer = document.querySelector('#detailRestaurant')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    const likeButtonContainer = document.createElement('div')
    likeButtonContainer.id = 'likeButtonContainer'
    restaurantContainer.append(likeButtonContainer)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city
      }
    })
  }
}

export default Detail
