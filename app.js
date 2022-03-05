let allBreeds=document.getElementById("breeds");
let dogPics=document.querySelector(".pozeCaini");
let formDogs=document.querySelector(".formDog");
let selectBreeds=document.querySelector(".selectBred");
let sel=document.querySelector(".allDogs");
let img=document.querySelector(".dogPics");

fetch("https://dog.ceo/api/breeds/list/all")
.then(a => a.json())
.then (d =>d.message)
.then(r=>{

    for(let e in r){
        let options=document.createElement('option');
        options.textContent=e;
        sel.appendChild(options);

    }
})
.catch (error => console.log('A aparut o erore'))





sel.addEventListener("change",(e)=>{

      let v=sel.value;
      fetch(`https://dog.ceo/api/breed/${v}/images/random`)
      .then(a=>a.json())
      .then (r=>r.message)
      .then(data=>{

      

        img.src=data;

      })
      .catch(e=>console.log("A aparut o eroare"));
});

let moreInfo=document.getElementById('moreInfo');
moreInfo.addEventListener("click",(e)=>{

    let more=sel.value;
    fetch(`https://dog.ceo/api/breed/${more}/images/random`)
    .then(a=>a.json())
    .then(r=>r.message)
    .then(data=>{
        img.src=data;
    })
    .catch(e=>console.log("A aparut o eroare"));
})

