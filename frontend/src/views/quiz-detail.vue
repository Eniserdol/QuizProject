<script>
// @ is an alias to /src
import axios from 'axios'
import QuestionCard from '@/components/question-card.vue'
import Counter from '@/components/counter.vue'

export default {
  name: 'Quiz',
  components: {
    Counter,
    QuestionCard
  },
  data() {
    return {
      quiz: undefined
    }
  },
  async created() {
    const quizRequest = await axios.get(`/api/quizzes/${this.$route.params.id}`)
    this.quiz = quizRequest.data
  }
}
</script>
<template lang="pug">
  .quiz(v-if="quiz")
    h1 Please complete your quiz
      question-card(v-for="question in quiz.questions" :question='question')

    Counter

</template>
