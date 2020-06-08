<template lang='pug'>
  h1(class='text-xl font-light text-gray-700 leading-tight') {{text}}
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  name: 'Subheader',
  props: {
    text: String,
  },
});
</script>
