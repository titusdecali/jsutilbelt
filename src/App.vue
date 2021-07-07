<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view class="router-view" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer'
import Tag from '../public/tag'
import '@/assets/global.scss'

export default {
  components: {
    Footer,
    Header
  },
  data() {
    return {
      Tag
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-items: center;
  flex-direction: column;
  height: calc(100vh - 30px);
}

.router-view {
  flex: 1;
  box-sizing: border-box;
  padding: 50px 20px 50px 20px !important;
  width: 100vw;
  margin: 0 auto;
  margin-left: -30px !important;
}
</style>
