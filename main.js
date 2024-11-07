//preparazione dati
const cardConatainer= document.getElementById("container-cards");

//chiamata API

fetch(`https://jsonplaceholder.typicode.com/photos?_limit=6"`)
.then((response) => response.json())
.then((cards)=>{
    //console.log(card);
    cards.forEach((card) => {

        cardConatainer.innerHTML +=`
        <div class="col-12 col-md-6 col-lg-4  p-3">
             <div class="single-card">
                 <div class="single-card-img">
                    <img src="${card.url}" alt="">
                 </div>
                 <div class="card-description">${card.title}</div>
             </div>
         </div>`
        
    });
    //raccolta dati per eventListner
    const singleCard = document.querySelectorAll('#container-cards .single-card');
    const overlay = document.getElementById("overlay");
    const btnClose=document.getElementById("btn-close");
    
    singleCard.forEach((card) => {
    //console.log(card);
    card.addEventListener("click", function() {
    overlay.classList.remove("d-none")
    })
    })
    btnClose.addEventListener("click",()=>{
        overlay.classList.add("d-none");
    })
} )

