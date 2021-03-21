<script>
// @ is an alias to /src
import axios from 'axios'
import QuestionCard from '@/components/question-card.vue'
import Counter from '@/components/counter.vue'
import { mapActions } from 'vuex'

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
    this.quiz = await this.fetchQuiz(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchQuiz'])
  }
}
</script>
<template lang="pug">
  .quiz(v-if="quiz")
    h1 Please complete your quiz
      question-card(v-for="question in quiz.questions" :question='question')

    Counter

</template>
