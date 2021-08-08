const app = Vue.createApp({
  data() {
  
    return {
      goalValue: '',
      goals: []
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.goalValue);

    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }

  }
});

app.mount('#user-goals');
