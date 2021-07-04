import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Masonry Card Layout
import VueMasonry from 'vue-masonry-css'

// Apollo, GraphQL
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'https://jsutilbelt.hasura.app/v1/graphql'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  headers: {
    'x-hasura-admin-secret':
      '019oihdn6gFr5IA30ZrM0gcIWBnkuiY0GoeFvu2ZAY95TCAB12tIMaK9YdF6k0qZ'
  }
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueMasonry)

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App)
}).$mount('#app')
