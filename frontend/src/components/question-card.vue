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
.box
  h4 Category: {{question.category}}
  h2 Question: {{decodeHtmlEntity(question.text)}}
  h2 Choices:
  ul
    li(v-for="(choice, index) in question.choices")
      input(type="radio" :id="`q_${question._id}_choice_${index}`" :name="`q_${question._id}_choice`" :value="index")
      label(:for="`q_${question._id}_choice_${index}`") {{choice}}
    h4(v-if='submitted') Correct Answer= {{question.correct_answer}}
</template>

<style lang="scss" scoped></style>
