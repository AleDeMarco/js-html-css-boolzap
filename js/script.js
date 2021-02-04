var app = new Vue({
  el: '#app',
  data: {
    contacts: [
      {
        name: 'Michele',
        propic: 'img/avatar_2.jpg',
        lastMess: 'No, cavolo! Adesso vado subito a prenderlo!',
        lastSeen: 'Ultimo accesso oggi alle 10:23',
        chat: [
          {
            day: 'Tue 2 Feb',
            hour: '10:20',
            type: 'received',
            text: 'Hey, ciao Michele!'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:22',
            type: 'sent',
            text: 'Ciao!'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:23',
            type: 'received',
            text: 'Ti sei ricordato di comprare il regalo per la festa di Anna?'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:23',
            type: 'sent',
            text: 'No, cavolo! Adesso vado subito a prenderlo!'
          }
        ]
      },
      {
        name: 'Fabio',
        propic: 'img/avatar_3.jpg',
        lastMess: 'Sto bene, grazie! si va bene, che bello uscire tutti insieme!',
        lastSeen: 'Ultimo accesso oggi alle 10:23',
        chat: [
          {
            day: 'Tue 2 Feb',
            hour: '10:20',
            type: 'received',
            text: 'Hey, ciao Fabio!'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:22',
            type: 'sent',
            text: 'Ciao! Come stai?'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:23',
            type: 'received',
            text: 'Bene grazie! Tu? Sabato esco con Michela e Anna, vuoi venire?'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:23',
            type: 'sent',
            text: 'Sto bene, grazie! si va bene, che bello uscire tutti insieme!'
          }
        ]
      },
      {
        name: 'Samuele',
        propic: 'img/avatar_4.jpg',
        lastMess: 'Anche io tutto bene, grazie!',
        lastSeen: 'Ultimo accesso oggi alle 10:23',
        chat: [
          {
            day: 'Tue 2 Feb',
            hour: '10:20',
            type: 'received',
            text: 'Hey, ciao Samuele!'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:22',
            type: 'sent',
            text: 'Ciao! Come stai?'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:23',
            type: 'received',
            text: 'Non ci lamentiamo, tu?'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:23',
            type: 'sent',
            text: 'Anche io tutto bene, grazie!'
          }
        ]
      },
      {
        name: 'Mario',
        propic: 'img/avatar_5.jpg',
        lastMess: 'Anche io tutto bene, sto frequentando un corso bellissimo!',
        lastSeen: 'Ultimo accesso oggi alle 10:23',
        chat: [
          {
            day: 'Tue 2 Feb',
            hour: '10:20',
            type: 'received',
            text: 'Hey, ciao Mario!'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:22',
            type: 'sent',
            text: 'Ciao! Come stai?'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:23',
            type: 'received',
            text: 'Bene dai, grazie! Tu?'
          },
          {
            day: 'Tue 2 Feb',
            hour: '10:23',
            type: 'sent',
            text: 'Anche io tutto bene, sto frequentando un corso bellissimo!'
          }
        ]
      }
    ],
    selected: 0,
    newMess: '',
    newMessComplete: {},
    replyComplete: {},
    filtered: [],
    newFilter: '',
    boxOpen:''
  },
  created(){
    this.filtered = this.contacts;
    this.selected = this.filtered[0];
  },
  methods: {
    messageSent() {
      this.selected.lastSeen = 'online';
      this.newMessComplete.day = dayjs().format('ddd D MMM');
      this.newMessComplete.hour = dayjs().format('HH:mm');
      this.newMessComplete.type = 'sent';
      this.newMessComplete.text = this.newMess;
      this.replyComplete.day = dayjs().format('ddd D MMM');
      this.replyComplete.hour = dayjs().format('HH:mm');
      this.replyComplete.type = 'received';
      this.replyComplete.text = 'Okay';
      this.selected.lastMess = this.newMess;
      this.newMess = '';
      this.selected.chat.splice(this.selected.chat.length, 0, this.newMessComplete);
      this.newMessComplete = {};
      setTimeout(() => {
        this.selected.chat.splice(this.selected.chat.length, 0, this.replyComplete);
        this.selected.lastMess = this.replyComplete.text;
        this.selected.lastSeen = 'Ultimo accesso oggi alle '+this.replyComplete.hour;
        this.replyComplete = {};
      }, 1000);
    },
    filterChat() {
      this.filtered = [];
      this.newFilter = this.newFilter.charAt(0).toUpperCase() + this.newFilter.slice(1);
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].name.includes(this.newFilter)) {
          this.filtered.push(this.contacts[i]);
        }
      }
    },
    menuOpener(index) {
      document.getElementById('box'+index).style.display = 'block';
      document.getElementById('menu-closer').style.display = 'block';
      document.getElementById('infobox'+index).style.display = 'none';
      document.getElementById('lines').style.display = 'none';
      this.boxOpen = 'box'+index;
    },
    menuCloser() {
      document.getElementById(this.boxOpen).style.display = 'none';
      document.getElementById('menu-closer').style.display = 'none';
      document.getElementById('infobox').style.display = 'none';
      document.getElementById('lines').style.display = 'none';
    },
    infBox(index) {
      document.getElementById('infobox'+index).style.display = 'block';
    },
    deleteMess(index) {
      this.selected.chat.splice(index, 1);
      document.getElementById(this.boxOpen).style.display = 'none';
      document.getElementById('menu-closer').style.display = 'none';
      var y = this.selected.chat.length - 1;
      this.selected.lastMess = this.selected.chat[y].text;
    }
  }
});
