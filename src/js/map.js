/*MAP*/


function initMap() {
    let myCenter = {lat: 17.506696, lng: -88.211292};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: 17.506696, lng: -88.211292}

    });
    let marker = new google.maps.Marker({
        position: myCenter,
        map: map
    });
}