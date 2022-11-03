<template>
  <div class="wrapper">
    <RouterLink id="logo" to="/"><img :src="`/images/jorda1.jpg`" /></RouterLink>
    <nav>
      <RouterLink :to="{name: 'home'}">Home </RouterLink>
      <RouterLink :to="{name: 'about'}">About </RouterLink>
      <RouterLink :to="{name: 'addRecipe'}">Add Recipe </RouterLink>
      <RouterLink :to="{ name: 'allRecipes'}">All recipes </RouterLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
  name: 'TheNavigation',
  components: {
    RouterLink,
  }
}
</script>

<style scoped>

  
  #logo img {
    max-width: 2rem;
    border-radius: 50%;
  }
</style>