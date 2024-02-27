  const form = document.getElementById("form");
  const input = document.getElementById("TextInput");
 const submit_btn = document.getElementById("submit_btn");
  const delete_btn = document.getElementById("delete_btn");


 submit_btn.addEventListener("click", function () {
    localStorage.setItem(input.value, JSON.stringify(input.value));
     });

 form.onsubmit = function (e) {
    e.preventDefault();
  
   
   localStorage.setItem("name", JSON.stringify(input.value)); 
   input.value= "";

   const elemento= document.getElementById("frase");
   elemento.textContent=localStorage.getItem("name");


  };
  delete_btn.onclick=function(){
   input.value= "";
   localStorage.removeItem("name");

  }; 

  function mostraValore() {
    
  }
































// const check=function () {
//   // controllo se cè qualcosa salvato  nel local dtorage con la chiave user 
//   if (localStorage.getItem("user")) {
    
//     // se ce un valore salvato con la chiave ella local storage viene creao un messaggio 
//     txt= "nome:"+ localStorage.getItem("user");
//   } 
//   //   // se è stat rovato un valore nel local storage , verra visualizzato all'interno delle'elemento con class frase 
//   document.querySelector(".frase").innerHTML=txt;
// };


// // // funzione di salvataggio 
// const save =function() {
//   //   // recupero il valore inserito nell'input con id user .value restituisce il valore attuale dell'input
//   let user = document.getElementById("user").value;
//   //   // memoriziamo  anche dopo il ricaricamneto della pagina  nel local storage 
//   localStorage.setItem("user",user);
  
//   check();
// };

// // // funzione per cancellare
// const deleteData = function () {
//   //   // rimuove l'elemento  con id user memorizzato nella localstorage
//   localStorage.removeItem("user")
//   //   // cancello il testo inserito nelimput e il contenuto del ellemeto frase
//   document.getElementById( "user" ).value="";
//   document.querySelector(".frase").innerHTML="";
  
// }
// window.onload=check;
