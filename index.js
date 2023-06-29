document.getElementsByClassName("click_here")[0].addEventListener("click",()=>{
    document.getElementsByClassName("pop_up")[0].classList.toggle("pop_active");
})
document.addEventListener("click",(e)=>{
   
    if(e.target.closest(".cross") || e.target.closest(".save") || e.target.closest(".cancel")){
        document.getElementsByClassName("pop_up")[0].classList.toggle("pop_active");
    }
   
    if(e.target.closest(".cross") || e.target.closest(".pop_up") || e.target.closest(".click_here")){

    }else{
        document.getElementsByClassName("pop_up")[0].classList.toggle("pop_active");
    }
   
    
})