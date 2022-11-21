const ENGLISH = 'english'
const INDONESIA = 'indonesia'
const JAPAN = 'japan'

const sayHello = (language) => {
  switch (language) {
    case ENGLISH:
      return 'Hello How Are You?'
    case INDONESIA:
      return 'Halo! Apa kabar?'
    case JAPAN:
      return 'Konnichiwa! Ogenkidesuka?'
    default:
      return 'Hello!'
  }
}
console.log(sayHello(INDONESIA))
