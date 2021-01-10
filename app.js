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
    toggleBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
  },
});

app.mount("#app");
