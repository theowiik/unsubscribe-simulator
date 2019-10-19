<template lang="pug">
  div.text-center
    Header(text="Sad to see you go 😥")
    p.text-gray-600 You have now been unsuccesfully unsubscribed

    - for (var i = 0; i < 15; i++)
      br

    p(style="font-size: 7pt")
      router-link( to="/3" class="text-gray-600 hover:text-gray-800" ) I still want to unsubscribe
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  name: 'Level2',
  components: {
    Button,
    Header,
  },
});
</script>
