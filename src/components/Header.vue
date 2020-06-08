<template lang="pug">
  h1(class="text-2xl font-bold text-gray-700 leading-tight") {{text}}
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Header',
  props: {
    text: String,
  },
});
</script>
