<template>
  <div class="card">
    <div @click="emitAdded">
      <transition-group name="fade" mode="out-in">
        <IconAddUtil v-show="!added" :key="1" class="add-icon" />
        <IconRemoveUtil v-show="added" :key="2" class="remove-icon" />
      </transition-group>
    </div>
    <h3 class="title">{{ card.title }}</h3>
    <h4 class="sub-title">{{ card.subtitle }}</h4>

    <CodeBox :code="prettyJs(card.code, options)" class="code" />
    <div class="io">
      <span><b>Inputs:</b> {{ card.input }}</span>
      <span><b>Outputs:</b> {{ card.output }} </span>
    </div>
  </div>
</template>

<script>
import CodeBox from '@/components/CodeBox'
import IconAddUtil from '@/components/icons/AddUtil'
import IconRemoveUtil from '@/components/icons/RemoveUtil'
import prettyJs from 'pretty-js'

export default {
  name: 'CodeCard',

  components: {
    CodeBox,
    IconAddUtil,
    IconRemoveUtil
  },

  props: {
    card: {
      type: Object,
      required: true
    },
    added: {
      type: Boolean,
      default: false
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
    emitAdded() {
      this.$emit('added', this.card)
    }
  }
}
</script>

<style lang="scss" scoped>
pre {
  margin-bottom: 0px !important;
}
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

  .remove-icon {
    position: absolute;
    width: 35px;
    right: 15px;
    top: 15px;
  }

  .code {
    margin-bottom: 5px;
    overflow-x: auto;
    cursor: text;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 10px;
    width: 100%;
  }

  .io {
    padding: 0px 5px 10px 5px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
