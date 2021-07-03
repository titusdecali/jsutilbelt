<template>
  <masonry
    :cols="{ default: 3, 1600: 2, 1100: 1 }"
    :gutter="{ default: '40px' }"
  >
    <CodeCard />
    <CodeCard />
    <CodeCard />
    <CodeCard />
    <CodeCard />
    <CodeCard />
    <CodeCard />
    <CodeCard />
  </masonry>
</template>

<script>
import CodeCard from '@/components/CodeCard'

export default {
  name: 'List',

  components: {
    CodeCard
  }
}
</script>

<style lang="scss" scoped></style>
