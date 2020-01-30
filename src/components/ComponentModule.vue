<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="navigate();">Move to new app</div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'ComponentModule',
  data () {
    return {
      msg: 'This is second page'
    }
  },
  methods: {
    navigate() {
      router.push({ name: "HelloWorld" });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
