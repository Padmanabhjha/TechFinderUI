function initialize_map() {
  var bounds = new google.maps.LatLngBounds();

  var locations = [ [ 'Technician', 17.49, 78.38, 4 ],
      [ 'You', 17.431, 78.4469, 5 ] ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom : 10,
    center : new google.maps.LatLng(17.50, 78.45),
    mapTypeId : google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker(
        {
          position : new google.maps.LatLng(locations[i][1],
              locations[i][2]),
          map : map
        });
    bounds.extend(marker.position);

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  map.fitBounds(bounds);
}
$(document).ready(function() {

  if ($("#newInsRadio").prop("checked")) {
    // do something
    $('#typeSection').css("display", "block");
    $('#mainTypeSection').css("display", "none");

  }

  if ($("#mainRadio").prop("checked")) {
    $('#typeSection').css("display", "none");
    // do something

  }

  $("#radioGroup input[name='serviceType']").click(function() {

    if ($('input:radio[name=serviceType]:checked').val() == "new_install") {
      $('#typeSection').css("display", "block");
      $('#mainTypeSection').css("display", "none");
      $('#map').css("display", "none");
      $('#booking').css("display", "none");
    } else {
      $('#mainTypeSection').css("display", "block");
      $('#typeSection').css("display", "none");
      $('#map').css("display", "none");
      $('#booking').css("display", "none");
    }
  });

  //$("#typeSection").change(function () {
  //       $('#map').css("display", "block");
  //       $('#booking').css("display", "block");
  //       initialize_map();
  //  });
   //$("#mainTypeSection").change(function () {
   //      $('#map').css("display", "block");
   //      $('#booking').css("display", "block");
   //      initialize_map();
   // });

});