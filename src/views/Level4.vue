<template lang='pug'>
  .flex.justify-around
    div(v-if='leftPos')
      div(@mouseover='leftPos = !leftPos')
        Button#button1(text='Unsubscribe' path='/5' light)
    div(v-else)
      Button#button2(text='Stay Subscribed' path='/' success)

    div(v-if='!leftPos')
      div(@mouseover='leftPos = !leftPos')
        Button#button1(text='Unsubscribe' path='/5' light)
    div(v-else)
      Button#button2(text='Stay Subscribed' path='/' success)
</template>

<style scoped lang='sass'>
#unsubscribe-button:hover
  display: none
  transition: 1s ease
</style>

<script lang='ts'>
import Vue from 'vue';
import Button from '@/components/Button.vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  name: 'Level2',
  components: {
    Button,
    Header,
  },
  data() {
    return {
      leftPos: true,
    };
  },
});
</script>
