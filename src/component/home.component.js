export default {
  name: 'Home',
  template: require('./home.template'),
  style: require('./home.style'),
  props: {
    home: Object
  },
  data(){
    return {
      name: 'Home'
    }
  }
}