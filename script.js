let time=()=>{
    let d=new Date();
let n=d.getHours ();
if(n>12){
    
    document.getElementById('hour').innerHTML=n-12;
}
else{
    if(n<10) {
        document.getElementById('hour').innerHTML=`0${n}`;
    }else{
        document.getElementById('hour').innerHTML=n;
    }
    
}
if(n>12) document.getElementById('apm').innerHTML="PM";
else document.getElementById('apm').innerHTML="AM";
n=d.getMinutes();
if(n<10) {
    document.getElementById(`min`).innerHTML=`0${n}`;
}
else{
    document.getElementById('min').innerHTML=n;
}

n=d.getSeconds();
if(n<10) {
    document.getElementById(`sec`).innerHTML=`0${n}`;
}
else{
    document.getElementById('sec').innerHTML=n;
}
}

let i=setInterval(time,1000);
let decider=0;
function myFun(){
    if(decider==0){
        clearInterval(i);
        decider=1;
        document.getElementById('we').innerHTML="Turn ON The Clock";
    }
   else if(decider==1){
    document.getElementById('we').innerHTML="Turn OFF The Clock";
    i=setInterval(time,1000);
    decider=0;
   }
}
