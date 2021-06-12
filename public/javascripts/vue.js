
var recentcheckinTable = new Vue({
  el: '#recentcheckinTable',
  data: {
    rows: [
      { Name: "Chandler Bing", Time: '12:45 PM', Status: 'Negative'},
      { Name: "Ross Geller", Time: '12:45 PM', Status: 'Positive' },
      { Name: "Antony Cameron", Time: '12:44 PM', Status: 'Negative' },
      { Name: "Luke Ooyendyk", Time: '12:44 PM', Status: 'Negative' },
      { Name: "Thomas Sheldon", Time: '12:44 PM', Status: 'Negative' },
      { Name: "Samuel Osborn", Time: '12:43 PM', Status: 'Positive' },
      { Name: "Joel Scandrett-Smith", Time: '12:42 PM', Status: 'Negative' }
    ]
  },
    computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }
        return Object.keys(this.rows[0]);
      }
    }
});

var managerlog = new Vue({
  el: '#managerlog',
  data: {
    rows: [
      { Name: "Chandler Bing", Time: '12:45 PM', Status: 'Negative'},
      { Name: "Ross Geller", Time: '12:45 PM', Status: 'Positive' },
      { Name: "Antony Cameron", Time: '12:44 PM', Status: 'Negative' },
      { Name: "Luke Ooyendyk", Time: '12:44 PM', Status: 'Negative' },
      { Name: "Thomas Sheldon", Time: '12:44 PM', Status: 'Negative' },
      { Name: "Samuel Osborn", Time: '12:43 PM', Status: 'Positive' },
      { Name: "Joel Scandrett-Smith", Time: '12:42 PM', Status: 'Negative' }
    ]
  },
    computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }
        return Object.keys(this.rows[0]);
      }
    }
});

var Table1 = new Vue({
  el: '#table1',
  data: {
    rows: [
      { Name: "David Brooks", Email: 'd.brooks@gmail.com', Phone: '0403405729', Status: 'Admin'},
      { Name: "Dan Castellaneta", Email: 'dan.c11@bigpond.com', Phone: '0409274582',Status: 'Admin' }
    ]
  },
    computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }
        return Object.keys(this.rows[0]);
      }
    }
});
var recentcases = new Vue({
  el: '#recentcases',
  data: {
    rows: [
      { Name: "Chandler Bing",Date: '24-01-2021', Recent: 'UniBar'},
      { Name: "Jesus", Date: '25-01-2021', Recent: 'University of Adelaide'}
    ]
  },
    computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }
        return Object.keys(this.rows[0]);
      }
    }
});

var hotspots = new Vue({
  el: '#hotspots',
  data: {
    rows: [
      { Location: "Rundle Mall",Cases: '900'},
      { Location: "Airport", Cases: '10000'}
    ]
  },
  computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }
        return Object.keys(this.rows[0]);
      }
    }
});
var checkindatabase = new Vue({
  el: '#checkindatabase',
  data: {
    rows: [
      { name: "Yattla Labour Prison", date:'27/8/2020', location: '9:55 AM', status: 'Positive'},
      { name: "Adelaide Magistrates Court", date:'27/8/2020', location: '4:55 AM', status: 'Negative'},
      { name: "SAPOL Edinborough North", date:'20/8/2020', location: '2:35 AM', status: 'Negative'},
      { name: "Commbank Elizabeth", date:'20/8/2020', location: '1:55 AM', status: 'Negative'},
      { name: "Masks and CostumesRUs", date:'20/8/2020', location: '12:25 AM', status: 'Negative'},
      { name: "Bunnings Warehouse", date:'20/8/2020', location: '11:55 AM', status: 'Negative'}
    ]
  },
  computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }
        return Object.keys(this.rows[0]);
      }
    }
});

  // Vue.component('usercheckin', {
  //   template: '\
  //     <table>\
  //     <thead>\
  //     <tr>\
  //       <th v-for="col in columns">{{col}}</th>\
  //     </tr>\
  //     <thead>\
  //           <tr v-for="row in rows">\
  //                       <td v-for="col in columns">{{row[col]}}</td>\
  //                   </tr>\
  //               </tbody>\
  //           </table>\
  //   ',
  //   props: ['Venue']
  // })

