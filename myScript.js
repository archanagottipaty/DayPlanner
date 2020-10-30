
//localStorage.clear();
var d = new Date();
var moment = moment().format('dddd Do MMMM');
// localStorage.setItem(9, "TTTTTT");
// localStorage.setItem(4, "TodaY IS ADay");
// localStorage.setItem(10, "TDay");
// localStorage.setItem(3, "ToARCHAND Day");
// let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//console.log(n);
// to get todays date
var get = localStorage.getItem(9);
var number = 9;

var hourNow = moment().hour();

//console.log(timeSlot);

for(i=9 ;i<18; i++){
  if (i ==12){timeSlot = i + "PM"; number= i;}
  else if (i>12){
    var j = i - 12;
    number = j;
    console.log("Number: " + number);
    timeSlot=j+"PM";
    }
  else{
  timeSlot = i + "AM";
  number = i;
  console.log("Number: " + number);}

  // var get = localStorage.getItem(number);
  //  if (get == null) get = "";
  var get = localStorage.getItem(i);
  //  if (get == null) get = "";

$(".container").append(
`<div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-lg">${timeSlot}</span>
        </div>
        <input type="text" name = ${number} class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" value = ${get}>
        <div class="input-group-append">
          <span class="input-group-text" id="inputGroup-sizing-lg" ><a href =""><i id = "${number}" class="fa fa-lock"></i></a></span>
        </div>
      </div> `
)};



function colorMe(){
  document.querySelectorAll("input");
  var allSpans = querySelectorAll("span");

  allSpans.forEach(function(element) {
if (hourNow == element.value()){
  $("element").attr("class","present");}
  })};


  // $("form").on("submit", function (e) {
  //   e.preventDefault()

  //   const time = e.target.querySelector("input").getAttribute("id")
  //   const text = e.target.querySelector("input").value

  //   window.localStorage.setItem(time, text)
  // })


$("i").click(function(){
  $(document).ready(function (){
  console.log("Inside click");
   let clickedId =$(this).attr('id');
   console.log(`clickedId: ${clickedId}`);
   //"[href='default.htm']"
  //  var myVar1 =$( "input" ).find(attr( "name", clickedId ));
  //  console.log(myVar1);
  // var myVar1=($([name=clickedId]));
  // var myVar4 = JSON.parse(myVar1);
  var myElement = document.querySelectorAll("input");
  //var myElement1 = JSON.stringify(myElement);

  myElement.forEach(function(element) {
    var attributeName = element.getAttribute("name");
    console.log(attributeName);
    
  });
  console.log("myElement:  " + myElement);
  //console.log("myElement1:  " + myElement1);



  //console.log("myVar4:  " + myVar4);

  //console.log("myVar1:  " + myVar1);

  var myVar= $("input").attr('value');
  var myVar2 =$("input").val();
  $("input:text").val("Glenn Quagmire");
  console.log(myVar);
  console.log(myVar2);
 // localStorage.setItem(num, myVar);
});

});

