$(window).on("load", function () {
    $("#mapa").gmap3({
        map: {
            options: {
                center: [49.675987588153006, 19.623264321126044],
                zoom: 11,
                disableDefaultUI: true

            },
        },
        marker: {        
        options: {
                draggable: true
        },
        latLng: [49.675987588153006, 19.623264321126044]

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