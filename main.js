//preparazione dati
const cardContainer= document.getElementById("container-cards");

//chiamata API

fetch(`https://jsonplaceholder.typicode.com/photos?_limit=6"`)
.then((response) => response.json())
.then((cards)=>{
    //console.log(card);
    cards.forEach((card) => {

        cardContainer.innerHTML +=`
        <div class="col-12 col-md-6 col-lg-4  p-3">
             <div class="single-card">
                 <div class="single-card-img">
                    <img src="${card.url}" alt="" data-url="${card.url}" >
                 </div>
                 <div class="card-description">${card.title}</div>
             </div>
         </div>`
        
    });
    //raccolta dati per eventListner
    const singleCard = document.querySelectorAll('#container-cards .single-card');
    const overlay = document.getElementById("overlay");
    const btnClose=document.getElementById("btn-close");
    const overlayImg = document.getElementById("img-overlay")
    
    singleCard.forEach((card, i) => {
         //console.log(card);
   
         if (i %2 === 0){
            card.classList.add("right");
            card.classList.remove("left");
        }
        else{
            card.classList.add("left");
            card.classList.remove("right");
        }

         
    card.addEventListener("click", function () {
         //console.log(this);
         
    overlayImg.innerHTML=``;   
    overlay.classList.remove("d-none");
    const url = this.querySelector("img").getAttribute('data-url');
    overlayImg.innerHTML +=`<img src="${url}" alt="">`;
         //console.log(overlayImg);
    
    })
    })

    btnClose.addEventListener("click",()=>{
        overlay.classList.add("d-none");
        
        
    })
    
} )

