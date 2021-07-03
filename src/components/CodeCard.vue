<template>
  <div class="card">
    <IconAddUtil class="add-icon" @click="addToMyList" />
    <h3 class="title">{{ title }}</h3>
    <h4 class="sub-title">{{ subTitle }}</h4>

    <CodeBox :code="code" class="code" />
  </div>
</template>

<script>
import CodeBox from '@/components/CodeBox'
import IconAddUtil from '@/components/icons/AddUtil'

export default {
  name: 'CodeCard',

  components: {
    CodeBox,
    IconAddUtil
  },

  props: {
    title: {
      type: String,
      default: 'DEFAULT TITLE'
    },
    subTitle: {
      type: String,
      default: 'DEFAULT SUBTITLE'
    },
    code: {
      type: String,
      required: true
    }
  },

  methods: {
    addToMyList() {
      alert('Add to my list!')
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 50px;
  user-select: none;
  position: relative;
  min-height: 225px;
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  transition: var(--bounce);
  padding: 0px 10px;
  box-shadow: var(--card-shadow);
  overflow: hidden;
  &:hover {
    box-shadow: var(--card-shadow-hover);
  }
  border-radius: 8px;

  .title {
    margin-top: 15px;
    margin-left: 5px;
    width: fit-content;
    cursor: pointer;
    padding-right: 50px;
  }

  .sub-title {
    margin-top: 10px;
    margin-left: 5px;
  }

  .add-icon {
    position: absolute;
    width: 40px;
    right: 15px;
    top: 10px;
  }

  .code {
    cursor: text;
    position: absolute;
    bottom: -11px;
    left: 0;
    right: -10px;
  }
}
</style>
