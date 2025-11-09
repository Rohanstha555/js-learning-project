const course = {
    name : "BCA",
    price : 999,
    instructor : "ROhan"
}

// course.instructor
const {instructor} = course;

let date = document.getElementById('date')
date.innerHTML=`${instructor}`;


