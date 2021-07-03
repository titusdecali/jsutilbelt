<template>
  <!-- Wrapping div is necessary -->
  <div class="theme-switch-position">
    <input
      id="theme-switch"
      v-model="darkMode"
      type="checkbox"
      class="theme-switch"
    />
    <label for="theme-switch">
      <div v-if="darkMode === true" class="mode-icon">
        <img
          class="sun greyscale"
          alt="light mode on"
          src="@/assets/images/sun.svg"
          width="40"
        />
      </div>
      <span v-else>
        <img
          alt="dark mode on"
          class="moon greyscale"
          src="@/assets/images/moon.svg"
          width="36"
        />
      </span>
    </label>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      darkMode: true
    }
  },

  computed: {
    // ...mapGetters(['getDarkMode'])
  },

  watch: {
    darkMode: function () {
      // Add/remove class on html tag
      let htmlElement = document.documentElement

      if (this.darkMode) {
        localStorage.setItem('theme', 'dark')
        htmlElement.setAttribute('theme', 'dark')
        // Set darkMode to true in Vuex $store
        this.$store.commit('setDarkMode', true)
      } else {
        localStorage.setItem('theme', 'light')
        htmlElement.setAttribute('theme', 'light')
        // Set darkMode to false in Vuex $store
        this.$store.commit('setDarkMode', false)
      }
    }
  },

  mounted() {
    // check for active theme
    let htmlElement = document.documentElement
    let theme = localStorage.getItem('theme')

    if (!theme || theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark')
      this.darkMode = true
    } else {
      htmlElement.setAttribute('theme', 'light')
      this.darkMode = false
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-switch {
  transition: all 0.4s ease-in-out;
}

.mode-icon {
  width: 30px;
  height: 30px;

  .moon {
    position: relative;
    bottom: 7px;
    bottom: 3px;
    left: 3px;

    &:hover {
      transform-origin: 17px 17px;
      transform: rotate(18deg);
    }
  }

  .sun {
    position: relative;
    bottom: 5px;
    left: 0px;
    &:hover {
      transform-origin: 20px 20px;
      transform: rotate(18deg);
    }
  }
}
</style>
