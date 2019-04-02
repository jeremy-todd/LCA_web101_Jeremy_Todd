//dashboardScript.js

$(function() {

    let $list = $('ul');
    let $newItemForm = $('#newItemForm');
  
    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        let text = $('input[type="text"]').val();
        $list.append(`<li>${text}</li>`);
        $('input[type="text"]').val('');
    });
  
    $list.on('click', 'li', function() {
      let $this = $(this);
      $this.remove();
    });
  });

  var myLocation = document.getElementById("location");
  var myLocationLongitude = document.getElementById("posLongitude");
  var myLocationLatitude = document.getElementById("posLatitude");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayPosition);
    } else {
      myLocation.innerHTML = "Not available";
    }
  }

  function displayPosition(position) {
    var posLongitude = position.coords.longitude;
    var posLatitude = position.coords.latitude;
    var posLong = posLongitude.toFixed(3);
    var posLat = posLatitude.toFixed(3);
    myLocationLongitude.innerHTML = posLong;
    document.getElementById("posLatitude").innerHTML = posLat;
    document.getElementById("gmap_canvas").src="https://maps.google.com/maps?q="+posLatitude+"%2C%20"+posLongitude+"&t=k&z=15&ie=UTF8&iwloc=&output=embed";
  }

  function getDateTime() {
    var todayDate = new Date();
    //Get Current Date
      var dd = String(todayDate.getDate());
      var mm = String(todayDate.getMonth() + 1);

      if (mm == 1) {
        MM = "January";
      } else if (mm == 2) {
        MM = "February";
      } else if (mm == 3) {
        MM = "March";
      } else if (mm == 4) {
        MM = "April";
      } else if (mm == 5) {
        MM = "May";
      } else if (mm == 6) {
        MM = "June";
      } else if (mm == 7) {
        MM = "July";
      } else if (mm == 8) {
        MM = "August";
      } else if (mm == 9) {
        MM = "September";
      } else if (mm == 10) {
        MM = "October";
      } else if (mm == 11) {
        MM = "November";
      } else if (mm == 12) {
        MM = "December";
      }
      var yyyy = todayDate.getFullYear();

      document.getElementById("date").innerHTML = MM + " " + dd + ", " + yyyy;

    //Get Current Time
      var hrsNow = todayDate.getHours();
      var minNow = todayDate.getMinutes();
      if (minNow < 10) {
        minNow = "0" + minNow;
      } else {
        minNow = minNow;
      }
      var secNow = todayDate.getSeconds();
      if (secNow < 10) {
        secNow = "0" + secNow;
      } else {
        secNow = secNow;
      }

      if (hrsNow < 12) {
        var ampmNow = "AM";
      } else {
        var ampmNow = "PM";
        var hrsNow = hrsNow - 12;
      }

      document.getElementById("time").innerHTML = hrsNow + ":" + minNow + ":" + secNow + " " + ampmNow;
      //document.getElementById("time").innerHTML = hrsNow + ":" + minNow + " " + ampmNow;

      setTimeout('getDateTime()', '1000');
  }