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
      quiz: undefined,
      score: false,
      submitted: false
    }
  },
  async created() {
    this.quiz = await this.fetchQuiz(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchQuiz']),
    submit(event) {
      // e.preventDefault()
      console.log(this.$refs.form)
      var data = new FormData(this.$refs.form)
      var output = {}

      for (const entry of data) {
        output[entry[0].split('_')[1]] = entry[1]
      }
      event.preventDefault()

      axios
        .post(`/api/quizzes/${this.$route.params.id}/control`, output)
        .then(({ data }) => {
          let newScore = 0
          Object.values(data).map(q => {
            if (q) {
              newScore++
            }
          })
          this.score = newScore
          this.submitted = true
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<template lang="pug">
  .container(v-if="quiz")
    h3 Please complete your quiz
    form(ref="form" @submit="submit")
      question-card(v-for="question in quiz.questions" :question='question' :submitted="submitted" )
      input.btn.btn-success(type='submit', value='Get Result/Submit')
    .results
      p(v-if="submitted") score={{score}}

</template>
