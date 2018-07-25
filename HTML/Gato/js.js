var flag =0;
var player = [];
var machine = [];
var tiros=[];
var tiro=0;
var solutions = ["123","456","789","147","258","369","159","357"];



$("td").click(function () {
    var id=  this.getAttribute("id");
    id=id.substring(id.length-1);

    this.bgColor ="red";
    this.innerHTML ="X";

    value ="X";
    player.push(id);
    tiro=id;
    tiros.push(id);
    this.classList.add("noMoreClick");
  var win= check(player);
  console.log("coincidencias "+win);
          if(tiros.length<9 && win !=3 ){

              machineIA(tiro,win);
          }



    //}
});

function check(array) {
  var cad="";
  var winning=0;
    for (var i = 0; i < solutions.length; i++) {
        winning=0;
      for (var j = 0; j < array.length; j++) {
        if(solutions[i].includes(array[j])){
            winning++;

        }
      }
      if(winning==3){
        setTimeout( function () {
          alert("win");
        }, 100);

        break;
      }
      else if (winning == 2) {
         cad=solutions[i];
        
      }

    }
    if(winning == 3){
      return winning;
    }
    else{
        return cad;
    }

}



function machineIA(t,string) {
var go=0;
var val=t;
var flag=0;


if(string.length == 3){
    for (var i = 0; i < string.length; i++) {
       for (var j = 0; j < tiros.length; j++) {
         if(tiros[j] != string.charAt(i) ){
           val=string.charAt(i);  flag =1; break;
         }
       }
    }
    }

while(go == 0){
  if(flag ==0){
    val=Math.floor(Math.random() * 9) + 1;
  }

  for (var i = 0; i <tiros.length; i++) {
    if(tiros[i] != val.toString()){
      go=1;
    }
    else{go=0; flag=0; break;}
  }

  continue;


 }




  machine.push(val.toString());
    tiros.push(val.toString())
  check(machine);
  document.getElementsByTagName("td")[val-1].bgColor="yellow";
  document.getElementsByTagName("td")[val-1].innerHTML ="O";
  document.getElementsByTagName("td")[val-1].classList.add("noMoreClick");


}


function reset() {
  $("td").removeClass("noMoreClick");
  $("td").attr("bgcolor","white");
  $("td").text("");
  machine = [],tiros = [],player = [];
}
