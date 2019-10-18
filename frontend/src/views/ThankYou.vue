<template lang="pug">
  div
    Header(text="Thank you for subscribing to (NAME)'s newsletter!")
    p
      span Click 
      span
        router-link(to="/0" class="font-semibold text-blue-500") here
      span  if you wish to unsubscribe.
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  name: 'ThankYou',
  components: {
    Button,
    Header,
  },
});
</script>
