<template lang="pug">
  .home
    img(alt='Vue logo' src='../assets/logo.png')
    HelloWorld(msg='Welcome to Your Vue.js App')
    div(v-for="quiz in quizzes") {{quiz.name}}
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      quizzes: []
    }
  },
  async created() {
    const quizRequest = await axios.get('/api/quiz')
    this.quiz = quizRequest.data
  }
}
</script>
