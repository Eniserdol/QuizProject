<script>
// @ is an alias to /src
import axios from 'axios'
import QuizCard from '@/components/quiz-card.vue'

export default {
  name: 'Home',
  components: {
    QuizCard
  },
  data() {
    return {
      quizzes: [],
      users: [],
      questions: []
    }
  },
  async created() {
    const quizRequest = await axios.get('/api/quizzes')
    // const userRequest = await axios.get('/api/users')
    // const questionRequest = await axios.get('/api/questions')
    this.quizzes = quizRequest.data
    // this.questions = questionRequest.data
    // this.users = userRequest.data
  }
}
</script>
<template lang="pug">
  .home
    h1 Welcome please choose your quiz
    quiz-card(v-for="quiz in quizzes" :quiz="quiz")

    //- div(v-for="quiz in quizzes") {{quiz.name}} has {{quiz.difficulty}}
    //- div(v-for="user in users") {{user.name}}
    //- div(v-for="question in questions") {{question.text}}
</template>
