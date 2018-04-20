<template>
  <div id="app">
    <tabs></tabs>
    <router-view/>
  </div>
</template>

<script>
import tabs from './components/tabs'
export default {
  name: 'App',
   components: {
    tabs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
