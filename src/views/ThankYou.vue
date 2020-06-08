<template lang="pug">
  .text-center
    Header(:text="'Thank you for subscribing to the ' + newsletter + ' newsletter'")
    p.text-gray-600.font
      span Click 
      span
        router-link(to="/0" class="text-blue-500") here
      span  if you wish to unsubscribe.
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  name: 'ThankYou',
  data() {
    return {
      /**
       * The available names of the newsletters.
       */
      names: [
        'Lovely Soaps',
        'Exotic Peppers',
        'Cool Cake Lights',
        'Underwater Hockey',
        'Tractors Unlimited',
        'Daily Yo-yo Tricks',
        'Organic Fertilizers',
        'All About Water Snakes',
        'Revolutionary Bar Stools',
        'All About Rocks and Minerals',
        'Interesting and Cool Postcards',
        'All About Yarn and Knitting Needles',
        ],
      newsletter: '',
    };
  },
  components: {
    Button,
    Header,
  },
  mounted() {
    this.typewriteNewsletter();
  },
  methods: {
    /**
     * Returns a random newsletter name.
     *
     * @returns a random newsletter name.
     */
    getRandNewsletter(): string {
      const randIndex = Math.floor(Math.random() * this.names.length);
      return this.names[randIndex];
    },

    /**
     * Writes the name of the newsletter one charachter at a time with a underscore to simulate
     * that it is being written.
     */
    async typewriteNewsletter() {
      const newsletterName: string = this.getRandNewsletter();
      let sleepTime: number = 400;

      // Animate a underscore.
      for (let i = 0; i < 6; i++) {
        const char: string = (i % 2 === 0) ? '_' : ' ';
        this.newsletter = char;
        await this.wait(sleepTime);
      }

      // Build the name charachter by charachter, with a underscore at the end.
      const minSleep: number = 50;
      for (let i = 0; i <= newsletterName.length; i++) {
        await this.wait(Math.max(sleepTime *= 0.88, minSleep));
        this.newsletter = newsletterName.substring(0, i) + '_ ';
      }

      // Remove the underscore after 2 seconds.
      await this.wait(2000);
      this.newsletter = newsletterName;
    },

    /**
     * Sleeps for ms milliseconds.
     *
     * @param ms the amount of time to sleep in milli seconds.
     */
    wait(ms: number) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, ms);
      });
    },
  },
});
</script>
