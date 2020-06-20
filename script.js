storeValues();
// Shows current date on webpage
var now = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(now);

// Save button 'click' actions
$("#hour-9>.saveBtn").on("click", function () {
  var nineVal = $("#hour-9>.description").val();
  localStorage.setItem("nineEvent", nineVal);
});
$("#hour-10>.saveBtn").on("click", function () {
  var tenVal = $("#hour-10>.description").val();
  localStorage.setItem("tenEvent", tenVal);
});
$("#hour-11>.saveBtn").on("click", function () {
  var elevenVal = $("#hour-11>.description").val();
  localStorage.setItem("elevenEvent", elevenVal);
});
$("#hour-12>.saveBtn").on("click", function () {
  var twelveVal = $("#hour-12>.description").val();
  localStorage.setItem("twelveEvent", twelveVal);
});
$("#hour-13>.saveBtn").on("click", function () {
  var oneVal = $("#hour-13>.description").val();
  localStorage.setItem("oneEvent", oneVal);
});
$("#hour-14>.saveBtn").on("click", function () {
  var twoVal = $("#hour-14>.description").val();
  localStorage.setItem("twoEvent", twoVal);
});
$("#hour-15>.saveBtn").on("click", function () {
  var threeVal = $("#hour-15>.description").val();
  localStorage.setItem("threeEvent", threeVal);
});
$("#hour-16>.saveBtn").on("click", function () {
  var fourVal = $("#hour-16>.description").val();
  localStorage.setItem("fourEvent", fourVal);
});
$("#hour-17>.saveBtn").on("click", function () {
  var fiveVal = $("#hour-17>.description").val();
  localStorage.setItem("fiveEvent", fiveVal);
});

function storeValues() {
  var nineEvent = localStorage.getItem("nineEvent");
  var tenEvent = localStorage.getItem("tenEvent");
  var elevenEvent = localStorage.getItem("elevenEvent");
  var twelveEvent = localStorage.getItem("twelveEvent");
  var oneEvent = localStorage.getItem("oneEvent");
  var twoEvent = localStorage.getItem("twoEvent");
  var threeEvent = localStorage.getItem("threeEvent");
  var fourEvent = localStorage.getItem("fourEvent");
  var fiveEvent = localStorage.getItem("fiveEvent");
  $("#hour-9>.description").val(nineEvent);
  $("#hour-10>.description").val(tenEvent);
  $("#hour-11>.description").val(elevenEvent);
  $("#hour-12>.description").val(twelveEvent);
  $("#hour-13>.description").val(oneEvent);
  $("#hour-14>.description").val(twoEvent);
  $("#hour-15>.description").val(threeEvent);
  $("#hour-16>.description").val(fourEvent);
  $("#hour-17>.description").val(fiveEvent);
}

var currentHour = moment().format("HH");

console.log(currentHour);
$(".description").css("border-style", "dashed");

function colorCode() {
    if (currentHour > 9 ) {
        $("#hour-9>.description").css("background-color", "LightGrey");

    }
    else if (currentHour == 9) {
        $("#hour-9>.description").css("background-color", "red");

    }
    else {
        $("#hour-9>.description").css("background-color", "Lime");

    }
    if (currentHour > 10 ) {
        $("#hour-10>.description").css("background-color", "LightGrey");

    }
    else if (currentHour == 10) {
        $("#hour-10>.description").css("background-color", "red");

    }
    else {
        $("#hour-10>.description").css("background-color", "Lime");

    }    
    if (currentHour > 11 ) {
        $("#hour-11>.description").css("background-color", "LightGrey");

    }
    else if (currentHour == 11) {
        $("#hour-11>.description").css("background-color", "red");

    }
    else {
        $("#hour-11>.description").css("background-color", "Lime");

    }    
    if (currentHour > 12 ) {
        $("#hour-12>.description").css("background-color", "LightGrey");

    }
    else if (currentHour == 12) {
        $("#hour-12>.description").css("background-color", "red");

    }
    else {
        $("#hour-12>.description").css("background-color", "Lime");

    }    
    if (currentHour > 13 ) {
        $("#hour-13>.description").css("background-color", "LightGrey");

    }
    else if (currentHour == 13) {
        $("#hour-13>.description").css("background-color", "red");

    }
    else {
        $("#hour-13>.description").css("background-color", "Lime");

    }    
    if (currentHour > 14 ) {
        $("#hour-14>.description").css("background-color", "LightGrey");

    }
    else if (currentHour == 14) {
        $("#hour-14>.description").css("background-color", "red");

    }
    else {
        $("#hour-14>.description").css("background-color", "Lime");

    }    
    if (currentHour > 15) {
        $("#hour-15>.description").css("background-color", "LightGrey");

    }
    else if (currentHour == 15) {
        $("#hour-15>.description").css("background-color", "red");

    }
    else {
        $("#hour-15>.description").css("background-color", "Lime");

    }    
    if (currentHour > 16 ) {
        $("#hour-16>.description").css("background-color", "LightGrey");

    }
    else if (currentHour == 16) {
        $("#hour-16>.description").css("background-color", "red");

    }
    else {
        $("#hour-16>.description").css("background-color", "Lime");

    }    
    if (currentHour > 17 ) {
        $("#hour-17>.description").css("background-color", "LightGrey");

    }
    else if (currentHour == 17) {
        $("#hour-17>.description").css("background-color", "red");

    }
    else {
        $("#hour-17>.description").css("background-color", "Lime");

    }    

}
colorCode();