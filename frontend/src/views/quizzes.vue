<script>
// @ is an alias to /src
import axios from 'axios'
import QuizCard from '@/components/quiz-card.vue'
import Counter from '@/components/counter.vue'

export default {
  name: 'Quizzes',
  components: {
    QuizCard,
    Counter
  },
  data() {
    return {
      quizzes: []
    }
  },
  async created() {
    const quizRequest = await axios.get('/api/quizzes')
    this.quizzes = quizRequest.data
  }
}
</script>
<template lang="pug">
  .quiz
    h1 Please choose your quiz
      quiz-card(v-for="quiz in quizzes" :quiz='quiz')
    Counter
</template>
