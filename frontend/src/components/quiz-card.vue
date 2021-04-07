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
  h2 {{quiz.name}}
  h3 {{quiz.difficulty}}
  router-link.start-btn(:to="`/quizzes/${quiz.id}`") Start



</template>
