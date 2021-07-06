<template>
  <masonry
    :cols="{ default: 3, 1600: 2, 1100: 1 }"
    :gutter="{ default: '40px' }"
  >
    <CodeCard v-for="card in utilities" :key="card.id" :card="card" />
  </masonry>
</template>

<script>
import CodeCard from '@/components/CodeCard'
import gql from 'graphql-tag'

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
      utilities: []
    }
  },

  apollo: {
    utilities: {
      query: GET_UTILS
    }
  }
}
</script>

<style lang="scss" scoped></style>
