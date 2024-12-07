
const toggleSidebar=()=>{
    const sidebar = document.querySelector(".set2");
   const openMenu =document.querySelector(".open-menu");

   sidebar.classList.toggle("active");
   

    

    
}

document.addEventListener("DOMContentLoaded", function () {
   // Trigger the first element's animation immediately on page load
   const firstReveal = document.querySelector('.reveal');

   if (firstReveal) {
       // Add the active class to the first reveal element, triggering its animation
       firstReveal.classList.add('active');
   }

 

   // Now continue with the scroll-triggered animation logic
   window.addEventListener("scroll", reveal);
   window.addEventListener("load",reveal);

   function reveal() {
       var reveals = document.querySelectorAll(".reveal");
       
       for (var i = 0; i < reveals.length; i++) {
           var windowHeight = window.innerHeight;
           var revealTop = reveals[i].getBoundingClientRect().top;
           var revealPoint = 20;

           if (revealTop < windowHeight - revealPoint && revealTop > 0) {
               reveals[i].classList.add("active");
           } else {
               reveals[i].classList.remove("active");
           }
       }
   
   }

})








