<template lang="pug">
  div
    p Are you really sure?
    Button(path="/2" text="Yes")
    button(path="/2" text="Yes")
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
export default Vue.extend({
  name: '1',
  components: {
    Button,
  },
});
</script>
