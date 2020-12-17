<template>
  <div id="app" class=" bg-gradient-to-r from-emerald-200 via-teal-400 to-emerald-400 min-h-screen">
    <div>
      <Navigation  class=" bg-yellow-300 rounded-t-md"/>
      <router-view class="bg-white lg:mx-64 rounded-b-md"/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
