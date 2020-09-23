<template>
  <div class="navbar">
    <div v-if="darkTheme" class="dark-theme navbar-brand">
      <img class="logo" alt="Components logo" src="../assets/logo1.png">Components

      <div class="field">
        <input @click="darkTheme = !darkTheme" id="switchRoundedDefault" type="checkbox" name="switchRoundedDefault" class="switch is-rounded" checked="checked">
        <label for="switchRoundedDefault">Dark Mode</label>
      </div>
      <br>
    <span class="themeTitle">  Social Media Dashboard</span>
    </div>

    <div v-else class="light-theme navbar-brand">
      <img class="logo" alt="Components logo" src="../assets/logo2.png">Components

      <div class="field">
        <input @click="darkTheme = !darkTheme" id="switchRoundedOutlinedDefault" type="checkbox" name="switchRoundedOutlinedDefault" class="switch is-rounded is-outlined" >
        <label for="switchRoundedOutlinedDefault">Light Mode</label>
      </div>
      <br>
      <span class="themeTitle">  Social Media Dashboard</span>
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

#app {

}

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

input.field {
  float: right;
}
</style>
