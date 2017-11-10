<template>
  <div id="app">
   <div class="menu">
     <li>
       <router-link to="/">Quote Of day</router-link>
    </li> 
      <li>
        <router-link to="/quotes">Quotes</router-link> 
      </li>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
