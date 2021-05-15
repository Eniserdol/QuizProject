<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      name: '',
      age: null,
      email: '',
      password: '',

      backendError: null
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          age: this.age,
          email: this.email,
          password: this.password
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
.register
    form( @submit="submitLogin")
      h1 Create a new account
      label(for="name") Name:&nbsp;
        input(v-model="name" id="name" type="text" placeholder="Your name" required)
      label(for="age") Age:&nbsp;
        input(v-model="age" id="age" type="number" placeholder="Your age" required)
      label(for="email") Email:&nbsp;
        input(v-model="email" id="email" type="email" placeholder="Your email" required)
      label(for="password") Password:&nbsp;
        input(v-model="password" id="password" type="password" placeholder="Your password" required)
      input(type="submit" value="Register")
    div(v-if="backendError") {{ backendError }}
    div
     h4 Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>

.register {
  background: #d3e4e4;
  border: 1px solid #42464b;
  border-radius: 6px;
  height: 400px;
  margin: 20px auto 0;
  width: 400px;
  text-align: center;
}
label {
  border-top: 1px solid #a6abaf;
  border-bottom: 1px solid #a6abaf;
  border-radius: 6px 6px 0 0;
  display: block;
  height: 43px;
  padding-top: 14px;
  margin: 0;
  text-align: center;
}

.register input[type='submit'] {
  background: #28d;
  color: #fff;
  cursor: pointer;
  width: 50%;
  padding: 5px;
  font-size: 0.95em;
}

</style>
</style>
