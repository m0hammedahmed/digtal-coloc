let hrs =document.querySelector('.hour');
let mins =document.querySelector('.min');
let secs =document.querySelector('.sec');
let currentTime=new Date();
setInterval(function(){
    currentTime=new Date();
    let hr=currentTime.getHours();
    if(hr>12){
        hr=hr-12;
    }
let min=currentTime.getMinutes();
let sec=currentTime.getSeconds();
hrs.innerHTML=hr<10?'0'+hr:hr;
mins.innerHTML=min<10?'0'+min:min;
secs.innerHTML=sec<10?'0'+sec:sec;
},1000)





