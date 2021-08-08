const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },

  methods: {
    add(num) {
      this.number = this.numner + num;
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Too Low! Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too Much";
      }
    },
  },
  watch: {
    result() {
      console.log("Watcher executing...");
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
