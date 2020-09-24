<template>
  <div id="app">
    <Navbar />
    <h1 class="themeTitle">Social Media Dashboard</h1>
    <h4>Total Followers: 23,004</h4>
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
