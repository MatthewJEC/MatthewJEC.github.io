let map;

function initMap() {
    const mayfield = { lat: 55.876155, lng: -3.039505 }
    map = new google.maps.Map(document.getElementById("map"), {
    center: mayfield,
    zoom: 16,
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ellis Thom Hair Studio</h1>' +
    '<div id="bodyContent">' +
    "<h2>1 Ashgrove<br> " +
    "Mayfield<br> " +
    "Midlothian<br> " +
    "EH22 5DA</h2>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
    const marker = new google.maps.Marker({
        position: mayfield,
        map: map,
        title:"1 Ashgrove, Mayfield"
    });

    // let openMarker = () => {
    //   infowindow.open({
    //     anchor: marker,
    //     map,
    //     shouldFocus: false,
    //   });
    // });
    // }
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
    // openMarker;
}