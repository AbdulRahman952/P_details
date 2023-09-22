let number = document.getElementById('number');
let counter = 0;

setInterval(()=>{
    if(counter == 100 ) {
       clearInterval;

    } else
    { 
    counter += 1;
    number.innerHTML = `${counter}%`;
    }
},17);


let number2 = document.getElementById('number2');
let counter2 = 0;
setInterval(()=>{
    if(counter2 == 90 ) {
       clearInterval;

    } else
    { 
    counter2 += 1;
    number2.innerHTML = `${counter2}%`;
    }
},18);