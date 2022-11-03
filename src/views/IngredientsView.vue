<template>
  <section>
    <h4>{{ ingredient?.name }}</h4>
    <p>{{ ingredient?.amount }}</p>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    ingredient: {
      type: Object,
      required: true
    }
  },
}
</script>