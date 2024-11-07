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
    


} )