<template lang="pug">
  router-link( :to="{ path }")
    button(:class="[ \
      'bg-white hover:bg-gray-100 py-1 px-2 border border-gray-400 rounded shadow', \
      { \
        'bg-yellow-500 hover:bg-yellow-800 text-white hover:text-gray-100': warning, \
        'bg-green-500 hover:bg-green-800 text-white': success, \
        'bg-red-600 hover:bg-red-800 text-white': danger \
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
    warning: Boolean,
    success: Boolean,
    danger: Boolean,
  },
});
</script>
