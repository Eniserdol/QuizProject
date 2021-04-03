<script>
export default {
  name: 'QuizCard',
  props: ['quiz'],
  data() {
    return {}
  }
}
</script>
<template lang="pug">
form.box
  h2
  router-link(:to="`/quizzes/${quiz.id}`") {{quiz.name}} {{quiz.difficulty}}


</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid rgb(51, 51, 51);
  background: rgb(194, 172, 194);
  border-radius: 0.3rem;
}
</style>
