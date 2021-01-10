const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
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
    toggleBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
