<template lang="pug">
  .text-center
    Header(text="Everyone knows that computers dont know what prime numbers are")
    Subheader(text="Please enter the first 5 prime numbers (separated by commas)")
    
    .mt-10.flex.justify-center
      div(class="w-full sm:w-4/5 lg:w-2/5")
        input(
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full \
                py-2 px-4 text-gray-700 leading-tight focus:outline-none \
                focus:bg-gray-100 focus:border-teal-200"
          id="inline-full-name"
          type="text"
          placeholder="something, something else, ..."
        )

        .flex.mt-3.w-full.justify-end
          Button(text="Verify" path="/4" success)

    #loading.mt-10
</template>

<style>
  #loading {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(77, 185, 171, 0.843);
    border-radius: 50%;
    border-top-color: rgb(238, 238, 238);
    animation: spin 0.9s linear infinite;
    -webkit-animation: spin 0.9s linear infinite;
  }

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }

  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
</style>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import Header from '@/components/Header.vue';
import Subheader from '@/components/Subheader.vue';

export default Vue.extend({
  name: '1',
  components: {
    Button,
    Header,
    Subheader,
  },
});
</script>
