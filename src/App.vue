<template>
  <NavBar/>
  <SlideShow/>
  
</template>

<script>
import NavBar from './components/NavBar.vue';
import SlideShow from './components/SlideShow.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    SlideShow
  }
}
</script>

<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
