<template>
  <div class="card">
    <IconAddUtil class="add-icon" @click="addToMyList" />
    <h3 class="title">{{ card.title }}</h3>
    <h4 class="sub-title">{{ card.subtitle }}</h4>

    <CodeBox :code="card.code" class="code" />
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
    card: {
      type: Object,
      required: true
    }
  },

  methods: {
    addToMyList() {
      alert('Add to my list!' + this.card.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 50px;
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
    user-select: none;
    margin-top: 15px;
    margin-left: 5px;
    margin-bottom: -16px;
    width: fit-content;
    cursor: pointer;
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
    width: 40px;
    right: 15px;
    top: 10px;
  }

  .code {
    overflow-x: scroll;
    cursor: text;
    position: absolute;
    bottom: -11px;
    left: 0;
    right: -10px;
  }
}
</style>
