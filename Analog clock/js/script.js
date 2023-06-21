const hour=document.querySelector('.hrs');
const minute=document.querySelector('.mins');
const second=document.querySelector('.secs');

setInterval(runClock,1000);

function runClock(){
    const time=new Date();
    console.log(new Date);
    const secs=(time.getSeconds())/60;
    const mins=(secs+time.getMinutes())/60;
    const hrs=(mins+time.getHours())/12;
    console.log(hrs,mins,secs);

    hour.style.setProperty('--rotation',hrs*360);
    minute.style.setProperty('--rotation',mins*360);
    second.style.setProperty('--rotation',secs*360);   
    
    
   
}

runClock();





   