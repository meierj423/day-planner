var now = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(now);

var descriptionVal = [];

// console.log($(".description").length);
var descriptions = [];

for (i = 0; i < $(".description").length; i++) {
  descriptions.push($(".description")[i]);
}
// var description = $(".description");
// var description9 = $(".description")[0];
// var description10 = $(".description")[1];
// var description11 = $(".description")[2];
// var description12 = $(".description")[3];
// var description1 = $(".description")[4];
// var description2 = $(".description")[5];
// var description3 = $(".description")[6];
// var description4 = $(".description")[7];
// var description5 = $(".description")[8];

// var input = description.html("hi");
// description.css("background-color", "red");
// description.css("border-style", "solid");

$(".saveBtn").on("click", function () {
  for (i = 0; i < $(".description").length; i++) {
    descriptionVal.push(descriptions[i].value);
    console.log(descriptions[i].value);
  }

  //   var nineEvent = descriptions[0].value;
  //   var tenEvent = description10.value;
  //   var elevenEvent = description11.value;
  //   var twelveEvent = description12.value;
  //   var oneEvent = description1.value;
  //   var twoEvent = description2.value;
  //   var threeEvent = description3.value;
  //   var fourEvent = description4.value;
  //   var fiveEvent = description5.value;
  localStorage.setItem("nineEvent", descriptionVal[0]);
  localStorage.setItem("tenEvent", descriptionVal[1]);
  localStorage.setItem("elevenEvent", descriptionVal[2]);
  localStorage.setItem("twelveEvent", descriptionVal[3]);
  localStorage.setItem("oneEvent", descriptionVal[4]);
  localStorage.setItem("twoEvent", descriptionVal[5]);
  localStorage.setItem("threeEvent", descriptionVal[6]);
  localStorage.setItem("fourEvent", descriptionVal[7]);
  localStorage.setItem("fiveEvent", descriptionVal[8]);
  var nineEvent = localStorage.getItem("nineEvent");
  var tenEvent = localStorage.getItem("tenEvent");
  var elevenEvent = localStorage.getItem("elevenEvent");
  var twelveEvent = localStorage.getItem("twelveEvent");
  var oneEvent = localStorage.getItem("oneEvent");
  var twoEvent = localStorage.getItem("twoEvent");
  var threeEvent = localStorage.getItem("threeEvent");
  var fourEvent = localStorage.getItem("fourEvent");
  var fiveEvent = localStorage.getItem("fiveEvent");
  alert(descriptionVal[0]);
  alert(nineEvent);
});
