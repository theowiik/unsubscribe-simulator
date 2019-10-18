<template lang="pug">
  div
    Header(text="Are you sure you want to unsubscribe?")
    Button(path="/1" text="Yes")
    Button(path="/" text="No")
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  name: 'Level0',
  components: {
    Button,
    Header,
  },
});
</script>
