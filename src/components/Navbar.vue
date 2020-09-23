<template>
  <div class="navbar">
    <div v-if="darkTheme" class="dark-theme navbar-brand">
      <div class="navbar-start">
        <img class="logo" alt="Components logo" src="../assets/logo1.png">Components
      </div>
      <div class="navbar-end">
        <div class="field">
        <span class="toggle" @click="darkTheme = !darkTheme" id="switchRoundedDefault" name="switchRoundedDefault">
          <i class="fal fa-toggle-on"></i>
        </span>
          <label for="switchRoundedDefault">Dark Mode</label>
        </div>
      </div>
    </div>

    <div v-else class="light-theme navbar-brand">
      <div class="navbar-start">
        <img class="logo" alt="Components logo" src="../assets/logo2.png">Components
      </div>
      <div class="navbar-end">
        <div class="field">
          <span class="toggle" @click="darkTheme = !darkTheme" id="switchRoundedOutlinedDefault" name="switchRoundedOutlinedDefault" >
          <i class="fal fa-toggle-off"></i>
          </span>
          <label for="switchRoundedOutlinedDefault">Light Mode</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      darkTheme: true
    }
  }
}
</script>

<style>
.logo {
  width: 100px;
  height: 34px;
  margin: 10px;
}

.dark-theme {
  background-color: #043156;
  color: #22C2C6;
}

.light-theme {
  background-color: #FFFFFF;
  color: #043156;
}

.toggle {
  margin: 10px;
}

.navbar-end {
  float: right;
}
</style>
