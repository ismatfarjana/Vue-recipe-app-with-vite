<template>
  <section class="recipe">
    <div class="recipe-body">
      <h2>{{ recipe?.name }}</h2>
      <GoBack />
      <img :src="`/images/${recipe?.image}`" :alt="recipe?.name">
    </div>
    <div class="recipe-body">
      <h3>Ingredients</h3>
      <p>{{ recipe?.ingredients }}</p>
      <h3>Steps</h3>
      <p>{{ recipe?.steps }}</p>
      
      <h4>Add comments</h4>
      <p>comming soon</p>
    </div>
  </section>
</template>

<script lang="ts">
import sourceData from '@/data.json';
import GoBack from '@/components/GoBack.vue'

export default {
  components: {
    GoBack
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    recipe() {
      const recipeList = sourceData?.recipes;
      return recipeList.find((recipe) => recipe.id.toString() === this.id.toString())
    }
  }
}
</script>

<style scoped>
.recipe {
  display: flex;
  flex-flow: row;
}
.recipe-body {
  text-align: left;
  padding-right: 3rem
}
 img {
  max-width:30rem;
  margin-top: 1rem
}
</style>