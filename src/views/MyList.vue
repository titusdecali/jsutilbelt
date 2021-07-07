<template>
  <div>MY LIST</div>
</template>

<script>
import { saveAs } from 'file-saver'

export default {
  name: 'MyList',

  data() {
    return {
      saveAs
    }
  },

  methods: {
    // Save functions into utils.js file
    // !FileSaver DOCS: https://github.com/eligrey/FileSaver.js/
    save() {
      var utilText = new Blob(
        [
          `
          class Utils {
            // Global Utilities
            // How to use global utility functions: TODO: Add link here
            // ***************************************************************
            // ${this.card.title}
            ${this.card.code}
          }

          export default new Utils()      
      `
        ],
        {
          type: 'text/plain;charset=utf-8'
        }
      )
      saveAs(utilText, 'utils.js')
    }
  }
}
</script>

<style lang="scss" scoped></style>
