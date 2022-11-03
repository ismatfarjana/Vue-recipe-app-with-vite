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
.container {
  padding-top: 2rem;
}
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
  align-items: center;
  flex-wrap: wrap;
  background-color: rgb(4, 63, 43);
  padding: 1rem;
  width: 100%;
  left: 0;
  top: 0;
    position: fixed;
    /* z-index: 1000; */
}


nav a {
  display: inline-block;
  color:beige;
  padding: 0 1rem;
  margin: 0 1rem;
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
