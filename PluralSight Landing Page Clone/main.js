// let container = document.querySelector('.container');

// container.addEventListener('mouseover',()=> {
//     container.childNodes[1].classList.add('img-darken');
// })

// container.addEventListener('mouseout',()=> {
//     container.childNodes[1].classList.remove('img-darken');
// })


let darkenImage = document.querySelector('.img-background');

darkenImage.addEventListener('mouseover', ()=>{
    darkenImage.classList.add('img-darken');
})

darkenImage.addEventListener('mouseout', ()=>{
    darkenImage.classList.remove('img-darken');
})