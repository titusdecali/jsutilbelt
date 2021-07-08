<template>
  <masonry
    class="list"
    :class="{ gap: selected.length }"
    :cols="{ default: 3, 1600: 2, 1100: 1 }"
    :gutter="{ default: '40px' }"
  >
    <!-- Download List -->
    <div class="download">
      <button
        v-if="selected.length"
        class="btn btn-medium"
        @click="downloadUtils"
      >
        Download Utils.js
      </button>
    </div>

    <!-- Util Cards -->
    <CodeCard
      v-for="card in utilities"
      :key="card.id"
      :added="selected.some((obj) => obj.id === card.id)"
      :card="card"
      @added="addToList(card)"
    />
  </masonry>
</template>

<script>
import CodeCard from '@/components/CodeCard'
import gql from 'graphql-tag'
import { saveAs } from 'file-saver'

const GET_UTILS = gql`
  query getUtils {
    utilities {
      id
      code
      category
      input
      output
      subtitle
      title
    }
  }
`

export default {
  name: 'List',

  components: {
    CodeCard
  },

  data() {
    return {
      saveAs,

      // User-selected cards
      selected: [],
      // Utilities from Hasura
      utilities: []
    }
  },

  mounted() {
    // const utils = localStorage.getItem('userUtils')
    // if (utils && utils.length) {
    //   this.selected = utils
    // }
  },

  methods: {
    addToList(card) {
      if (this.selected.some((obj) => obj.id === card.id)) {
        this.selected = this.selected.filter((obj) => obj.id !== card.id)
        this.$toast.warning('Removed from list')
      } else {
        this.selected.push(card)
        // Reset localStorage
        localStorage.removeItem('userUtils')
        // Then bind user selections
        localStorage.setItem('userUtils', this.selected)
        this.$toast.success('Added to list')
      }
    },

    // Save functions into utils.js file
    downloadUtils() {
      // !FileSaver DOCS: https://github.com/eligrey/FileSaver.js/
      const utilText = `
          class Utils {
            // Global Utilities
            // How to use global utility functions: TODO: Add link here
           ${this.selected.map(
             // eslint-disable-next-line prettier/prettier
             (util) => `

             
             // **********************************************************
           // ${util.title}
           ${util.code}`
           )}
          }
          export default new Utils()
      `
      const utilBlob = new Blob(
        [
          utilText
            .replace(/},/g, '}')
            .replace(/} ,/g, '}')
            .replace(/ +(?= )/g, '')
        ],
        {
          type: 'text/plain;charset=utf-8'
        }
      )
      saveAs(utilBlob, 'utils.js')
    }
  },

  apollo: {
    utilities: {
      query: GET_UTILS
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  transition: var(--ease);
}

.gap {
  margin-top: 40px;
}

.download {
  position: absolute;
  top: 90px;
  right: 20px;
  width: 100%;
  text-align: right;
  display: inline-block;
  margin-bottom: 15px;
}
</style>
