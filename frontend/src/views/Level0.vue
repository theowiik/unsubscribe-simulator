<template lang="pug">
  div
    h1 Are you sure you want to unsubscribe?
    Button(path="/1" text="Yes")
    Button(path="/" text="No")
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';

export default Vue.extend({
  name: 'Level0',
  components: {
    Button,
  },
});
</script>
