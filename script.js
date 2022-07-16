function clock(){
    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();

    var year=date.getFullYear();
    var month=date.getMonth();
    var day=date.getDate();

    document.getElementById("date").innerHTML="Date "+day+"/" + month + "/" + year;

    var midday;

    hours=updateTime(hours);
    minutes=updateTime(minutes);
    seconds=updateTime(seconds);

    midday=(hours>=12) ? "PM" :"AM";

    document.getElementById("clock").innerHTML="Time  "+hours + ":" +minutes + ":" + seconds +" "+ midday;

    var time=setTimeout(function(){
        clock();
    },1000);

    if(hours<12){
        var greeting ="Good Morning";
        
        document.body.style.backgroundImage="url('./images/morning.jpg')";
        document.getElementById("date").style.color="white";
        document.getElementById("clock").style.color="white";
        document.getElementById("greeting").style.color="white";
        
    }
    if(hours>=12 && hours<=18){
        var greeting ="Good Afternoon";
        document.body.style.backgroundImage="url('./images/noon1.webp')";
        document.getElementById("date").style.color="black";
        document.getElementById("clock").style.color="black";
        document.getElementById("greeting").style.color="black";
    }
    if(hours>=18 && hours<=24){
        var greeting ="Good Evening";
        document.body.style.backgroundImage="url('./images/evening.jpg')";
        document.getElementById("date").style.color="white";
        document.getElementById("clock").style.color="white";
        document.getElementById("greeting").style.color="white";
    }

    document.getElementById("greeting").innerHTML=greeting;



}
function updateTime(k){
    if(k<10){
        return "0" +k;
    }
    else{
          return k;  
    }
}
clock();

var GetName=document.getElementById("text1");
localStorage.setItem("info",JSON.stringify(GetName));