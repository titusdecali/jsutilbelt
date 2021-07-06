<template>
  <div class="code-box">
    <CodeHighlight language="javascript">
      {{ code }}
    </CodeHighlight>
  </div>
</template>

<script>
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue'
import 'vue-code-highlight/themes/duotone-sea.css'
import 'vue-code-highlight/themes/window.css'

export default {
  name: 'CodeBox',
  components: {
    CodeHighlight
  },

  props: {
    code: {
      type: String,
      default: 'NO CODE HERE'
    }
  }
}
</script>

<style lang="scss">
.code-box {
  min-height: fit-content !important;
  position: relative;
}

// Styles to override vue-code-highlight
div pre {
  box-sizing: border-box;
  position: relative;
  left: -5px !important;
  padding: 20px 10px 15px 15px !important;
  background-image: none !important;
  width: fit-content !important;
  box-shadow: none !important;
  border-radius: 0px !important;
  width: 100%;
  min-width: 100%;
}
</style>
