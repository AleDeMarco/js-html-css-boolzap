var app = new Vue({
  el: '#app',
  data: {
    contacts: [
      {
        name: 'Michele',
        propic: 'img/avatar_2.jpg',
        chat: [
          {
            day: '2 feb 2020',
            hour: '10:20',
            type: 'received',
            text: 'Hey, ciao Michele!'
          },
          {
            day: '2 feb 2020',
            hour: '10:22',
            type: 'sent',
            text: 'Ciao!'
          },
          {
            day: '2 feb 2020',
            hour: '10:23',
            type: 'received',
            text: 'Ti sei ricordato di comprare il regalo per la festa di Manuela?'
          },
          {
            day: '2 feb 2020',
            hour: '10:23',
            type: 'sent',
            text: 'No, cavolo! Adesso vado subito a prenderlo!'
          }
        ]
      },
      {
        name: 'Fabio',
        propic: 'img/avatar_3.jpg',
        chat: [
          {
            day: '2 feb 2020',
            hour: '10:20',
            type: 'received',
            text: 'Hey, ciao Fabio!'
          },
          {
            day: '2 feb 2020',
            hour: '10:22',
            type: 'sent',
            text: 'Ciao! Come stai?'
          },
          {
            day: '2 feb 2020',
            hour: '10:23',
            type: 'received',
            text: 'Bene grazie! Tu? Sabato esco con Michela e Anna, vuoi venire?'
          },
          {
            day: '2 feb 2020',
            hour: '10:23',
            type: 'sent',
            text: 'Sto bene, grazie! si va bene, che bello uscire tutti insieme!'
          }
        ]
      },
      {
        name: 'Samuele',
        propic: 'img/avatar_4.jpg',
        chat: [
          {
            day: '2 feb 2020',
            hour: '10:20',
            type: 'received',
            text: 'Hey, ciao Samuele!'
          },
          {
            day: '2 feb 2020',
            hour: '10:22',
            type: 'sent',
            text: 'Ciao! Come stai?'
          },
          {
            day: '2 feb 2020',
            hour: '10:23',
            type: 'received',
            text: 'Non ci lamentiamo, tu?'
          },
          {
            day: '2 feb 2020',
            hour: '10:23',
            type: 'sent',
            text: 'Anche io tutto bene, grazie!'
          }
        ]
      },
      {
        name: 'Mario',
        propic: 'img/avatar_5.jpg',
        chat: [
          {
            day: '2 feb 2020',
            hour: '10:20',
            type: 'received',
            text: 'Hey, ciao Mario!'
          },
          {
            day: '2 feb 2020',
            hour: '10:22',
            type: 'sent',
            text: 'Ciao! Come stai?'
          },
          {
            day: '2 feb 2020',
            hour: '10:23',
            type: 'received',
            text: 'Bene dai, grazie! Tu?'
          },
          {
            day: '2 feb 2020',
            hour: '10:23',
            type: 'sent',
            text: 'Anche io tutto bene, sto frequentando un corso bellissimo!'
          }
        ]
      }
    ],
    selected: 0
  },
  created(){
    this.selected = this.contacts[0];
  },
  methods: {

  }
});
