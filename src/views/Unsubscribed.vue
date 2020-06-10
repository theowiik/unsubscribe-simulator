<template lang="pug">
  .text-center
    Header(text='You have been successfully unsubscribed.')
    Subheader(text='Thanks for playing!')

    p theowiik.com
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import Header from '@/components/Header.vue';
import Subheader from '@/components/Subheader.vue';

export default Vue.extend({
  name: 'Unsubscribed',
  data() {
    return {};
  },
  components: {
    Button,
    Header,
    Subheader,
  },
  methods: {},
});
</script>
