const app = Vue.createApp({
  data() {
    return {
      name: "Isabel",
      age: 19,
      image:
        "https://images.pexels.com/photos/357577/pexels-photo-357577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    };
  },
    methods: {
      calculateAge() {
        return this.age + 5;
      },
      calculateRandom() {
        return Math.random();
      },
    },
});

app.mount("#assignment");
