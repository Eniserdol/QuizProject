<script>
export default {
  name: 'QuestionCard',
  props: ['question'],
  data() {
    return {}
  }
}
</script>
<template lang="pug">
.box
  h4 Category: {{question.category}}
  h2 Question: {{ question.text}}

  h2 Choices:
  ul
    li(v-for="choice in question.choices")
      input(type="radio" :name="`${question._id}-choice`")
      |{{choice}}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid rgb(51, 51, 51);
  background: rgb(194, 172, 194);
  border-radius: 0.3rem;
}
</style>
