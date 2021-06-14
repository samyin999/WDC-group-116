
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
});

var table1 = new Vue({
  el: '#table1',
  data: {
    rows: [
      { Name: "David Brooks", Email: 'd.brooks@gmail.com', Phone: '0403405729', Status: 'Admin'},
      { Name: "Dan Castellaneta", Email: 'dan.c11@bigpond.com', Phone: '0409274582',Status: 'Admin' }
    ]
  },
   addadmin: function () {
    this.rows.push({
    Name: document.getElementById('firstname').value + " " + document.getElementById('lastname').value,
    Email: document.getElementById('email').value,
    Phone: document.getElementById('mob_number').value,
    Status: "Admin"
          });
        },
});
var recentcases = new Vue({
  el: '#recentcases',
  data: {
    rows: [
      { Name: "Chandler Bing",Date: '24-01-2021', Recent: 'UniBar'},
      { Name: "Jesus", Date: '25-01-2021', Recent: 'University of Adelaide'}
    ]
  },
});

var hotspots = new Vue({
  el: '#hotspots',
  data: {
    rows: [
      { Location: "Rundle Mall", Cases: '14:00 - 18:00'},
      { Location: "Foodworks North Adelaide", Cases: '14:00 - 18:00'},
      { Location: "Foodworks", Cases: '16:00 - 17:00'}
    ]
  },
});
var checkindatabase = new Vue({
  el: '#checkindatabase',
  data: {
    rows: [
      { name: "Antony Cameron", date:'13/06/21', location: 'Bunnings Kent Town', status: 'Negative'},
      { name: "Antony Cameron", date:'13/06/21', location: 'Victoria Square', status: 'Negative'},
      { name: "Antony Cameron", date:'13/06/21', location: 'Target Unley', status: 'Negative'},
      { name: "Antony Cameron", date:'13/06/21', location: 'Adelaide Airport', status: 'Negative'},
      { name: "Antony Cameron", date:'13/06/21', location: 'Woolworths Walkerville', status: 'Negative'},
      { name: "Antony Cameron", date:'13/06/21', location: 'Adelaide Oval', status: 'Negative'}
    ]
  },
});

var userCheckinHistory = new Vue({
  el: '#userCheckinHistory',
  data: {
    newcheckin: '',
    rows: [
      { Venue: "Bunnings Kent Town", Date:'13/06/21', Time: '12:55 PM', Hotspot: 'Negative'},
      { Venue: "Victoria Square", Date:'13/06/21', Time: '12:58 PM', Hotspot: 'Negative'},
      { Venue: "Target Unley", Date:'13/06/21', Time: '12:49 PM', Hotspot: 'Negative'},
      { Venue: "Adelaide Airport", Date:'13/06/21', Time: '12:32 PM', Hotspot: 'Negative'},
      { Venue: "Woolworths Walkerville", Date:'13/06/21', Time: '02:32 PM', Hotspot: 'Negative'},
      { Venue: "Adelaide Oval", Date:'13/06/21', Time: '01:05 PM', Hotspot: 'Negative'},
    ],
  },
      methods: {
        addcheckin: function () {
          this.rows.push({
            Venue: document.getElementById('venue_id').value,
            Date: new Date(),
            Time: document.getElementById('postcode').value,

          });
        }

      },
  });

var venues = new Vue({
    el: '#vue_venue',
    data: {
        Name: 'Adelaide Uni',
        No: 10,
        Lat: 0,
        Lon: 0,
        rows: [
      { Name: "Adelaide Uni", Address: '123 Main St', Status: 'Hotspot'}]
    },
    methods: {
        addvenue: function () {
            this.rows.push({
            Name: document.getElementById('addvenuename').value,
            Address: document.getElementById('addvenueaddress').value,
            Status: "Non-Hotspot"
          });
        },
        get_venue: function () {
            let req = new XMLHttpRequest();
            req.onreadystatechange = function () {
            };
                req.open('GET', '/get_venue', true);
                req.send();
        },
        add_venue: function () {
            let req = new XMLHttpRequest();

            req.open('POST', '/add_venue', true);
            req.setRequestHeader('Content-type', 'application/json');
            req.send(JSON.stringify({ venueName1: this.Name, contactNo1: this.No, lat1: this.Lat, lon1: this.Lon }));
        }
    }
});
