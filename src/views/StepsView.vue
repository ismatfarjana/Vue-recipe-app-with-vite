<template>
  <section class='step'>
    <p>{{ step?.number }}.</p>
    <p style="padding-left:5px">{{ step?.details }}</p>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    step: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.step {
  display: flex;
  flex-direction: row;
}
</style>