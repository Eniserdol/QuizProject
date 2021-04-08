<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  }
}
</script>
<template lang="pug">
  #app
    #nav
      router-link(to="/profile") Profile
      router-link(to="/login") Login
      router-link(to="/register") Register
      a(@click="doLogout" href="#") Logout
    router-view
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  max-width: 1040px;
  margin-left: auto;
  width: 100%;
  margin-right: auto;
}
.box {
  padding: 2rem;
  border: 1px solid rgb(51, 51, 51);
  color: #ecf0f1;
  background: #3498db;
  border-radius: 0.3rem;
}

.start-btn {
  display: block;
  cursor: pointer;
  padding: 1rem;
  background: #1abc9c;
  color: chartreuse;
  font-weight: bold;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
}
</style>
