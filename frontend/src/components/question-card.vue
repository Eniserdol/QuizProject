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
    li(v-for="(choice, index) in question.choices")
      input(type="radio" :id="`q_${question._id}_choice_${index}`" :name="`q_${question._id}_choice`" :value="index")
      label(:for="`q_${question._id}_choice_${index}`") {{choice}}
</template>

<style lang="scss" scoped></style>
