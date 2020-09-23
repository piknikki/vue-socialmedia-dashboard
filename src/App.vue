<template>
  <div id="app">
    <Navbar />
    <Dashboard />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Dashboard from '@/components/Dashboard'

export default {
  name: 'App',
  components: {
    Dashboard,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-size: 2rem;
}
</style>
