import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  async created() {
    AOS.init();
    if ('user' in localStorage) {
      await store.dispatch('auth/autoLogin')
      var nickname = await this.$store.state.auth.profile.nickname
      await store.dispatch('profiles/getSingleProfile', nickname)
      var ratingsLength = await this.$store.state.profiles.ratingsLength
      if (ratingsLength < 7) {
        router.push({name: 'rating'})
      }
    } else {
      router.push({name: 'landing'})
    }
  },
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
