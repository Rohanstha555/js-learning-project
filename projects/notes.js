let title = document.getElementById("Title");
let desp = document.getElementById("desp");
let addBtn = document.querySelector(".btn");
let grid = document.querySelector(".notes-grid")

let arr = [];
addBtn.addEventListener("click", () => {
  let d = new Date();
  let newdate = d.toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })


  console.log(newdate);

  const data = {
    title: title.value,
    desp: desp.value,
    newdate: newdate
  };
  arr.push(data);
  console.log(data)
  console.log(arr)

    arr.forEach((ochinci) =>{
       let html = `<div class="note-card">
            <div class="note-header">
              <div>
                <div class="note-title">${ochinci.title}</div>
                <div class="note-date">${ochinci.newdate}</div>
              </div>
            </div>
            <div class="note-content">
              ${ochinci.desp}
            </div>
            <div class="note-actions">
              <button class="note-btn edit-btn">Edit</button>
              <button class="note-btn delete-btn">Delete</button>
            </div>
          </div>`
          grid.innerHTML += html;
    })

});
