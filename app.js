const app = Vue.createApp({
  data() {
    return {
      title: "New App",
      author: "Jannaten",
      age: 23,
    };
  },
  methods: {
    changeTitle() {
      this.title = "Changed title";
    },
    changeTitleWithParams(title) {
      this.title = title;
    },
  },
});

app.mount("#app");
