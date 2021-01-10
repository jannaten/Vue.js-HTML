const app = Vue.createApp({
  data() {
    return {
      url: "https://www.github.com/jannaten",
      urlGoogle: "https://www.google.com",
      showBooks: true,
      books: [
        { title: "Book 1", author: "Jannaten", age: 23 },
        { title: "Book 2", author: "Masood", age: 31 },
      ],
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
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
