//dashboardScript.js

$(function() {
  //idlegame
  let color = 'red';
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  let e = 0;
  let f = 0;
  let g = 0;
  let colID = "";

  $('.column').click(function() {
      colID = $(this).attr("id");
      if (colID == 'col1') {
          if (a <= 5) {
              $(this).prepend(`<div class="disc ${color}"></div>`);
              //console.log("column = " + colID);
              //console.log("a = " + a);
              if (color === 'red') {
              color = 'black';
              } else {
              color = 'red';
              }
              a++;
          }
      } else if (colID == 'col2') {
          if (b <= 5) {
              $(this).prepend(`<div class="disc ${color}"></div>`);
              //console.log("column = " + colID);
              //console.log("b = " + b);
              if (color === 'red') {
              color = 'black';
              } else {
              color = 'red';
              }
              b++;
          }
      } else if (colID == 'col3') {
          if (c <= 5) {
              $(this).prepend(`<div class="disc ${color}"></div>`);
              //console.log("column = " + colID);
              //console.log("c = " + c);
              if (color === 'red') {
              color = 'black';
              } else {
              color = 'red';
              }
              c++;
          }
      } else if (colID == 'col4') {
          if (d <= 5) {
              $(this).prepend(`<div class="disc ${color}"></div>`);
              //console.log("column = " + colID);
              //console.log("d = " + d);
              if (color === 'red') {
              color = 'black';
              } else {
              color = 'red';
              }
              d++;
          }
      } else if (colID == 'col5') {
          if (e <= 5) {
              $(this).prepend(`<div class="disc ${color}"></div>`);
              //console.log("column = " + colID);
              //console.log("e = " + e);
              if (color === 'red') {
              color = 'black';
              } else {
              color = 'red';
              }
              e++;
          }
      } else if (colID == 'col6') {
          if (f <= 5) {
              $(this).prepend(`<div class="disc ${color}"></div>`);
              //console.log("column = " + colID);
              //console.log("f = " + f);
              if (color === 'red') {
              color = 'black';
              } else {
              color = 'red';
              }
              f++;
          }
      }
      else if (colID == 'col7') {
          if (g <= 5) {
              $(this).prepend(`<div class="disc ${color}"></div>`);
              //console.log("column = " + colID);
              //console.log("g = " + g);
              if (color === 'red') {
              color = 'black';
              } else {
              color = 'red';
              }
              g++;
          }
      }
    });

    $('#boardclear').click(function() {
      //console.log("The clear button was clicked!");
      $('.disc').remove();
      color = 'red';
      a = 0;
      b = 0;
      c = 0;
      d = 0;
      e = 0;
      f = 0;
      g = 0;
    });

    //To-Do List
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