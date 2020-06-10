<template lang="pug">
  #app
    .flex.justify-center(class='mt-5 sm:mt-10')
      .container.px-4
        transition(name='fade' mode='out-in')
          router-view
    FooterBanner
</template>

<script lang="ts">
import Vue from 'vue';
import FooterBanner from '@/components/FooterBanner.vue';

export default Vue.extend({
  name: 'App',
  components: {
    FooterBanner,
  },
});
</script>
