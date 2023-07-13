new Vue({
  el: '#app',
  created() {
    this.notificationSound();
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(users => this.users = users.data.slice(0, 6))
  },
  data: {
    users: [],
  },
  methods: {
    notificationSound() {
      const soundSrc = 'http://sonidosmp3gratis.com/sounds/whatsapp-apple';
      const audio = new Audio();
      audio.src = soundSrc;
      audio.load();
      audio.play();
    }
  }
})