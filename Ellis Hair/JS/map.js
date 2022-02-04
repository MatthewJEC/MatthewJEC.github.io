let map;

function initMap() {
    const mayfield = { lat: 55.876155, lng: -3.039505 }
    map = new google.maps.Map(document.getElementById("map"), {
    center: mayfield,
    zoom: 17,
  });
    const marker = new google.maps.Marker({
        position: mayfield,
        map: map,
        title:"1 Ashgrove, Mayfield"
    });
}