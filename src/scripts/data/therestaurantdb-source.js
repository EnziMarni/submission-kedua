import API_ENDPOINT from '../globals/api-endpoint'

class TheRestaurantDbSource {
  static async listRestaurant () {
    const response = await fetch(API_ENDPOINT.RESTAURANTS)
    const responseJson = await response.json()
    console.log(responseJson.restaurants)
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    console.log(responseJson.restaurant) // Opsional, hanya untuk cek data di konsol.
    return responseJson.restaurant
  }
}

export default TheRestaurantDbSource
