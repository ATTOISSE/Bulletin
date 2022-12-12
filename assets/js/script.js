let modal = null

       const openModal = function(e)
       {
           e.preventDefault()
      const target = document.querySelector(e.target.getAttribute('href'));  
      target.style.display = null;
      target.removeAttribute('aria-hidden');
      target.setAttribute('aria-modal',true);
     // console.log(e.target.getAttribute('href'));
      modal = target;
      modal.addEventListener('clik',closeModal)
      modal.querySelector('.js-modal-close').addEventListener('click',closeModal)
     // modal.querySelector('.js-modal-stop').addEventListener('click',stotPropagation)
       }

const closeModal = function(e)
{
    if(modal === null) return
    e.preventDefault()
      modal.style.display = "none";
      modal.setAttribute('aria-hidden',true);
      modal.removeAttribute('aria-modal');
      modal.removeEventListener('click',closeModal)
      modal.querySelector('.js-modal-close').removeEventListener('click',closeModal)
     // modal.querySelector('.js-modal-stop').removeEventListener('click',stotPropagation)
      modal = null
}
window.addEventListener('keydown',function(e){
    if(e.key==="Escape" || e.key==="Esc" || e.key==="Enter")
    {
        closeModal(e);
    }
})

/* const stotPropagation = function (e)
{
    e.stotPropagation()
} */
  document.querySelectorAll(".js-modal").forEach(a=>{
        a.addEventListener('click',openModal)


    })