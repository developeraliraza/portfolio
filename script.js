var ab = document.querySelector("h5");

var btn=document.querySelector("#add");
var check=0

btn.addEventListener("click",function(){
    if(check==0){
    ab.innerHTML="Friends"
    ab.style.color="green"
    btn.innerHTML="Remove Friends"
   check=1;
    }
    else{
        ab.innerHTML="Stranger"
    ab.style.color="red"
    btn.innerHTML="Add Friends"
   check=0;
    }
})