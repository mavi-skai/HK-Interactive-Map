
window.addEventListener('load', function () {
    //#region 
    let grubXY = [[-575, 1314],
                   [-704, 1030],
                   [-1015, 860],
                   [-1067, 1085],]
                  //  [-867, 1624],
                  //  [-978, 1569],
                  //  [-1200,1562],
                  //  [-1141, 502],
                  //  [-1400, 836],
                  //  [-1819, 317],
                  //  [-1952, 851],
                  //  [-1891, 1284],
                  //  [-2093, 1252],
                  //  [-1625, 1596],
                  //  [-1520, 1483],
                  //  [-1434, 1878],
                  //  [-923, 1733],
                  //  [-753, 2111],
                  //  [-705, 2571],
                  //  [-829, 2396],
                  //  [-897, 2452],
                  //  [-648, 2290],
                  //  [-695, 2808],
                  //  [-598, 2888],
                  //  [-726, 2933],
                  //  [-721, 3308],
                  //  [-597, 3056],
                  //  [-431, 3392],
                  //  [-981, 3556],
                  //  [-1313, 2516],
                  //  [-1479, 2744],
                  //  [-1458, 2994],
                  //  [-1696, 3265],
                  //  [-1503, 3588],
                  //  [-1509, 3607],
                  //  [-1513, 3626],
                  //  [-1825, 2558],
                  //  [-2168, 2206],
                  //  [-2152, 2560],
                  //  [-1763, 3395],
                  //  [-1864, 3391],
                  //  [-1729, 3573],
                  //  [-1909, 3564],
                  //  [-1715, 4001],
                  //  [-1913, 3916],
                  //  [-1942, 4385],];
    let grubMarkers = []
    let grubMarkerGroup = L.featureGroup();
    
    //#endregion
    
    
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

    map = new L.Map('map', {
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

    
    

    
     
      createMarkers('icon/grub-icon.png',[40,40],grubXY,'Grub',grubMarkers,grubMarkerGroup)
      grubMarkers.forEach(marker => grubMarkerGroup.addLayer(marker));
      map.addLayer(grubMarkerGroup);

    
    

});




function createMarkers(iconUrl,iconSize,markersXY,name,markersArray,markersGroup){

  for(let i=0;i<markersXY.length;i++){
    var Icon = L.icon({
      iconUrl:iconUrl,
      iconSize:iconSize,
    });

    var Marker = L.marker(markersXY[i],{icon:Icon,opacity:1})
    var HideAllpopup = `<br><button id='HideAllMarker'>Hide All ${name} </button>`
    var Foundpopup = "<br><button id='MarkFoundButton'>Mark Found</button>";
    var NotFoundpopup = "<br><button id='MarkFoundButton'>Mark As Not Found</button>"
    Marker.bindPopup(HideAllpopup+Foundpopup);


    Marker.on("popupopen",function(e){
      var marker = e.target
      var button = document.getElementById('MarkFoundButton')
      var button2 = document.getElementById('HideAllMarker')

      button.addEventListener('click',function(){
        var opacity = marker.options.opacity;
        marker.setOpacity(opacity===1? 0.5:1)
        marker.closePopup();
        if(opacity===1){
          var popupContent = HideAllpopup+NotFoundpopup;
          marker.bindPopup(popupContent);
        }
        else{
          var popupContent = HideAllpopup+Foundpopup;
          marker.bindPopup(popupContent);
        }
      })

      button2.addEventListener('click',function(){
          hideAllMarkers(markersGroup)
      })



    })
    markersArray[i] = Marker
  }
}


function hideAllMarkers(groupMarkers){
    map.removeLayer(groupMarkers);
}

function updateMarker(){

}