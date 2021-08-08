const app = Vue.createApp({
  data() {
    return {
      taskValue: "",
        tasks: [],
        taskVisible: true
    };
    },
    computed: {

    },

  methods: {
    addTask() {
      this.tasks.push(this.taskValue);
      },
      removeTask(idx) {
          this.tasks.splice(idx, 1);
      },

      toggleTaskList() {
          this.taskVisible = !(this.taskVisible);
        
      }
  },
});

app.mount("#assignment");
