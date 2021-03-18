<script>
// @ is an alias to /src
import axios from 'axios'
import QuizCard from '@/components/quiz-card.vue'

export default {
  name: 'Quiz',
  components: {
    QuizCard
  },
  data() {
    return {
      quizzes: [],
      
    }
  },
  async created() {
    const quizRequest = await axios.get('/api/quizzes')
    this.quizzes = quizRequest.data
    // this.questions = questionRequest.data
    // this.users = userRequest.data
  }
}
</script>
<template lang="pug">
  .quiz
    h1 Please choose your quiz
    quiz-card(v-for="quiz in quizzes" :quiz="quiz")
</template>
