const elList = document.getElementById("main-list");
const item = document.querySelectorAll(".insta__item");


showIt(object, 1);
function showIt(array, num){
  array.forEach((item) => {
     li = document.createElement("li");
     li.className = `insta__item d-flex align-items-center justify-content-center`;
     li.innerHTML = `
     <div class="insat__wrrapper">
      <img class="insta__main" src="${item.media[0]}" alt="img">
       <p class="insta__link text-center">${item.text}</p>
     </div>
     `;

     if(num == 1){      
      elList.appendChild(li);
    }
  });
}

item.forEach((el) =>{
  el.addEventListener("click", () =>{
    el.style.scale = "1.5"
  });
});


let leftBtn = document.getElementById('slide-left');
let rightBtn = document.getElementById('slide-right');
let itemCard = document.querySelectorAll('#main-list li');

let idx = 0;

function postSlider() {
    if(idx > itemCard.length - 1){
      idx = 0;
    }
    else if(idx < 0) {
      idx = itemCard - 1;
    }

    elList.style.transform =`translateX(${-idx * 50}px)`
}
rightBtn.addEventListener('click', ()=> {
    idx++;
    resetInter();
    postSlider();
})
leftBtn.addEventListener('click', ()=> {
    idx--;
    resetInter();
    postSlider();
})

let interval = setInterval(run, 3000);

function run() {
    idx++;
    postSlider();
}
function resetInter() {
    clearInterval(interval);
    interval = setInterval(run, 3000)
}