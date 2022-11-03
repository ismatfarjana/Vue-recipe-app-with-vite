<template>
  <div>
    <TheNavigation />
    <div class="container">
      <RouterView />
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'

export default {
  components: {
    RouterView,
    TheNavigation
  }
}
</script>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.wrapper {
  display: flex;
  /* place-items: flex-start; */
  flex-wrap: wrap;
  width: 100%;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a.router-link-exact-active {
  color: var(--color-text);
  background-color: rgba(241, 240, 126, 0.455);
}
nav a:hover {
  color: var(--color-text);
  background-color: rgb(248, 114, 114);
}
</style>
