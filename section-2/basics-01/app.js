const app = Vue.createApp({
  data() {
    return {
      goalA: "Learn Vue",
      goalB: 'Master Vue',
      vueLink: 'https://vuejs.org'
    };
  },

  methods: {
    output() {
      const random = Math.random();
      if (random < 0.5) {
        return 'Learn Vue'
      } else {
        return 'Master Vue'
      }
    }

  }
});

app.mount("#user-goal");
