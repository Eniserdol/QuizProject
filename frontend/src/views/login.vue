<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      backendError: null
    }
  },
  methods: {
    ...mapActions(['login']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password
        })

        this.$router.push('/profile')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
.login
    form(@submit="submitLogin")
      h2 Log in to your account
      label(for="email") E-mail:&nbsp;
        input(v-model="email" id="email" type="email" placeholder="Your email" required)
      label(for="password") Password:&nbsp;
        input(v-model="password" id="password" type="password"  placeholder="Your password" required )
      input(type="submit" value="Log in")
    div(v-if="backendError") {{ backendError }}
    div
      h4 Don't have an account yet? <router-link to="/register">Register</router-link>
</template>

<style lang="scss" scoped>
.login {
  background: #d3e4e4;
  border: 1px solid #42464b;
  border-radius: 6px;
  height: 257px;
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

.login input[type='submit'] {
  background: #28d;
  color: #fff;
  cursor: pointer;
  width: 50%;
  padding: 5px;
  font-size: 0.95em;
}

</style>
