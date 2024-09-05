const SideBtn = document.getElementById('js-sidebtn')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300) {
        SideBtn.classList.add('show')
    } else{
        SideBtn.classList.remove('show');
    }
})
// showanimate

SideBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
})