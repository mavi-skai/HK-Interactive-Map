window.addEventListener('load', function () {
    let mapExtent = [0.00000000, -2901.00000000, 4498.00000000, 0.00000000];
    let mapMinZoom = 0;
    let mapMaxZoom = 3;
    let mapMaxResolution = 0.50000000;
    let mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
    let tileExtent = [0.00000000, -2901.00000000, 4498.00000000, 0.00000000];

    let crs = L.CRS.Simple; //no need georeference .Simple
    crs.transformation = new L.Transformation(1, -tileExtent[0], -1, tileExtent[3]);

    crs.scale = function(zoom) {
        return Math.pow(2, zoom) / mapMinResolution;
      };
      
    crs.zoom = function(scale) {
        return Math.log(scale * mapMinResolution) / Math.LN2;
    };

    var map = new L.Map('map', {
        maxZoom: mapMaxZoom,
        minZoom: mapMinZoom,
        crs: crs,
        maxBoundsViscosity: 1.0,
        maxBounds: [
          crs.unproject(L.point(mapExtent[0], mapExtent[1])),
          crs.unproject(L.point(mapExtent[2], mapExtent[3]))
          ]
      });
    
    var layer;
    layer = L.tileLayer('/{z}/{x}/{y}.png', {
    minZoom: mapMinZoom, maxZoom: mapMaxZoom,
    tileSize: L.point(2048, 1024),
    bounds: [[mapExtent[1], mapExtent[0]], [mapExtent[3], mapExtent[2]]],
    noWrap: true,
    tms: false
    }).addTo(map);


    map.fitBounds([
        crs.unproject(L.point(mapExtent[2], mapExtent[3])),
        crs.unproject(L.point(mapExtent[0], mapExtent[1]))
      ]);
      
    L.control.mousePosition().addTo(map)
    
    

});


//#region
// //For example, to change the position of
// //the zoom control to the top left corner of the map:
// var zoomControl = new L.Control.Zoom({position: 'topleft'});
// map.addControl(zoomControl);

// //To change the zoom in and zoom out icons, you can use the zoomInText
// // and zoomOutText options when creating the zoom control object.
// var zoomControl = new L.Control.Zoom({
//     position: 'topright',
//     zoomInText: '+',
//     zoomOutText: '-'
// });
// map.addControl(zoomControl);

// //You could also use your own icons or images.
// var zoomControl = L.control.zoom({
//     position: 'topright',
//     zoomInText: '<i class="fas fa-plus"></i>',
//     zoomOutText: '<i class="fas fa-minus"></i>'
// });
// map.addControl(zoomControl);

// //You can also use CSS to customize the appearance of the zoom control buttons.
// .leaflet-control-zoom-in, .leaflet-control-zoom-out {
//     background-color: blue;
//     color: white;
//     font-size: 20px;
//     padding: 5px;
// }
//#endregion

