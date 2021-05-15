<script>
export default {
  name: 'QuestionCard',
  props: ['question','submitted'],
  data() {
    return {}
  },
  methods:{
    decodeHtmlEntity(str) {
    const txt = document.createElement('textarea');
	  txt.innerHTML = str;
	  return txt.value;
  }
}
}

</script>
<template lang="pug">
.container
  h4 Category: {{question.category}}
   .box
     Label {{decodeHtmlEntity(question.text)}}
  .choices
    ul
    div(v-for="(choice, index) in question.choices")
      input(type="radio" :id="`q_${question._id}_choice_${index}`" :name="`q_${question._id}_choice`" :value="index")
      label(:for="`q_${question._id}_choice_${index}`") {{choice}}
  .correct
    div(v-if='submitted') Correct Answer= {{question.correct_answer}}
</template>

<style lang="scss" scoped>

</style>
