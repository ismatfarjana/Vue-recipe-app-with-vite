<template>
  <div class="wrapper">
    <nav>
      <RouterLink :to="{name: 'home'}">Home </RouterLink>
      <RouterLink :to="{name: 'about'}">About </RouterLink>
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