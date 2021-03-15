<script>
export default {
  name: 'QuizCard',
  props: ['quiz'],
  data() {}
}
</script>

<template lang="pug">
.box
  h2  {{ quiz.name }} {{quiz.difficulty}}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid rgb(51, 51, 51);
  background: rgb(194, 172, 194);
  border-radius: 0.3rem;
}
</style>
