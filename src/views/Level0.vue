<template lang='pug'>
  div.text-center
    Header(text='Are you sure you want to unsubscribe?')
    .mt-3
      Button(path='/1' text='Yes' light)
      Button.ml-5(path='/' text='No' success)
</template>

<script lang='ts'>
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
