const elList = document.getElementById("main-list");


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

     elList.appendChild(li);
  });
}
object.forEach((item, index) =>{
  let items = document.querySelectorAll(".insta__item");
  items.forEach(el =>{
    el.addEventListener("click", () =>{
      el.className = `insta__item actives d-flex flex-column justify-content-between`;
      el.innerHTML = `
      <button id="left" class="insta__btn"><i class='bx bx-chevron-left ikon' ></i></button>
      <div class="insta__media">
        <span class="insta__time"></span>
        <div class="d-flex align-items-center justify-content-between">
          <div class="insta__inner d-flex align-items-center">
            <img class="insta__img" src="https://picsum.photos/id/180/35/35" alt="img">
            <a class="insta__link text-decoration-none" href="#">${item.text}</a>
          </div> 
          <div class="insta__ikons">
            <i class='bx bx-pause insta__ikon'></i>
            <i class='bx bxs-volume-full insta__ikon' ></i>
            <i class='bx bx-dots-horizontal-rounded insta__ikon' ></i>
          </div>
        </div>
      </div>
      <div class="insta__imgbox">
        <!-- <video width="400" height="520" controls>
          <source src="videos/data-two.mp4" type="video/mp4">
        </video> -->
        <img class="insta__imgs" src="${item.media[0]}" alt="img">
      </div>
      <form class="insta__message d-flex align-items-center">
        <input type="text" class="insta__text" placeholder="Ответьте UserName…">
        <i class='bx bx-send'></i>
      </form> 
      <button id="right" class="insta__btn"><i class='bx bx-chevron-right ikon' ></i> </button>
      `;
    })
  })
  
})


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