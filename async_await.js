
//populat selectu cu optiuni

async function showBreeds(){
    try{
    let lista= await fetch("https://dog.ceo/api/breeds/list/all");
    lista = await lista.json();   
    
     console.log(lista);
    let caine= await lista.message;    




    populateBreedOptions(caine);
  

    }catch(e){
        
        console.log(e);
    }
   

}


  
let populateBreedOptions=(rasele)=>{




    let sel=document.querySelector(".allDogs");


    for(let e in rasele){

         let option=document.createElement("option");

         option.textContent=e;


         sel.appendChild(option);
    }

}




async function generateDogByBreed(text){
    
    try{
        let generareRasa=await fetch(`https://dog.ceo/api/breed/${text}/images/random`);



        let caine=await generareRasa.json();

        let image= await caine.message;

    
        let  dog=document.querySelector(".dogPics");

        dog.src=image;





    }
    catch(e){
        console.log("A aparut o eroare la generarea random");

    }

}



//cand apsa pe un breed sa sgeneram o imagine

let sel=document.querySelector(".allDogs");



sel.addEventListener("change", async (e)=>{


       
    let value=sel.value;


    try{


         await generateDogByBreed(value);


    }catch(e){


        alert("ceva  nu a mers bine")
    }



});




showBreeds();

async function randomGenerationOfBreeds(){
    try{
        let dogImage=document.querySelector(".dogPics");
        let sel=document.querySelector(".allDogs");
        let more=sel.value;
        
        let rasaCaine=await fetch(`https://dog.ceo/api/breed/${more}/images/random`);
       



        let caine=await rasaCaine.json();

        let imageUrl= await caine.message;

         

        dogImage.src=imageUrl;


    }catch(e){
        alert("A aparut o eroare cand ati apasat pe click more");

    }
}

let linkMore=document.getElementById('moreInfo');



linkMore.addEventListener("click",async(e)=>{
  randomGenerationOfBreeds();

});