var userCheckinHistory = new Vue({
  el: '#userCheckinHistory',
  data: {
    newcheckin: '',
    rows: [
      { Venue: "Yattla Labour Prison", Date:'27/8/2020', Time: '9:55 AM', Hotspot: 'PPositive'},
      { Venue: "Adelaide Magistrates Court", Date:'27/8/2020', Time: '4:55 AM', Hotspot: 'Negative'},
      { Venue: "SAPOL Edinborough North", Date:'20/8/2020', Time: '2:35 AM', Hotspot: 'Negative'},
      { Venue: "Commbank Elizabeth", Date:'20/8/2020', Time: '1:55 AM', Hotspot: 'Negative'},
      { Venue: "Masks and CostumesRUs", Date:'20/8/2020', Time: '12:25 AM', Hotspot: 'Negative'},
      { Venue: "Adelaide Guns'n'Ammo", Date:'20/8/2020', Time: '11:55 AM', Hotspot: 'Negative'},
      { Venue: "Bunnings Warehouse", Date:'20/8/2020', Time: '19:55 AM', Hotspot: 'Negative'}
    ],
    nextcheckin: 8
  },
      methods: {
        addcheckin: function () {
          this.rows.push({
            Venue: document.getElementById('venue_id').value,
            Date: new Date(),
            Time: document.getElementById('postcode').value,

          })
          this.newTodoText = ''
        }
      },
    computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }
        return Object.keys(this.rows[0]);
      }
    }
  });


  // Vue.component('isvenue', {
  //   template: '\
  //     <table>\
  //     <thead>\
  //     <tr>\
  //       <th v-for="col in columns">{{col}}</th>\
  //     </tr>\
  //     <thead>\
  //           <tr v-for="row in rows">\
  //                       <td v-for="col in columns">{{row[col]}}</td>\
  //                   </tr>\
  //               </tbody>\
  //           </table>\
  //   ',
  //   props: ['Venue']
  // })


var venues = new Vue({
  el: '#vue_venue',
  data: {
    newVenue: '',
    //rowData: [],
    rows: [
      { name: "McDonalds", address: "20 Hindley St Adelaide 5000", status: "Safe"},
      { name: "KFC", address: "15 Pulteney St Adelaide 5000", status: "Hotspot"},
      { name: "Woolworths", address: "25 Walkerville Terrace Walkerville 5081", status: "Hotspot"},
      { name: "Pasta Deli", address: "148 The Parade Norwood 5067", status: "Safe"}
    ]
  },
       methods: {
        addvenue: function () {
            this.rows.push({
            name: document.getElementById('addvenuename').value,
            address: document.getElementById('addvenueaddress').value,
            status: document.getElementById('postcode').value,
          })
          this.newVenue = ''
        }
      },
    computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }
        return Object.keys(this.rows[0]);
      }
    }
  });


// function display_new_venue() {

//       var app = new Vue({
//         el: '#app',
//         data: {
//           mail:'',
//           date:'',
//           adress:'',
//           company:'',
//           fliers:'',
//           rowData:[] //the declared array
//         },
//         methods:{
//           addItem(){
//             var my_object = {
//               mail:this.mail,
//               date:this.date,
//               adress:this.adress,
//               company: this.company,
//               fliers: this.fliers
//             };
//             this.rowData.push(my_object);

//             this.mail = '';
//             this.date = '';
//             this.adress = '';
//             this.company = '';
//             this.fliers = '';
//           }
//         }
//       });
// }

// function display_new_venue() {


//       methods: {
//         addItem() {
//           var my_object = {
//             name: document.getElementById('inputVenuename').value,
//             address1: document.getElementById('inputAddress').value,
//             address2: document.getElementById('inputAddress2').value,
//             suburb: document.getElementById('inputCity').value,
//             postcode: document.getElementById('inputPostcode').value
//           };
//           this.rowData.push(my_object);
//         }
//       }
// });
