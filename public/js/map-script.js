"use strict";
$(function() {
    var mapStyle = []

    // Create the map
    var map = new google.maps.Map($('.map-canvas')[0], {
        zoom: 14,
        styles: mapStyle,
        scrollwheel: false,
        center: new google.maps.LatLng(22.614437903931968, 88.30815127116412)
    });

    // Add a marker
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(22.614437903931968, 88.30815127116412)
    });
});
