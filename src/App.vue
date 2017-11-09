<template>
  <div id="app">
    <router-link to="/">Quote Of day</router-link>
    <router-link to="/quotes">Quotes</router-link> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
