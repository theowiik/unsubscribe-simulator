<template lang="pug">
  div
    h1 Are you reallllly sure?
    Button(path="/" text="No")
    Button(path="/2" text="Yes")
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
