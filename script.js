//

const body= document.querySelector(".image");



async function getDog(){

    body.innerHTML=`

    <h1>finding Dog for you ......</h1>



 `
    const response= await fetch(`https://dog.ceo/api/breeds/image/random `);
    body.innerHTML=`

    <h1>finding Dog for you ......</h1>



 `
    
    const data= await response.json();
    // console.log(data);
    
    
    


    body.innerHTML=`
     

    <img src="${data.message}" alt="">


    `
   



}

getDog();