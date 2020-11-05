var deleteButtons=document.querySelectorAll(".icon2")
var heartbutton =document.querySelectorAll(".icon")
var plusbutton=document.querySelectorAll(".plus")
var moinbutton=document.querySelectorAll(".icon1")
var totalebutton=document.querySelectorAll("#totale")



Array.from(deleteButtons).map((el)=>{
    el.addEventListener("click",()=>{
        el.parentElement.remove();

    });
});
Array.from(heartbutton).map((el)=>{
    el.addEventListener("click",()=>{
      el.classList.toggle("red");

    });
});
Array.from(plusbutton).map((el)=>{
    el.addEventListener("click",()=>{
   var qte=el.nextElementSibling.nextElementSibling.nextElementSibling
   console.log(qte);
   qte.innerHTML= parseInt(qte.innerHTML.replace("Qte=" , ""))+1+"" +"Qte"
   


    });
});
Array.from(moinbutton).map((el)=>{
    el.addEventListener("click",()=>{
   var qte=el.nextElementSibling
   console.log(qte);
   qte.innerHTML= parseInt(qte.innerHTML.replace("Qte=" , ""))-1+"" +"Qte"

    });
});

