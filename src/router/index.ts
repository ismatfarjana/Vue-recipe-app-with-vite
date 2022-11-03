import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import AllRecipesView from '@/views/AllRecipesView.vue';
import AddRecipe from '@/views/AddRecipe.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AllRecipesView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/addRecipe',
    name: 'addRecipe',
    component: AddRecipe,
  },
  {
    path: '/allRecipes',
    name: 'allRecipes',
    component: AllRecipesView,
  },
  {
    path: '/recipe/:id/:slug',
    name: 'recipe.show',
    component: () => import('@/views/RecipeView.vue'),
    props: (route: { params: { id: string; }; }) => ({ ...route.params, id: parseInt(route.params.id) }),
    // children: [
    //   {
    //     path: ':experienceSlug',
    //     name: 'experience.show',
    //     component: () => import('@/views/ExperienceShow.vue'),
    //     props: (route: { params: { id: string; }; }) => ({ ...route.params, id: parseInt(route.params.id) }),
    //   }
    // ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;
