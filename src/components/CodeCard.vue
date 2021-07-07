<template>
  <div class="card">
    <IconAddUtil class="add-icon" @click="addToMyList" />
    <h3 class="title">{{ card.title }}</h3>
    <h4 class="sub-title">{{ card.subtitle }}</h4>

    <CodeBox :code="prettyJs(card.code, options)" class="code" />
    <!-- <button @click="save">TEST</button> -->
  </div>
</template>

<script>
import CodeBox from '@/components/CodeBox'
import IconAddUtil from '@/components/icons/AddUtil'
import prettyJs from 'pretty-js'

export default {
  name: 'CodeCard',

  components: {
    CodeBox,
    IconAddUtil
  },

  props: {
    card: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      prettyJs,
      // PrettyJs Options
      options: {
        indent: '\t', // Switch to tabs for indentation
        newline: '\r\n', // Windows-style newlines
        noSpaceAfterFunction: true,
        convertStrings: 'double'
      }
    }
  },

  methods: {
    addToMyList() {
      // Save snippets to localStorage, recall @app load
      alert('Add to my list!' + this.card.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 50px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  transition: var(--bounce);
  padding: 0px 10px;
  box-shadow: var(--card-shadow);
  &:hover {
    box-shadow: var(--card-shadow-hover);
  }
  border-radius: 8px;

  .title {
    user-select: none;
    margin-top: 15px;
    margin-left: 5px;
    margin-bottom: -16px;
    width: fit-content;
    cursor: pointer;
    padding-top: 10px;
    padding-right: 50px;
    font-weight: 700;
  }

  .sub-title {
    user-select: none;
    margin-left: 5px;
    font-weight: light;
  }

  .add-icon {
    position: absolute;
    width: 35px;
    right: 15px;
    top: 2px;
  }

  .code {
    overflow-x: auto;
    cursor: text;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 10px;
    width: 100%;
  }
}
</style>
