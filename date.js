// dates and time

let date = document.getElementById("date");
// let newdate = new Date();
// date.innerHTML=`${newdate}`;
// date.innerHTML=`${newdate.toLocaleString()}`;
// date.innerHTML=`${newdate.toDateString()}`;
// date.innerHTML=`${newdate.toLocaleDateString()}`;
// date.innerHTML=`${newdate.toISOString()}`;
// date.innerHTML=`${newdate.toJSON()}`;


// let createddate = new Date("2086-03-03"); //giving maanually date values

// let timestamp = Date.now();

// date.innerHTML = `${timestamp}`;
// date.innerHTML = `${createddate.getTime()}`; //turning manual values into milisec
// date.innerHTML = `${Math.round(Date.now()/1000)}`; //into sec

let newdate = new Date();
//  date.innerHTML=`${newdate.getDay()}`;
//  date.innerHTML=`${newdate.getMonth()}`;


// date.innerHTML=`${newdate}`;

 date.innerHTML=`${newdate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
 })}`;



