// On the admin page, these functions display and hide the relevant divs as the user navigates the page using the nav bar

function appendDate() {
    let appendTarget = document.getElementById("time").innerHTML;
    appendTarget = new Date();
}

function homePress() {
    document.getElementById('databaseActive').style.display = "none";
    document.getElementById('databaseInactive').style.display = "block";
    document.getElementById('venueActive').style.display = "none";
    document.getElementById('venueInactive').style.display = "block";
    document.getElementById('otherAccountsActive').style.display = "none";
    document.getElementById('otherAccountsInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('adminHome').style.display = "block";
    document.getElementById('adminDatabase').style.display = "none";
    document.getElementById('adminVenue').style.display = "none";
    document.getElementById('adminOtherAccounts').style.display = "none";
    document.getElementById('adminMap').style.display = "block";
    document.getElementById('adminAccount').style.display = "none";
}

function databasePress() {
    document.getElementById('databaseActive').style.display = "block";
    document.getElementById('databaseInactive').style.display = "none";
    document.getElementById('venueActive').style.display = "none";
    document.getElementById('venueInactive').style.display = "block";
    document.getElementById('otherAccountsActive').style.display = "none";
    document.getElementById('otherAccountsInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('adminHome').style.display = "none";
    document.getElementById('adminDatabase').style.display = "block";
    document.getElementById('adminVenue').style.display = "none";
    document.getElementById('adminOtherAccounts').style.display = "none";
    document.getElementById('adminMap').style.display = "none";
    document.getElementById('adminAccount').style.display = "none";
}

function venuePress() {
    document.getElementById('databaseActive').style.display = "none";
    document.getElementById('databaseInactive').style.display = "block";
    document.getElementById('venueActive').style.display = "block";
    document.getElementById('venueInactive').style.display = "none";
    document.getElementById('otherAccountsActive').style.display = "none";
    document.getElementById('otherAccountsInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('adminHome').style.display = "none";
    document.getElementById('adminDatabase').style.display = "none";
    document.getElementById('adminVenue').style.display = "block";
    document.getElementById('adminOtherAccounts').style.display = "none";
    document.getElementById('adminMap').style.display = "none";
    document.getElementById('adminAccount').style.display = "none";
}

function otherAccountsPress() {
    document.getElementById('databaseActive').style.display = "none";
    document.getElementById('databaseInactive').style.display = "block";
    document.getElementById('venueActive').style.display = "none";
    document.getElementById('venueInactive').style.display = "block";
    document.getElementById('otherAccountsActive').style.display = "block";
    document.getElementById('otherAccountsInactive').style.display = "none";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('adminHome').style.display = "none";
    document.getElementById('adminDatabase').style.display = "none";
    document.getElementById('adminVenue').style.display = "none";
    document.getElementById('adminOtherAccounts').style.display = "block";
    document.getElementById('adminMap').style.display = "none";
    document.getElementById('adminAccount').style.display = "none";
}

function mapPress() {
    document.getElementById('databaseActive').style.display = "none";
    document.getElementById('databaseInactive').style.display = "block";
    document.getElementById('venueActive').style.display = "none";
    document.getElementById('venueInactive').style.display = "block";
    document.getElementById('otherAccountsActive').style.display = "none";
    document.getElementById('otherAccountsInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "block";
    document.getElementById('mapInactive').style.display = "none";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('adminHome').style.display = "none";
    document.getElementById('adminDatabase').style.display = "none";
    document.getElementById('adminVenue').style.display = "none";
    document.getElementById('adminOtherAccounts').style.display = "none";
    document.getElementById('adminMap').style.display = "block";
    document.getElementById('adminAccount').style.display = "none";
}

function accountPress() {
    document.getElementById('databaseActive').style.display = "none";
    document.getElementById('databaseInactive').style.display = "block";
    document.getElementById('venueActive').style.display = "none";
    document.getElementById('venueInactive').style.display = "block";
    document.getElementById('otherAccountsActive').style.display = "none";
    document.getElementById('otherAccountsInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "block";
    document.getElementById('accountInactive').style.display = "none";

    document.getElementById('adminHome').style.display = "none";
    document.getElementById('adminDatabase').style.display = "none";
    document.getElementById('adminVenue').style.display = "none";
    document.getElementById('adminOtherAccounts').style.display = "none";
    document.getElementById('adminMap').style.display = "none";
    document.getElementById('adminAccount').style.display = "block";
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
                        coordinates: [138.60388318395428,-34.921368277389476]
                    },
                    properties: {
                        title: 'Rundle Mall',
                        description: '03:35 PM 13/06/21 Antony Cameron'
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