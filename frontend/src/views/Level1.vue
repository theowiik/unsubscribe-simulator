<template lang="pug">
  div.text-center
    Header(text="Are you reallllly sure?")
    .mt-3
      Button(path="/" text="No" danger=true)
      Button.ml-5(path="/2" text="Yes" success=true)
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  name: '1',
  components: {
    Button,
    Header,
  },
});
</script>
