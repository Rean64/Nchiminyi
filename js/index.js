// model
const boxEl = document.querySelector('.containers')
const modeEl = document.querySelector('.box')
// const heroEl = document.querySelector('.hero')
const closeEl = document.querySelector('.close1')
const closeEll = document.querySelector('.close2')
const btnEll = document.querySelector('.btn-model')

btnEll.addEventListener('click', ()=>{
    // heroEl.classList.add('actives')
    boxEl.classList.remove('actives')
    // modeEl.classList.add('actives')
})

closeEl.addEventListener('click', ()=>{
    // heroEl.classList.remove('actives')
    boxEl.classList.add('actives')
    // modeEl.classList.remove('actives')
})
closeEll.addEventListener('click', ()=>{
    // heroEl.classList.remove('actives')
    boxEl.classList.add('actives')
    // modeEl.classList.remove('actives')
})


const toggle = document.querySelector('.navbar-toggler')
const show = document.querySelector('.navbar-collapse')

toggle.addEventListener('click', function(){
    if(toggle){
        console.log('btn');
        show.classList.remove('activas');
        setTimeout(() => {
            show.classList.add('activas');
            console.log("closed by timeout");
        }, 3000);
    }
})
// const btnEl = document.querySelector('.btn-play')
// const closeIconEl = document.querySelector('#close')
// const trailerContainerEl = document.querySelector('.trailer-container')
// const videoEl = document.querySelector('video')

// btnEl.addEventListener('click', () =>{
//     trailerContainerEl.classList.remove('activa')
// })

// closeIconEl.addEventListener('click', () => {
//     trailerContainerEl.classList.add('activa')
//     videoEl.pause()
//     videoEl.currentTime = 0
// })

