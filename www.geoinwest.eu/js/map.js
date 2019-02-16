$(document).ready(function () {
    $("#mapa").gmap3({
        map: {
            options: {
                center: [49.727879287481834, 19.674989983692058],
                zoom: 11,
                disableDefaultUI: true

            },
        },
        marker: {        
        options: {
                draggable: false
        },
        latLng: [49.727879287481834, 19.674989983692058]

    }
    })

    $("#mapa").gmap3({
        map: {
            events: {
                click: function (map, event) {
                    console.log(event.latLng.lat());
                    console.log(event.latLng.lng());
                    console.log(map.getZoom());
                }
            }
        }
    });
})