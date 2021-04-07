<script>
// @ is an alias to /src
import axios from 'axios'
import QuizCard from '@/components/quiz-card.vue'
import Counter from '@/components/counter.vue'
import { mapActions } from 'vuex'

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
    this.quizzes = await this.fetchQuizzes()
  },

  methods: {
    ...mapActions(['fetchQuizzes'])
  }
}
</script>
<template lang="pug">
  .container
    h1 Please choose your quiz
    .quizzes
      quiz-card(v-for="quiz in quizzes" :quiz='quiz')
    Counter
</template>
<style>
.quizzes{
  display: flex;
  gap:1rem;
  justify-content: center;

}
</style>