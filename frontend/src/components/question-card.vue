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
  h2 Question: {{ question.text}}
  .box
    h2 Choices: {{question.choices}}

</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid rgb(51, 51, 51);
  background: rgb(194, 172, 194);
  border-radius: 0.3rem;
}
</style>
