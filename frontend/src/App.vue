<script>
import axios from 'axios'
export default {
  name: 'App',
  async created() {
    console.log((await axios.get('/api/session')).data)
  }
}
</script>
<template lang="pug">
  #app
    router-view
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;

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
  color:#ecf0f1;
  background: #3498db;
  border-radius: 0.3rem;
}

.start-btn {
  display: block;
  cursor: pointer;
  padding:1rem ;
  background:#1abc9c;
  color:chartreuse;
  font-weight: bold;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;

}

</style>
