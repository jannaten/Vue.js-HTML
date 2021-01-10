const app = Vue.createApp({
  data() {
    return {
      url: "https://www.github.com/jannaten",
      urlGoogle: "https://www.google.com",
      showBooks: true,
      books: [
        {
          title: "Book 1",
          author: "Jannaten",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "Book 2",
          author: "Masood",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "Book 3",
          author: "Henrikka",
          img: "assets/3.jpg",
          isFav: true,
        },
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
