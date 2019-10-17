<template lang="pug">
  router-link( :to="{ path }")
    button(class="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow") {{text}}
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
