<template>
  <div>
    <div class="columns">
      <div v-for="profile in smData" class="column" :key="profile">
        <div class="card">
          {{ profile.userName }}
          {{ profile.platformName }}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import smData from '../assets/smData.json'
export default {
  name: 'Dashboard',
  data () {
    return {
      smData: smData[0].profiles
    }
  }
}

</script>

<style scoped>

</style>
