<template lang="pug">
  div
    h1 Thank you for subscribing to (NAME)'s newsletter!
    p
      span Click 
      span
        Button(path="/0" text="here")
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
