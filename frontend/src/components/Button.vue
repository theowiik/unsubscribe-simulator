<template lang="pug">
  router-link( :to="{ path }")
    button(:class="[ \
      'bg-white hover:bg-gray-100 py-1 px-2 border border-gray-400 rounded', \
      { \
        'bg-gray-100 hover:bg-gray-200 text-gray-600 no-shadow border-none': light, \
        'bg-red-500 hover:bg-red-800 text-white': danger, \
        'bg-green-500 hover:bg-green-800 text-white': success, \
        'bg-yellow-500 hover:bg-yellow-800 text-white hover:text-gray-100': warning, \
      } \
      ]"
    ) {{text}}
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Button',
  props: {
    text: String,
    path: String,
    light: Boolean,
    danger: Boolean,
    warning: Boolean,
    success: Boolean,
  },
});
</script>
