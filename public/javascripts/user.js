function getDate() {
    document.getElementById("current_time").innerHTML = new Date();
}



function homePress() {
    document.getElementById('checkInActive').style.display = "none";
    document.getElementById('checkInInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('historyActive').style.display = "none";
    document.getElementById('historyInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('userHome').style.display = "block";
    document.getElementById('userCheckIn').style.display = "none";
    document.getElementById('userMap').style.display = "block";
    document.getElementById('userCheckHistory').style.display = "none";
    document.getElementById('userAccount').style.display = "none";
}

function checkInPress() {
    document.getElementById('checkInActive').style.display = "block";
    document.getElementById('checkInInactive').style.display = "none";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('historyActive').style.display = "none";
    document.getElementById('historyInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('userHome').style.display = "none";
    document.getElementById('userCheckIn').style.display = "block";
    document.getElementById('userMap').style.display = "none";
    document.getElementById('userCheckHistory').style.display = "none";
    document.getElementById('userAccount').style.display = "none";
}

function mapPress() {
    document.getElementById('checkInActive').style.display = "none";
    document.getElementById('checkInInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "block";
    document.getElementById('mapInactive').style.display = "none";
    document.getElementById('historyActive').style.display = "none";
    document.getElementById('historyInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('userHome').style.display = "none";
    document.getElementById('userCheckIn').style.display = "none";
    document.getElementById('userMap').style.display = "block";
    document.getElementById('userCheckHistory').style.display = "none";
    document.getElementById('userAccount').style.display = "none";
}

function historyPress() {
    document.getElementById('checkInActive').style.display = "none";
    document.getElementById('checkInInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('historyActive').style.display = "block";
    document.getElementById('historyInactive').style.display = "none";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('userHome').style.display = "none";
    document.getElementById('userCheckIn').style.display = "none";
    document.getElementById('userMap').style.display = "none";
    document.getElementById('userCheckHistory').style.display = "block";
    document.getElementById('userAccount').style.display = "none";
}

function accountPress() {
    document.getElementById('checkInActive').style.display = "none";
    document.getElementById('checkInInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('historyActive').style.display = "none";
    document.getElementById('historyInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "block";
    document.getElementById('accountInactive').style.display = "none";

    document.getElementById('userHome').style.display = "none";
    document.getElementById('userCheckIn').style.display = "none";
    document.getElementById('userMap').style.display = "none";
    document.getElementById('userCheckHistory').style.display = "none";
    document.getElementById('userAccount').style.display = "block";
}

function getlocation() {
 var location = document.getElementById("venue_id").value;
  document.getElementById("confirmation").innerHTML = "Check in to " + location;
}

function general() {
    document.getElementById('generalOptions').style.display = "block";
    document.getElementById('passwordOptions').style.display = "none";
}

function changePassword() {
    document.getElementById('generalOptions').style.display = "none";
    document.getElementById('passwordOptions').style.display = "block";
}

function viewCheckIn() {
                // check in
            var geojson = {
                type: 'Feature',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates:  [138.61932434182944,-34.919612766877194,]
                    },
                    properties: {
                        title: 'Bunnings Kent Town',
                        'marker-color': 'blue',
                        'marker-size': 'small',
                        description: '12:55 PM 13/06/21 Antony Cameron '
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [138.59984425369254,-34.92773021212241]
                    },
                    properties: {
                        title: 'Victoria Square',
                        description: '12:58 PM 13/06/21 Antony Cameron'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [138.60697799564196,-34.948257122420564]
                    },
                    properties: {
                        title: 'Target Unley',
                        description: '12:49 PM 13/06/21 Antony Cameron'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [138.5343804201746,-34.941414387377705]
                    },
                    properties: {
                        title: 'Adelaide Airport',
                        description: '12:32 PM 13/06/21 Antony Cameron'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [138.6175034815867,-34.8943202259592]
                    },
                    properties: {
                        title: 'Woolworths Walkerville',
                        description: '02:32 PM 13/06/21 Antony Cameron'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [138.59610805729736,-34.91461537211093]
                    },
                    properties: {
                        title: 'Adelaide Oval',
                        description: '01:05 PM 13/06/21 Antony Cameron'
                    }
                }]
            };

            geojson.features.forEach(function (marker) {

                // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'marker';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
                    .addTo(map);
            });
}

function viewHotspots() {

            // hotspot marker

            var geojson_hotspot = {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [138.6019451800952,-34.92260644561079]
                    },
                    properties: {
                        title: 'Rundle mall - Hotspot',
                        description: 'Marked as hotspot on 14/6/2021'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [138.59570181290297,-34.904622515576214]
                    },
                    properties: {
                        title: 'Foodworks North Adelaide - Hotspot',
                        description: 'Marked as hotspot on 14/6/2021'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [138.5753105127952,-34.932797505942794]
                    },
                    properties: {
                        title: 'Bunnings Mile End - Hotspot',
                        description: 'Marked as hotspot on 14/6/2021'
                    }
                }]
            };

            geojson_hotspot.features.forEach(function (marker) {

                // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'marker_hotspot';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
                    .addTo(map);
            });
}

function coolFunk () {
    console.log("cool funk")
        document.getElementById('checkInHistory').style.display = "contents";


               // check in
            var geojson = {
                type: 'Feature',
               features: [{
                    type: 'Feature',
                    geometry: {
                       type: 'Point',
                        coordinates:  [138.61932434182944,-34.919612766877194,]
                    },
                    properties: {
                        title: 'Bunnings Kent Town',
                        'marker-color': 'blue',
                       'marker-size': 'small',
                        description: '12:55 PM 13/06/21 Antony Cameron '
                    }
               },
                {
                    type: 'Feature',
                   geometry: {
                        type: 'Point',
                        coordinates: [138.59984425369254,-34.92773021212241]
                    },
                    properties: {
                        title: 'Victoria Square',
                        description: '12:58 PM 13/06/21 Antony Cameron'
                    }
                },
               {
                    type: 'Feature',
                    geometry: {
                       type: 'Point',
                        coordinates: [138.60697799564196,-34.948257122420564]
                    },
                    properties: {
                        title: 'Target Unley',
                        description: '12:49 PM 13/06/21 Antony Cameron'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [138.5343804201746,-34.941414387377705]
                    },
                    properties: {
                        title: 'Adelaide Airport',
                        description: '12:32 PM 13/06/21 Antony Cameron'
                    }
               },
                {
                    type: 'Feature',
                   geometry: {
                        type: 'Point',
                        coordinates: [138.6175034815867,-34.8943202259592]
                    },
                    properties: {
                        title: 'Woolworths Walkerville ',
                        description: '02:32 PM 13/06/21 Antony Cameron'
                    }
                },
               {
                    type: 'Feature',
                    geometry: {
                       type: 'Point',
                        coordinates: [138.59610805729736,-34.91461537211093]
                    },
                    properties: {
                        title: 'Adelaide Oval',
                        description: '01:05 PM 13/06/21 Antony Cameron'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [138.6019451800952,-34.92260644561079]
                    },
                    properties: {
                        title: 'Rundle Mall',
                        description: '06:08 PM 14/06/21 Antony Cameron'
                    }
               }]
            };

            geojson.features.forEach(function (marker) {

               // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'marker';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
                    .addTo(map);
            });




}