
setInterval(()=>{
    let todate= new Date();
    let hours = todate.getHours();
    let minutes = todate.getMinutes(); 
    let seconds= todate.getSeconds()
    document.getElementById('clock').innerHTML=`${hours}: ${minutes} : ${seconds}`;


}, 1000)
