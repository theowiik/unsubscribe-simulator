<template lang="pug">
  router-link( :to="{ path }") {{text}}
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Button',
  props: {
    text: String,
    path: String,
  },
});
</script>
