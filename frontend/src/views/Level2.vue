<template lang="pug">
  div
    h1 Sad to see you go!
    p You have now been succesfully unsubscribed! *

    - for (var i = 0; i < 15; i++)
      br

    p(style="font-size: 7pt")
      Button(path="/", text="* If you click this link")
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';

export default Vue.extend({
  name: 'Level2',
  components: {
    Button,
  },
});
</script>
