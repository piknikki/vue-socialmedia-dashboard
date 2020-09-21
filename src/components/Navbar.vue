<template>
  <div class="navbar">
    <div v-if="darkTheme" class="dark-theme navbar-brand">
      <img class="logo" alt="Components logo" src="../assets/logo1.png">Components
    </div>
    <div v-else class="light-theme navbar-brand">
      <img class="logo" alt="Components logo" src="../assets/logo2.png">Components
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      darkTheme: false
    }
  }
}
</script>

<style scoped>
.logo {
  width: 100px;
  height: 34px;
  margin: 10px;
}

.dark-theme {
  background-color: #043156;
}

.light-theme {
  background-color: #FFFFFF;
}
</style>
