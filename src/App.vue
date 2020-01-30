<template>
  <div id="app">
    <div><img class="img-logo" src="./assets/logo-new.png"></div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img-logo {
    height: 50px;
    float: left;
    margin-top: -50px;
}
</style>
