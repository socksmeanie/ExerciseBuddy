var exercise = 0

/*var date = new Date();*/
/*var n = date.getDate();

var year = date.getYear();
var fullYear = date.getFullYear();
var month = date.getMonth();
var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
*/





function clock() {
    var date = new Date();

    var n = date.getDate();

    var year = date.getYear();
    var fullYear = date.getFullYear();
    var month = date.getMonth();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
;
      /*if (fullYear = 3) {
        fullYear = "error";
      };*/

      /*function nameMonths(month) {*/
        if (month === 0) {
          month = "January";
        } else if (month === 1) {
          month = "February"
        } else if (month === 2) {
          month = "March"
        } else if (month === 3) {
          month = "April"
        } else if (month === 4) {
          month = "May"
        } else if (month === 5) {
          month = "June"
        } else if (month === 6) {
          month = "July"
        } else if (month === 7) {
          month = "August"
        } else if (month === 8) {
          month = "September"
        } else if (month === 9) {
          month = "October"
        } else if (month === 10) {
          month = "November"
        } else if (month === 11) {
          month = "December"
        }/*
      }

      nameMonths(month);*/

    if (exercise === 0) {
      document.getElementById("time").append(month + year + time);
    }

      document.getElementById("time").innerHTML = month + ", " + fullYear + ", " + time;
      setTimeout(clock, 1000);
}

    clock();
