<template lang="pug">
  div
    h1(class="text-2xl font-bold text-gray-700 leading-tight") Thank you for subscribing to (NAME)'s newsletter!
    p
      span Click 
      span
        router-link(to="/0" class="font-semibold text-blue-500") here
      span  if you wish to unsubscribe.
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
export default Vue.extend({
  name: 'ThankYou',
  components: {
    Button,
  },
});
</script>
