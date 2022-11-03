<template>
  <main>
    <h1>All recipies</h1>
    <div class="recipes">
      <RouterLink
        v-for="recipe in recipes" 
        :key="recipe.id"
        :to="{ name: 'recipe.show', params: { id: recipe.id, slug: recipe.slug } }"
      >
      <h2>{{ recipe.name }}</h2>
      <img :src="`/images/${recipe.image}`" :alt="recipe.name" width="200" height="200" gravity="auto" crop="scale"/>
      </RouterLink>
    </div>
  </main>
</template>

<script lang="ts">
import sourceData from '@/data.json';

export default {
  name: "AllRecipesView",
  data() {
    return {
      recipes: sourceData.recipes
    }
  }
}
</script>

<style scoped>
main {
  padding-top: 30px;
}
.recipes {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}
.recipes h2 {
  text-align: left;
}
.recipes img {
  margin-right: 2rem
}
</style>