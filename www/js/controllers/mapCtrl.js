angular.module('pornoite')
.controller('mapCtrl', function($scope, $state, $cordovaGeolocation, $rootScope) {

  var tamEst = 0;
  var i = 0;

  var pin_blue = {
    url:'img/icon_pin_blue.png',
    scaledSize: new google.maps.Size(20, 20)
  }

  var pin_red = {
    url:'img/icon_pin_red.png',
    scaledSize: new google.maps.Size(20, 20)
  }

  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var markerI = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng,
          icon: pin_red
      });

      var infoWindow = new google.maps.InfoWindow({
      content: "Você está aqui!"
    });

    google.maps.event.addListener(markerI, 'click', function () {
        infoWindow.open($scope.map, markerI);
    });



    // plotar os markers
    var latMotelFree = "-3.0859385";
    var longMotelFree = "-60.0674463";

    // -3.0797038,-60.0790476

    var latLng = new google.maps.LatLng(latMotelFree, longMotelFree);

    var markerMf = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng,
          icon: pin_blue
      });

    var latTahiti = "-3.0797038";
    var longTahiti = "-60.0790475";

    var latLongTahiti = new google.maps.LatLng(latTahiti, longTahiti);

    var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLongTahiti,
          icon: pin_blue
      });


  google.maps.event.addListener(markerMf, 'click', function() {
        window.location.href = '#/app/details';
      });


  }, function(error){
    console.log("Não foi possível pegar sua localização, tente novamente!");
  });

});
