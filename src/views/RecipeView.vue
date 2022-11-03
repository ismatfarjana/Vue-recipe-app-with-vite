<template>
  <section class="recipe">
    
    <div class="recipe-body">
      
      <h2>{{ recipe?.name }}</h2>
      <img :src="`/images/${recipe?.image}`" :alt="recipe?.name">
      
    </div>
    <div class="recipe-body">
      <section>
        <h3>Ingredients for {{ recipe?.name }}</h3>
        <GoBack />
        <div class="cards">
          <div 
            v-for="ingredient in recipe?.ingredients" :key="ingredient.slug"
          >
            <IngredientsView :ingredient="ingredient" />
          </div>
        </div>
      </section>
      
      <section>
        <h3>Steps for {{ recipe?.name }}</h3>
        <div class="cards">
          <div v-for="step in recipe?.steps" :key="step.number">
            <StepsView :step="step" />
          </div>
        </div>
      </section>
      
      <h4>Add comments</h4>
      <p>comming soon</p>
    </div>
  </section>
</template>

<script lang="ts">
import sourceData from '@/data.json';
import GoBack from '@/components/GoBack.vue';
import IngredientsView from './IngredientsView.vue';
import StepsView from './StepsView.vue';

export default {
  components: {
    GoBack,
    IngredientsView,
    StepsView,
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